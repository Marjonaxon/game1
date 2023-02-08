let player1 = document.querySelector('.player1')
let player2 = document.querySelector('.player2')
let player1Btn = document.querySelector('.player1-btn')
let player2Btn = document.querySelector('.player2-btn')
let reset = document.querySelector('.reset')
let score1 = 0
let score2 = 0


let gameOver = true
player1Btn.addEventListener('click', ()=>{
    if(gameOver){
        score1++
        if(score1 == 7){
            gameOver = false
            player1.style.color = 'green'
            player2.style.color = 'red'
        }
        player1.textContent = score1
    }
})
player2Btn.addEventListener('click', ()=>{
    if(gameOver){
        score2++
        if(score2 == 7){
            gameOver = false
            player1.style.color = 'red'
            player2.style.color = 'green'
        }
        player2.textContent = score2
    }
})
// select.addEventListener('change',(=>){
//     level = select.value
//     // refreshgame()
// })

reset.addEventListener('click',()=>{
     refreshgame()
})
   


function refreshgame(){
    let gameOver = true
    player1.style.color = 'black'
    player2.style.color = 'black'
    player1.textContent = 0 
    player2.textContent = 0
}