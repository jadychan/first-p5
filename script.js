// Let's build some functions in p5.js
// Functions are like actions, they make stuff happen

//Define a setup function 
function setup(){
//Call the createCanvas and background functions
//Numbers - Data type that is a number
    createCanvas(800, 600)
    background(100)
}

//Variables in JS are created using the var keyword
//Variables contain values, use equal sign to assign
var position = 100
var speed = 3

//Goal is to animate the Tron bike
function draw(){
    clear()
    background(150)
    fill(255)
    rect(position, 100, 150, 60, 20)
    fill("dodgerblue")
    ellipse(position, 150, 75, 75)
    ellipse(position + 150, 150, 75, 75)
    
    position+= speed
    console.log(position)
    
//Conditionals - allows program to make decisions
    if (position > 800) {
        speed = speed * -1
    }
    if (position < 0) {
        speed = speed * -1
    }
    
    fill(0)
    textSize(40)
//Concatenate - 
    text("Position: " + position, 20, 40)
    text("Speed: " + speed, 20, 80)
}