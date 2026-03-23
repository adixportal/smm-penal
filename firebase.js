<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpA9ZGfWyWVsY1PsYL19dOf_CZsjPDUoM",
  authDomain: "smm-penal-6a0c0.firebaseapp.com",
  projectId: "smm-penal-6a0c0",
  storageBucket: "smm-penal-6a0c0.firebasestorage.app",
  messagingSenderId: "1093670037662",
  appId: "1:1093670037662:web:df15998d860ed9b225738f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup
window.signup = function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Signup Success"))
    .catch(err => alert(err.message));
}

// Login
window.login = function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
}
</script>
