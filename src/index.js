import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrT8jSDVzW9hfRCuVwN1DvWk-CPwwQjcs",
  authDomain: "cart-4cc1d.firebaseapp.com",
  projectId: "cart-4cc1d",
  storageBucket: "cart-4cc1d.appspot.com",
  messagingSenderId: "566825882170",
  appId: "1:566825882170:web:db515c37c0808c7d2a9b03",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
