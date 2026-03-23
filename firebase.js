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

window.signup = function(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(()=>alert("Signup Success"))
    .catch(e=>alert(e.message));
}

window.login = function(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(()=> window.location.href="dashboard.html")
    .catch(e=>alert(e.message));
}
