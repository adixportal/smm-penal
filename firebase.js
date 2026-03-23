import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// 🔥 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDpA9ZGfWyWVsY1PsYL19dOf_CZsjPDUoM",
  authDomain: "smm-penal-6a0c0.firebaseapp.com",
  projectId: "smm-penal-6a0c0",
};

// 🔥 Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 Google Provider
const provider = new GoogleAuthProvider();


// 📝 SIGNUP
window.signup = function(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(()=>{
      alert("Signup Success ✅");
    })
    .catch(e=>alert(e.message));
}


// 🔐 LOGIN
window.login = function(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(()=>{
      window.location.href = "dashboard.html";
    })
    .catch(e=>alert(e.message));
}


// 🔥 GOOGLE LOGIN
window.googleLogin = function(){
  signInWithPopup(auth, provider)
    .then((result)=>{
      alert("Google Login Success 🚀");
      window.location.href = "dashboard.html";
    })
    .catch((error)=>{
      alert(error.message);
    });
}
