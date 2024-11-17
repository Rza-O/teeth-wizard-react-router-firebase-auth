// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4cUSJeM5EXS919sb_CyspaoMMTAHj7zI",
    authDomain: "second-conceptual-projec-23e2a.firebaseapp.com",
    projectId: "second-conceptual-projec-23e2a",
    storageBucket: "second-conceptual-projec-23e2a.firebasestorage.app",
    messagingSenderId: "228211238496",
    appId: "1:228211238496:web:590d80bfc537a3ef510505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;