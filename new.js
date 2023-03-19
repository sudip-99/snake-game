let stop = false
let indx = 0
let position = ['1st 🎉', '2nd 🤭', '3rd 🤩', '4th 🤐', '5th', '6th']
let playerName = []
let tempArr = []
let input = document.getElementById('input')
let inbtn = document.getElementById("inputBtn")
const body = document.body
setInterval(()=>{
  var red = Math.floor(Math.random()*255) +1; 
  var green = Math.floor(Math.random()*255) +1; 
  var blue = Math.floor(Math.random()*255) +1; 
 var rgb = `rgb(${red},${green},${blue})`
 body.style.backgroundColor = rgb;
  
},1000)
let i = 1
let color = ['papayawhip', 'black']
function darkMode() {
  if (i === 2) {
    i = 0
  }
  body.style.backgroundColor = color[i]
  i++
}


function inputbtn () {
//  console.log (input.value)
  let val = input.value.trim()
  let temp = ''
  for (let i = 0; i < val.length; ++i) {
    if (val[i] != ' ') {
      temp += val[i]
    } else {
      playerName.push(temp)
      temp = ' '
    }
  }
  playerName.push(temp)
  input.value = ' '

}



function search(playerArg) {
  for (let i = 0; i < tempArr.length; ++i) {
    if (playerArg == tempArr[i]) {
      return true
    } else false

  }
}


function showPosition () {}


let inside_mainLogic = false

let temp = " "

function clicker() {
  let name = document.getElementById("clkbtn")
  if (stop) {
    name.textContent = "No more player's to serial 😀 !!"
          document.getElementById('position').textContent = ' '
          clear();
          alert('All cleared!')
    
    return
  }


  let randomNum = Math.random ()*playerName.length
  let index = Math.floor(randomNum)
  let player = playerName[index]
  if (((player != "undefined") && (temp != player)) && !(search(player))) {
    name.textContent = player
    temp = player
    tempArr.push(player)
    inside_mainLogic = true

  } else {
    inside_mainLogic = false
    name.textContent = "Click again!"
  }
  for (let i = 0; i < tempArr.length; ++i) {
    var original = new Set([...tempArr])


    if (original.size == playerName.length) {
      stop = true
    }
  }

  if ((inside_mainLogic) && (position [indx])) {
    for (let i of original) {
      document.getElementById('position').textContent = position [indx]

    }
    indx++
  } else {
    document.getElementById('position').textContent = ""

  }



}

function clear (){
  playerName.splice(0,playerName.length);
  tempArr.splice(0,tempArr.length);
  stop = false ;
  indx = 0;
  temp = " ";
}