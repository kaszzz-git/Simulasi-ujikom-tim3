// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuxlxP5e_JWsoLSrQpUZ9odaKIvyRwu1g",
  authDomain: "montoring-iot-simulasi-ujikom.firebaseapp.com",
  databaseURL: "https://montoring-iot-simulasi-ujikom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "montoring-iot-simulasi-ujikom",
  storageBucket: "montoring-iot-simulasi-ujikom.firebasestorage.app",
  messagingSenderId: "611343713562",
  appId: "1:611343713562:web:5de978a0ea00c3ad0818a3",
  measurementId: "G-1RT9VQMQJJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;

