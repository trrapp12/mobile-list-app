import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { getInput, resetInputField, displayList} from './utils/util-functions.js'

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
    let itemsArray = Object.values(snapshot.val())
    console.log(itemsArray)
    itemsArray.map(item => displayList(shoppingListContainer, item))
    resetInputField(inputFieldEl);
})
// console.log(app);


addButtonEl.addEventListener('click', function() {
    shoppingListContainer.innerHTML = ''
    let inputValue = getInput(inputFieldEl);
    push(itemsInListInDB, inputValue);
    console.log(`${inputValue} added to database`);

})