# checkOUT before you CHECKout

https://user-images.githubusercontent.com/11747875/222486766-c540a42b-b98d-4825-a53a-0508b19b3f8c.mp4

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141830030-bb37c7b2-7c74-43fa-b705-779189b9f380.png)](https://trrapp12.github.io/groovy-blocks/)

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

### THIS PROJECT DEMONSTRATES...

🆕 Use of Canvas API

🆕 Use of basic JavaScript principles like loops and conditionals to create a randomized, regenerating pattern.

🆕 CRUD functionality with a firebase database

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

This was the first time I used Canvas.  So it was a completely new experience.  The most obvious obstacle is learning the syntax.  After that there was a bit of conceptualizing how to create a grid of boxes that needed to occur through a nested for loop.  

But by far the most challenging was creating a timing function that would work dynamically so the interval on setInterval would be different everytime, but only with a range of 0 - 5 seconds.  My first attempt to accomplish this I created the following: 

```javascript  

    function setTimer() {
         const maxDelay = 2500;
         const delay = Math.floor(Math.random() * 2 + 1) * maxDelay;
         setInterval(() => {
             renderSquares()
             setTimer()
         }, delay)
    }

    setTimer()
    
```
    
My thought was to create a delay with `(Math.floor(Math.random() * 2) + 1 * maxDelay` where `maxDelay = 2500`.  This was unsucessful 1) because the `+1` served no purpose, and 2) because the `Math.floor()` created a situation where it would only return 1 or 5 since the 2 was always getting rounded down to either 0 or 1.  The second issue was that the timing function would start with a random interval, but eventually it would gradually speed up more and more until it became sickenly fast.  I thought at first it was because timesing something by a fraction over and over again will ultimately make it smaller and smaller.  However, when I console.log'ed the issue the interval times were fine.  Then I realized what was happening was every time the function fired it created a separate setInterval instance.  So I had to figure out how to clear them.  I could just add a `clearInterval()` since they were named.  So I discovered I could loop over the window object to find all the intervals and clear them all before setting a new one. This answer worked swimmingly.  The final timer function was this: 

```javascript

    function setTimer() {
        const maxDelay = 2500;
        const delay = (Math.random() * 2) * maxDelay;
        console.log(delay)
        setInterval(() => {
            for (let i = 0; i < 99999; i++) {
                window.clearInterval(i)
            }
            renderSquares()
            setTimer()
        }, delay)
    }

    setTimer()

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [ ] creating the random, ranged timing interval
- [ ] creating an animation effect that randomly chooses a color scheme for the blocks
- [ ] fixing the functionality so it would rerender on window resizeand the additionaly decoration on the pages.

---

### CREDITS:

Contributors: Trevor Rapp

Project inspired by [Creative Coding: Making Visuals with JavaScript](https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript) by [Bruno Imbrizi](https://www.domestika.org/en/bruno_imbrizi)


---

### Quick start:

```
$ npm install
$ npm start
````
---

### Photo Attribution

<a href="https://www.flaticon.com/free-icons/skull" title="skull icons">Skull icons created by Smashicons - Flaticon</a>

---

### YOU CAN FIND ME AT:

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037), or return to my [Github](https://github.com/trrapp12)*


