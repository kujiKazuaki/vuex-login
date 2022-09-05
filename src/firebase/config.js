// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6BwiY5KbzADdMaRnOdwrcDKFtDywPj4k",
  authDomain: "vuex-login-49620.firebaseapp.com",
  projectId: "vuex-login-49620",
  storageBucket: "vuex-login-49620.appspot.com",
  messagingSenderId: "1091724396484",
  appId: "1:1091724396484:web:9df0c116f9c8f02e33c691",
  measurementId: "G-L9K11FTQ60",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
