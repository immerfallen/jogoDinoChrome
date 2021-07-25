const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position =0

function handleKeyUp(event) {
    if(event.keyCode===32){
        if(!isJumping){
            jump()
        }
        
    }
}

function jump(){
    isJumping = true
    
    let upInterval = setInterval(() => {
        if(position>=150){
            clearInterval(upInterval)
            let downInterval = setInterval(() => {                
                position -= 20                
                if(position>0){
                    dino.style.bottom =  position + 'px'
                    
                } else{
                    clearInterval(downInterval)
                    dino.style.bottom = 0 + 'px '
                    isJumping = false
                }
            }, 20)         
        }
        else{
            position += 20
            dino.style.bottom = position + 'px' 
            
        }
        
    },20)
}

function createCactus(){
    const cactus = document.createElement('div')
    let cactusPosition = 1200    
    let randomTimer = Math.random()*6000
    cactus.classList.add('cactus')
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {

        if(cactusPosition < -60){
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval) 
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo</h1>'
        }
        else {
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)
    setTimeout(createCactus, randomTimer)
}

createCactus()
document.addEventListener('keydown', handleKeyUp)