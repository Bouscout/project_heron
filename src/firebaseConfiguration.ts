// settings for firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: import.meta.env.PUBLIC_API_KEY,
//     authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
//     projectId: import.meta.env.PUBLIC_PROJECT_ID,
//     storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SENDER_ID,
//     appId: import.meta.env.PUBLIC_APP_ID,
//     measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAotAgjDZqJwWtV_MtwqL9WQlvyhL9TUmw",
    authDomain: "pixelpoetry-6370b.firebaseapp.com",
    projectId: "pixelpoetry-6370b",
    storageBucket: "pixelpoetry-6370b.appspot.com",
    messagingSenderId: "115992111259",
    appId: "1:115992111259:web:b57d9d7e20c0829861be3e",
    measurementId: "G-KR7S54PNFK"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getDB = () => {
    return db
}

export default getDB
