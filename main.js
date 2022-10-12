/* 
Add a play button.
Create canvas and center it.
Access the webcam and place its live view on the canvas.
Load the audio file/ link our Sound Library
Define play() function and add the code to play sound

*/


function preload(){
 sound = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(350,300);
canvas.position(700,200);
background("teal");
video = createCapture(VIDEO);
video.hide();
}


function draw(){
    
    image(video,0,0,350,300);
}


function play_Sound(){

    sound.play();
}