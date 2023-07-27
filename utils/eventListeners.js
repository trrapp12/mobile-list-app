window.addEventListener('load', () => {
    console.log('listener loaded')
    const playingCardDiv = document.querySelector('.playing-card')
    const addButton = document.querySelector('#add-button')

    addButton.addEventListener('mouseover', () => {
        console.log('float')
        playingCardDiv.style.transform = 'scale(1.02)'
    })

    addButton.addEventListener('mouseleave', () => {
        console.log('float')
        playingCardDiv.style.transform = 'scale(1.0)'
    })
})