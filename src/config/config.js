import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCHAxn5E4GnF1Ra_quEuqVbfLiyfQbxxoY",
    authDomain: "billing-21675.firebaseapp.com",
    databaseURL: "https://billing-21675.firebaseio.com",
    projectId: "billing-21675",
    storageBucket: "billing-21675.appspot.com",
    messagingSenderId: "859024905486",
    appId: "1:859024905486:web:2d19579dce78d427c2f35f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;