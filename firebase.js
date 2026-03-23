import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpA9ZGfWyWVsY1PsYL19dOf_CZsjPDUoM",
  authDomain: "smm-penal-6a0c0.firebaseapp.com",
  projectId: "smm-penal-6a0c0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
window.signup = function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Success ✅");
    })
    .catch(err => alert(err.message));
}

// Login
window.login = function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success 🚀");

      // 🔥 Redirect FIX
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}
