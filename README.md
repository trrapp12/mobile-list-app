# checkOUT before you CHECKout

### Contributors: Trevor Rapp

*significantly redesigned and refactored, based on a [Scrimba Project](https://scrimba.com/learn/frontend/lets-build-a-mobile-app-with-firebase-coafc415fb8e007eadfa60822) by Rafid Hoda.*  

[https://user-images.githubusercontent.com/11747875/222486766-c540a42b-b98d-4825-a53a-0508b19b3f8c.mp4](https://user-images.githubusercontent.com/11747875/256679378-bbc466f8-ede7-4bf7-bad8-e68ce6cd67d9.mov)

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141830030-bb37c7b2-7c74-43fa-b705-779189b9f380.png)](https://gentle-monstera-8c285d.netlify.app/)

<br>
<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="JavaScript" width="26px" src="https://user-images.githubusercontent.com/11747875/256434836-f9749344-2de1-4596-ad18-60219cf88ae4.png" />
<br>

<br/>

---

### DESCRIPTION:

> “Remembering that I’ll be dead soon is the most important tool I’ve ever encountered to help me make the big choices in life. Almost everything — all external expectations, all pride, all fear of embarrassment or failure — these things just fall away in the face of death, leaving only what is truly important. Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.”
>
> — Ryan Holiday, Daily Stoic.

The mission of checkOUT is to inspire you to checkoff your bucket list before you checkout of life.  It does it by:

* providing a progressive web app with CRD (create, read, delete) functionality that fits in the palm of your hand
* adds distinctive rewards when you complete your tasks
* provides it in a well designed, mobile-first, responsive layout

---

### Quickstart guide: 

To use the app simply click on the ```View Project``` button or visit https://gentle-monstera-8c285d.netlify.app/. 

---

### THIS PROJECT DEMONSTRATES...

🆕 CRD (create, read, delete) functionality with a firebase database

🆕 deploy progressive web app to Netlify

🆕 Utilizing getDatabase(), ref(), push(), onValue(), and remove() methods for firebase database

🆕 Creating and importing utility functions

🆕 Dynamically creating, assigning attributes, and appending nested elements in vanilla javascript

🆕 Using webmanifest

🆕 Converting objects to arrays

🆕 Mapping through arrays

🆕 String literals 

🆕 Flex-box

🆕 Responsive, mobile first design

🆕 Utilizing git and github for CVN

---

### CHALLENGES I OVERCAME...

* This was my first time in quite a while connecting to a Firebase database.  I had to reacquaint myself with it.  The process wasn't necessarily very hard, but it was probably the area I experienced the most growth as I had little exprience in it before.

* In the original instructions they created an eventlistener on a single dynamically created element so that when you double clicked on a list item it removed it from the list and the database.  For the sake of practice I decided to extend the process by adding a check mark which would have to detect the click, do a logic comparison to see if it's checked, and then remove the item.  While the logic isn't hard, it did require me to dynamically make a nested group of elements, along with dynamically assigning them id's and attributes and classes and then append an eventlistener onto them.  This added a few more steps of complexity than what hte original tutorial demanded.

```javascript  

function createList (el, value, id) {
    let newDiv = document.createElement('div');

    let newCheckBox = document.createElement('input')
    newCheckBox.setAttribute('type', 'checkbox')
    newCheckBox.setAttribute('id', `${id}`)

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
    
```

* setting up an eventlistener that resembles a hover on a button, but that increases the scale of a background image to make it appear to "pop" out at you.  Normally the hover would be a simple ```:hover``` in CSS.  But to listen to something on element "A" that effects element "B" can't be accomplished by CSS.  But Javascript doesn't have a "hover" event.  Enter "mouseenter" and "mouseleave".  And how do you make sure the listener is applied after all elements are on the page?  I had to wrap it in another load eventlistener on the window object.

```javascript

window.addEventListener('load', () => {

    const playingCardDiv = document.querySelector('.playing-card')
    const addButton = document.querySelector('#add-button')

    addButton.addEventListener('mouseover', () => {
        playingCardDiv.style.transform = 'scale(1.02)'
    })

    addButton.addEventListener('mouseleave', () => {
        playingCardDiv.style.transform = 'scale(1.0)'
    })
})

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] complete graphic redesign
- [X] instead of dynamically creating one element, built it out to dynamically build out a nested element that also dynamically assigned classes, attributes, and added an eventlistener
- [X] using Javascript to imitate a "hover" effect in CSS
- [X] simplifying and refactoring code and breaking it out into a utility function file
- [X] AI generated artwork
- [ ] gamification principles
- [ ] Oauth

---

### Attributions

<a href="https://www.flaticon.com/free-icons/skull" title="skull icons">Skull icons created by Smashicons - Flaticon</a>

Memento Mori is AI generated artwork by Trevor Rapp using <a href="https://www.imagine.art/">Imagine Art</a>.

---

### YOU CAN FIND ME AT:

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*


