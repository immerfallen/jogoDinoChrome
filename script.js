const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false

function handleKeyUp(event) {
    if(event.keyCode===32){
        if(!isJumping){
            jump()
        }
        
    }
}

function jump(){
    isJumping = true
    let position =0
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
    cactus.classList.add('cactus')
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        cactusPosition -= 10
        cactus.style.left = cactusPosition + 'px'
    }, 30) 

    
}

createCactus()
document.addEventListener('keydown', handleKeyUp)