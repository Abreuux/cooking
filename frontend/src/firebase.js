import { initializeApp } from 'firebase/app';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  projectId: "necotium-96d02",
  // Outras configurações serão adicionadas após a inicialização do projeto
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, 'us-central1-necotium-96d02');

export { functions }; 