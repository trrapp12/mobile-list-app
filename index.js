import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

// setup Firebase app
const appSettings ={
    databaseURL : 'https://mobile-list-app-default-rtdb.firebaseio.com/'
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInListInDB = ref(database, 'items')

console.log(app)

// set up constants
const inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
const shoppingListContainer = document.querySelector('#shopping-list')

addButtonEl.addEventListener('click', function() {
    let inputValue = inputFieldEl.value
    
    push(itemsInListInDB, inputValue)
    console.log(`${inputValue} added to database`)

    shoppingListContainer.innerHTML += `<li>${inputValue}</li>`
})