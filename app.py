from flask import Flask, render_template, jsonify, request, send_from_directory
import os
import logging
from logging.handlers import RotatingFileHandler

# Configure application
app = Flask(__name__, 
            static_folder='frontend/build/static',
            template_folder='frontend/build')

# Configure logging
if not app.debug:
    if not os.path.exists('logs'):
        os.mkdir('logs')
    file_handler = RotatingFileHandler('logs/necotium.log', maxBytes=10240, backupCount=10)
    file_handler.setFormatter(logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
    ))
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)
    app.logger.setLevel(logging.INFO)
    app.logger.info('Necotium startup')

@app.route('/')
@app.route('/<path:path>')
def index(path=None):
    """
    Serve the React application for all routes to enable React Router.
    
    This catch-all route ensures that all client-side routes are handled by React.
    """
    return render_template('index.html')

@app.route('/api/contact', methods=['POST'])
def contact():
    """
    Handle contact form submissions.
    
    Expects a JSON payload with contact information.
    Returns a success message upon receiving the data.
    """
    try:
        data = request.get_json()
        if not data:
            return jsonify({"status": "error", "message": "No data provided"}), 400
            
        # In a real app, you would save to database and/or send email
        app.logger.info(f"Received contact form: {data}")
        
        return jsonify({
            "status": "success", 
            "message": "Thank you for your message! We'll be in touch soon."
        })
    except Exception as e:
        app.logger.error(f"Error in contact form submission: {str(e)}")
        return jsonify({
            "status": "error", 
            "message": "An error occurred processing your request."
        }), 500

@app.route('/api/demo', methods=['POST'])
def demo():
    """
    Handle demo requests.
    
    Expects a JSON payload with demo request information.
    Returns a success message upon receiving the data.
    """
    try:
        data = request.get_json()
        if not data:
            return jsonify({"status": "error", "message": "No data provided"}), 400
            
        # In a real app, you would save to database and/or send email
        app.logger.info(f"Received demo request: {data}")
        
        return jsonify({
            "status": "success", 
            "message": "Demo request received. We'll contact you soon!"
        })
    except Exception as e:
        app.logger.error(f"Error in demo request: {str(e)}")
        return jsonify({
            "status": "error", 
            "message": "An error occurred processing your request."
        }), 500

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    """Handle 404 errors by returning the React app."""
    return render_template('index.html')

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors."""
    app.logger.error(f"Server error: {str(error)}")
    return jsonify({
        "status": "error",
        "message": "An internal server error occurred."
    }), 500

if __name__ == '__main__':
    app.run(debug=True)
