var hypnoticball,database,position;

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    var hypnoticballposition=database.ref('ball/position')
    hypnoticballposition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(position!==undefined){
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}

function readPosition(data){
    position=data.val()
    hypnoticball.x=position.x
    hypnoticball.x=position.y
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y

    })
}
function showError(){
    console.log("error in writing to the data base")
}


