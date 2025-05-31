// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzUM2qOi0_Ctn2tVVjrnmtrNx-JAVX6xk",
    authDomain: "portafolio-personal-4f8a8.firebaseapp.com",
    databaseURL: "https://portafolio-personal-4f8a8-default-rtdb.firebaseio.com",
    projectId: "portafolio-personal-4f8a8",
    storageBucket: "portafolio-personal-4f8a8.firebasestorage.app",
    messagingSenderId: "584327899409",
    appId: "1:584327899409:web:1ca614df004177c9c5c4b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();