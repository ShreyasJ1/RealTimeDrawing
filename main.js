nose_x = 0;
nose_y = 0;
right_wrist_x = 0;
left_wrist_x = 0;
difference = 0;

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
    document.getElementById("square_sides").innerHTML = "Width and height of the square is = " + difference + "px";
    fill("red");
    stroke("black");
    square(nose_x, nose_y, difference);

}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = " + nose_x + "nose y = " + nose_y);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        difference = floor(left_wrist_x - right_wrist_x);
        console.log("left wrist x = " + left_wrist_x + ", right wrist x = " + right_wrist_x + ", difference = " + difference);
        
    }
}

