import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import { getInput, resetInputField, clearList} from './utils/util-functions.js'

// set up constants
const inputFieldEl = document.getElementById('input-field');
const addButtonEl = document.getElementById('add-button');
const shoppingListContainer = document.querySelector('#todo-list');

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
// console.log(app);


addButtonEl.addEventListener('click', function() {
    let inputValue = getInput(inputFieldEl);
    push(itemsInListInDB, inputValue);
    console.log(`${inputValue} added to database`);
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