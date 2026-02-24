// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPtNVslidmNWtzgupihOgFk8a5AgAwhA8",
  authDomain: "confirma-ebfc3.firebaseapp.com",
  projectId: "confirma-ebfc3",
  storageBucket: "confirma-ebfc3.firebasestorage.app",
  messagingSenderId: "261676539561",
  appId: "1:261676539561:web:5ba30e7573f5373413d3b8",
  measurementId: "G-J3L14QB1KZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);