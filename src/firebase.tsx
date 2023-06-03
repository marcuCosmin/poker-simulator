import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCL0RzumsFjfD22IC4gmies4ng4HyiOJi0",
  authDomain: "poker-simulator-ce59d.firebaseapp.com",
  projectId: "poker-simulator-ce59d",
  storageBucket: "poker-simulator-ce59d.appspot.com",
  messagingSenderId: "564531177487",
  appId: "1:564531177487:web:9a97074043c52b95075b7a",
}

initializeApp(firebaseConfig)

export const database = getFirestore()
