//console.log('Hello from index.js')
import { initializeApp } from 'firebase/app'
import {
	getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyAk1nowx8vX5ldGodciK1h_g0LFmFesAQE",
	authDomain: "fir-frontenddb.firebaseapp.com",
	projectId: "fir-frontenddb",
	storageBucket: "fir-frontenddb.appspot.com",
	messagingSenderId: "813394652129",
	appId: "1:813394652129:web:818c3e13a78e1cf78d80a0"
  };
//connect to the firebase project thats on the backend, from the frontend here by using the obj firebaseConfig

//init firebase
initializeApp(firebaseConfig)
//init the service firestore, represtensts the firebase connection
const db = getFirestore()
//reference to a specific collection
//first argument we pass the db, and then the col we are reffering to
const colRef = collection(db, 'books')
//get the col data
//colref as an argument, looks at the col and gets the data in it
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
  })
  .catch(err => {
    console.log(err.message)
  })