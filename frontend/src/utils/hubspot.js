/**
 * HubSpot Form Integration Utility
 * 
 * This utility provides functions to submit form data to HubSpot
 * while maintaining the existing React form UI/UX.
 */

// HubSpot configuration
const HUBSPOT_CONFIG = {
  portalId: '49184225',
  region: 'na1',
  forms: {
    contact: 'c2fff5d5-5923-4da4-9035-f9a12bf3bd3f',
    demo: 'c2fff5d5-5923-4da4-9035-f9a12bf3bd3f' // Using same form ID as provided
  }
};

/**
 * Load HubSpot forms script if not already loaded
 * @returns {Promise} Promise that resolves when script is loaded
 */
const loadHubSpotScript = () => {
  return new Promise((resolve, reject) => {
    // Check if HubSpot forms script is already loaded
    if (window.hbspt && window.hbspt.forms) {
      resolve();
      return;
    }

    // Check if script is already in DOM
    const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
    if (existingScript) {
      existingScript.addEventListener('load', resolve);
      existingScript.addEventListener('error', reject);
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = `https://js.hsforms.net/forms/embed/${HUBSPOT_CONFIG.portalId}.js`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Wait a bit for hbspt to be available
      setTimeout(() => {
        if (window.hbspt && window.hbspt.forms) {
          resolve();
        } else {
          reject(new Error('HubSpot forms not available after script load'));
        }
      }, 100);
    };
    
    script.onerror = () => reject(new Error('Failed to load HubSpot forms script'));
    
    document.head.appendChild(script);
  });
};

/**
 * Submit form data to HubSpot
 * @param {string} formType - Type of form ('contact' or 'demo')
 * @param {Object} formData - Form data to submit
 * @returns {Promise} Promise that resolves when submission is complete
 */
export const submitToHubSpot = async (formType, formData) => {
  try {
    // Ensure HubSpot script is loaded
    await loadHubSpotScript();

    const formId = HUBSPOT_CONFIG.forms[formType];
    if (!formId) {
      throw new Error(`Unknown form type: ${formType}`);
    }

    // Map form data to HubSpot field names
    const hubspotData = mapFormDataToHubSpot(formData, formType);

    return new Promise((resolve, reject) => {
      window.hbspt.forms.create({
        region: HUBSPOT_CONFIG.region,
        portalId: HUBSPOT_CONFIG.portalId,
        formId: formId,
        target: '#hubspot-form-container', // We'll create a hidden container
        onFormSubmit: function($form) {
          // Form is being submitted
          console.log('HubSpot form submitted');
        },
        onFormSubmitted: function($form) {
          // Form submission completed successfully
          console.log('HubSpot form submission completed');
          resolve();
        },
        onFormReady: function($form) {
          // Form is ready, now submit it programmatically
          try {
            // Fill form fields with our data
            Object.entries(hubspotData).forEach(([fieldName, value]) => {
              const field = $form.find(`[name="${fieldName}"]`);
              if (field.length > 0) {
                field.val(value);
              }
            });

            // Submit the form
            $form.submit();
          } catch (error) {
            reject(error);
          }
        },
        onFormDefinitionFetchError: function(error) {
          reject(new Error('Failed to fetch HubSpot form definition'));
        }
      });
    });

  } catch (error) {
    console.error('HubSpot submission error:', error);
    throw error;
  }
};

/**
 * Alternative method using HubSpot Forms API directly
 * @param {string} formType - Type of form ('contact' or 'demo')
 * @param {Object} formData - Form data to submit
 * @returns {Promise} Promise that resolves when submission is complete
 */
export const submitToHubSpotAPI = async (formType, formData) => {
  try {
    const formId = HUBSPOT_CONFIG.forms[formType];
    if (!formId) {
      throw new Error(`Unknown form type: ${formType}`);
    }

    // Map form data to HubSpot field names
    const hubspotData = mapFormDataToHubSpot(formData, formType);

    // Convert to HubSpot API format
    const fields = Object.entries(hubspotData).map(([name, value]) => ({
      name,
      value: value || ''
    }));

    const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_CONFIG.portalId}/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          hutk: getHubSpotCookie()
        }
      })
    });

    if (!response.ok) {
      throw new Error(`HubSpot API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('HubSpot submission successful:', result);
    return result;

  } catch (error) {
    console.error('HubSpot API submission error:', error);
    throw error;
  }
};

/**
 * Map form data to HubSpot field names
 * @param {Object} formData - Original form data
 * @param {string} formType - Type of form ('contact' or 'demo')
 * @returns {Object} Mapped data for HubSpot
 */
const mapFormDataToHubSpot = (formData, formType) => {
  const baseMapping = {
    name: 'firstname', // Assuming name is first name, adjust if needed
    email: 'email',
    phone: 'phone',
    company: 'company',
    message: 'message'
  };

  const demoMapping = {
    ...baseMapping,
    position: 'jobtitle',
    sector: 'industry',
    interest: 'area_of_interest__demo_form_',
    preferredDate: 'preferred_demo_date'
  };

  const mapping = formType === 'demo' ? demoMapping : baseMapping;
  
  const hubspotData = {};
  Object.entries(formData).forEach(([key, value]) => {
    const hubspotField = mapping[key];
    if (hubspotField && value) {
      hubspotData[hubspotField] = value;
    }
  });

  return hubspotData;
};

/**
 * Get HubSpot tracking cookie for better attribution
 * @returns {string|null} HubSpot tracking cookie value
 */
const getHubSpotCookie = () => {
  const name = 'hubspotutk=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
};

/**
 * Create hidden container for HubSpot forms if it doesn't exist
 */
export const ensureHubSpotContainer = () => {
  let container = document.getElementById('hubspot-form-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'hubspot-form-container';
    container.style.display = 'none';
    document.body.appendChild(container);
  }
  return container;
};

/**
 * Initialize HubSpot integration
 * Call this once when the app starts
 */
export const initializeHubSpot = async () => {
  try {
    await loadHubSpotScript();
    ensureHubSpotContainer();
    console.log('HubSpot integration initialized');
  } catch (error) {
    console.error('Failed to initialize HubSpot:', error);
  }
};

export default {
  submitToHubSpot,
  submitToHubSpotAPI,
  initializeHubSpot,
  ensureHubSpotContainer
};
