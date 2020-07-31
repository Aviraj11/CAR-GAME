var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    ball = createSprite(100,100,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position');
    ballPosition.on("value", readposition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        Writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        Writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        Writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        Writeposition(0,+1);
    }
    drawSprites();
}

function Writeposition(x,y){
database.ref('ball/position').set({

    x: position.x+x,
    y: position.y+y
})
}

function readposition(data) {
position = data.val();
ball.x = position.x
ball.y = position.y

}

function showerror() {

    console.log("error")
}