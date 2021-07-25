const dino = document.querySelector('.dino')

function handleKeyUp(event) {
    if(event.keyCode===32){
        console.log('Pressionou espaço')
    }
}

document.addEventListener('keyup', handleKeyUp)