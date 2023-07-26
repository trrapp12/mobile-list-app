export function getInput(el) {
    return el.value;
}

export function resetInputField(el) {
    el.value = ''
}

export function displayList (el, value) {
    let newItemEl = document.createElement('li');
    let itemText = value
    newItemEl.textContent = itemText;
    el.append(newItemEl)
}

export function clearList (el) {
    el.innerHTML = ""
}