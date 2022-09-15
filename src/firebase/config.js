import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFw15GAJQGvTXEZZdqVDeiY3geMmRiPus",
  authDomain: "native-auth-cf798.firebaseapp.com",
  projectId: "native-auth-cf798",
  storageBucket: "native-auth-cf798.appspot.com",
  messagingSenderId: "791560797150",
  appId: "1:791560797150:web:6ab656627c390502e07b4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}