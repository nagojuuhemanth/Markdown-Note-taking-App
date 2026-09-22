let boxes = Array.from(document.getElementsByClassName('box'))
let result = document.getElementById('result')
let playbutton =document.getElementById('playbutton')
let popup = document.getElementById('popup')

const sym1="X"
const sym2="O"
let choice = sym1
let spaces = Array(9).fill(null)

const start = () => {
    boxes.forEach(box => box.addEventListener('click',boxclicked))
}
function boxclicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = choice
        e.target.innerText =choice
        choice = choice == sym1 ? sym2 :sym1
    }
    if(playerwon()){
        let winblocks = playerwon()
        console.log(winblocks)
    }
    
}

function openpopup(){
    popup.classlist.add("open-popup")
}
const winchances = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerwon(){

    for (Condition of winchances){
        let [a,b,c] = Condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a,b,c]
    }
}
}
playbutton.addEventListener('click',playbtn)
function playbtn(){
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText =''
    })
    result = 'Player has won'
    choice = sym1
}

start()