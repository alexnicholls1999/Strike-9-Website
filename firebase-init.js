// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPNHAjABhqpPLaccRKAUygVvuLftKjoWs",
    authDomain: "strike-9-prototype.firebaseapp.com",
    databaseURL: "https://strike-9-prototype.firebaseio.com",
    projectId: "strike-9-prototype",
    storageBucket: "strike-9-prototype.appspot.com",
    messagingSenderId: "527326935811",
    appId: "1:527326935811:web:5d2cead3c25b4f46994736"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase);

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

