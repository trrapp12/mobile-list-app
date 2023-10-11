import { initializeApp } from 'firebase/app';
import { getDatabase, 
    ref, 
    push, 
    onValue, 
    remove 
} from 'firebase/database'
import { getInput, 
    resetInputField, 
    clearList,
     validateEntry
    } from './utils/util-functions.js'
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

console.log('index.js fired')

// ********************  FIREBASE CONFIG  ********************  
const firebaseConfig = {
    apiKey: "AIzaSyC2g0lW7xkGUUFXlxOpBJuc5Ta-0Zb1foo",
    authDomain: "mobile-list-app.firebaseapp.com",
    databaseURL: "https://mobile-list-app-default-rtdb.firebaseio.com",
    projectId: "mobile-list-app",
    storageBucket: "mobile-list-app.appspot.com",
    messagingSenderId: "169627007127",
    appId: "1:169627007127:web:b038f70cecce2566df51d2",
    measurementId: "G-Z8M10CD84Z"
};

// these need to be at the top to initialize app, auth, etc, etc.

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
let userI
const provider = new GoogleAuthProvider();

if (user) {
    const userID = user.uid
}


// ********************  CONSTANTS  ********************  

// input views
const loggedOutView = document.getElementById('logged-out');
const loggedInView = document.getElementById('logged-in-view');

// sign-in page elements (logged out view), ordered top to bottom
const googleSignInButton = document.getElementById('google-sign-in');
const emailInputEl = document.getElementById("email-input");
const passwordInputEl = document.getElementById("password-input");
const logInButton = document.getElementById('log-in-button')
const createAccountButton = document.getElementById('create-account');
// check list page elements (logged in view)
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListContainer = document.querySelector('#todo-list');
// sign out page
const signOutButton = document.getElementById('sign-out-btn')

// other constants
const errorMessageText = 'error: cannot accept the following characters...!#$%^*()\/{}`~<>_'
const re = new RegExp('[!#$%\^\*()\\\/\{\}`~\<\>_]');


// ********************  EVENT LISTENERS  ********************  
googleSignInButton.addEventListener('click', authSignInWithGoogle)
logInButton.addEventListener('click', signInEmailPassword)
createAccountButton.addEventListener('click', createUserEmailPassword)
signOutButton.addEventListener('click', signOutMethod)


// ********************  FUNCTIONALITY  ********************  
showloggedOutView();

// auth functions
function authSignInWithGoogle () {
    console.log('sign in with Google')
    // google redirects needs to be called when the page loads
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log('signed in with google')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        clearAuthFields();
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode + " : " + errorMessage)
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}

function signInEmailPassword () {
    const email = emailInputEl.value;
    const password = passwordInputEl.value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      clearAuthFields()
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode + " : " + errorMessage)
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      showLoggedInView();
      const uid = user.uid;
      // ...
    } else {
        showloggedOutView();
      // User is signed out
      // ...
    }
  });

// Initialize Firebase Authentication and get a reference to the service
function createUserEmailPassword () {
    const email = emailInputEl.value;
    const password = passwordInputEl.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          clearAuthFields()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + " : " + errorMessage)
          // ..
        });
}

function signOutMethod() {
    console.log('sign out Method called')
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.error(error.message)
      });
}
// show/hide views

function hideElement (element) {
    element.style.display = 'none';
}

function showElement (element) {
    element.style.display = 'flex';
}

function showloggedOutView (element) {
    hideElement(loggedInView);
    showElement(loggedOutView);
}

function showLoggedInView () {
    hideElement(loggedOutView);
    showElement(loggedInView);
}

function clearInputField(field) {
	field.value = ""
}

function clearAuthFields() {
	clearInputField(emailInputEl)
	clearInputField(passwordInputEl)
}
// setup Firebase app

const database = getDatabase(app);
const itemsInListInDB = ref(database, `items/${user.uid}`);

onValue(itemsInListInDB, (snapshot) => {
    let currentItemKey;
    let currentItemValue;
    clearList(shoppingListContainer);

    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        console.log(itemsArray)
        itemsArray.map(item => {
            currentItemKey = item[0];
            currentItemValue = item[1];
            createList(shoppingListContainer, currentItemValue, currentItemKey, ref)
            console.log(item[0])
        })
    } else {
        shoppingListContainer.innerHTML = 'No items here...yet!'
    }

    resetInputField(inputFieldEl);
})

// logic for adding items to the list & db

addButtonEl.addEventListener('click', function() {
    console.log('add button clicked')
    let inputValue = getInput(inputFieldEl);
    console.log('input value is', inputValue)
    if (validateEntry(re, inputValue, errorMessageText)) {
        console.log('entry validated')
        push(itemsInListInDB, inputValue);
        console.log(`${inputValue} added to database`);
    } else {
        console.log('invalid entry: following characters are not accepted...^!#$%*()/\{}`~<>_')
    }

})

function createList (el, value, id) {
    let newDiv = document.createElement('div');

    let newCheckBox = document.createElement('input')
    newCheckBox.setAttribute('type', 'checkbox')
    newCheckBox.setAttribute('id', `${id}`)


    // newCheckBox.setAttribute('checked', 'checkbox')

    let newItemListItem = document.createElement('li');
    let itemText = value
    newItemListItem.textContent = itemText;


    newDiv.append(newCheckBox)
    newDiv.classList.add('list-div')
    newDiv.append(newItemListItem)
    el.append(newDiv)

    newCheckBox.addEventListener('click', (event) => {
        if(event.currentTarget.checked) {
            console.log('checked', event.currentTarget)
            let refLocationDB = ref(database, `items/${id}`);
            remove(refLocationDB)
        } else {
            console.log('item is not checked')
        }
    })
}