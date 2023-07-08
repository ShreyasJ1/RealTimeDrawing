function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("white");
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}