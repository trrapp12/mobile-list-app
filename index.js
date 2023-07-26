import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { getInput, resetInputField, displayList, clearList} from './utils/util-functions.js'

// set up constants
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListContainer = document.querySelector('#shopping-list');

// setup Firebase app
const appSettings ={
    databaseURL : 'https://mobile-list-app-default-rtdb.firebaseio.com/'
};
const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInListInDB = ref(database, 'items');

onValue(itemsInListInDB, (snapshot) => {
    let currentItemKey;
    let currentItemValue;
    clearList(shoppingListContainer);
    let itemsArray = Object.entries(snapshot.val())
    console.log(itemsArray)
    itemsArray.map(item => {
        currentItemKey = item[0]
        currentItemValue = item[1]
        displayList(shoppingListContainer, currentItemValue)
        console.log(item[0])
    })
    resetInputField(inputFieldEl);
})
// console.log(app);


addButtonEl.addEventListener('click', function() {
    let inputValue = getInput(inputFieldEl);
    push(itemsInListInDB, inputValue);
    console.log(`${inputValue} added to database`);
})