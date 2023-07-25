import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { displayInput, resetInputField, displayList} from './utils/util-functions.js'

// setup Firebase app
const appSettings ={
    databaseURL : 'https://mobile-list-app-default-rtdb.firebaseio.com/'
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInListInDB = ref(database, 'items');

onValue(itemsInListInDB, (snapshot) => {
    resetInputField(inputFieldEl);
    let itemsArray = Object.values(snapshot.val())
    itemsArray.map(x => displayList(shoppingListContainer, x))
})
// console.log(app);

// set up constants
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListContainer = document.querySelector('#shopping-list');

addButtonEl.addEventListener('click', function() {
    let inputValue = displayInput(inputFieldEl);
    push(itemsInListInDB, inputValue);
    console.log(`${inputValue} added to database`);
})