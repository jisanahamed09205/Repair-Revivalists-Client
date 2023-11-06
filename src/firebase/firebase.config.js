// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCvSXgPZmu2ITOYNcMvNaKiOG99OTunGrA",
//   authDomain: "repairrevivalists.firebaseapp.com",
//   projectId: "repairrevivalists",
//   storageBucket: "repairrevivalists.appspot.com",
//   messagingSenderId: "151836068407",
//   appId: "1:151836068407:web:593f2c22a71648c035cdb2"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;