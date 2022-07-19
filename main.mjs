// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";
// import { doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// import { collection, getDocs, addDoc, setDoc ,doc } from "firebase/firestore";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";


const login_form = document.getElementById("login-form");
const register_form = document.getElementById("register-form");
console.log(login_form);

const auth = getAuth();

  
const db = getFirestore();

console.log(register_form)
  if (login_form) {
    login_form.addEventListener("submit", async (e) => {
        e.preventDefault();
        // console.log("submitted");
        const loginemail = login_form["email"].value;
        const loginpassword = login_form["password"].value;
        
      console.log(loginemail)
       

          const docRef = doc(db, "users",loginemail);
          const docSnap = await  getDoc(docRef);
          if (docSnap.exists()) {
            signInWithEmailAndPassword(auth, loginemail, loginpassword)
            .then((userCredential) => {
              console.log("Document data:", docSnap.data());
              alert("Signed In Successfully");
              window.location.replace("#");
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // alert("Wrong password entered!");
          });
        }
            
           else {
            // doc.data() will be undefined in this case
            alert("No such user exists!");
          }
    });
}

if(register_form)
{
  // console.log("hi in register")
  
    register_form.addEventListener("submit", (e) => {
      e.preventDefault();
if (register_form["username2"].value != "" && register_form["email2"].value != " " &&
    register_form["password2"].value != "" && (register_form["password2"].value.length) > 6 && register_form["confirm_password2"].value == register_form["password2"].value ) 
    {

    console.log("submitted")
    var email2 = register_form["email2"].value;
    var password2 = register_form["password2"].value
    var confirm_password2=register_form["confirm_password2"].value
    console.log(email2)
    
    createUserWithEmailAndPassword(auth, email2, password2).then((userCredential) => {
        console.log(userCredential.user)
        
          setDoc(doc(db, "users", email2), {
            username: register_form["username2"].value,
            email: email2,
        })
        .then(() => {
        console.log(userCredential);
        alert("Account Created")
        window.location.replace("#")
    })

    })
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
})
}
else{
    alert("form not filled correctly");
}
});
}