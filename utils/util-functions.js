export function getInput(el) {
    return el.value;
}

export function resetInputField(el) {
    el.value = ''
}

export function clearList (el) {
    el.innerHTML = ""
}

export function validateEntry (expression, value, errormessage) {
    if (expression.test(value) === false) { 
        return true;
    } else {
        alert(`${errormessage}`)
        return false;
    }
}

