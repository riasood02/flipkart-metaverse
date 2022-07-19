// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCfDulklJO21GEHKsRHAQltN1xGnAOLL7o",
    authDomain: "metaverse-flipkart.firebaseapp.com",
    projectId: "metaverse-flipkart",
    storageBucket: "metaverse-flipkart.appspot.com",
    messagingSenderId: "647229143194",
    appId: "1:647229143194:web:c3d1719abe8a6374f60723",
    measurementId: "G-5ZXS9JGJRZ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);