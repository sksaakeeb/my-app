// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMEEu60q-qDO7PqQQiBhLHBmW11fg5qGE",
  authDomain: "coaching-app-152d2.firebaseapp.com",
  projectId: "coaching-app-152d2",
  storageBucket: "coaching-app-152d2.firebasestorage.app",
  messagingSenderId: "870323327441",
  appId: "1:870323327441:web:417929ac111ba2f8d090f0",
  measurementId: "G-RNXVXF8KRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
const analytics = getAnalytics(app);
