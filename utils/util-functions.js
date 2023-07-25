export function getInput(el) {
    return el.value;
}

export function resetInputField(el) {
    el.value = ''
}

export function displayList (el, value) {
    el.innerHTML += `<li>${value}</li>`
}
