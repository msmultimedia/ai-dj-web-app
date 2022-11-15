song = "";
song_2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function preload() {
  song = loadSound("music.mp3");
  song_2 = loadSound("faded.mp3");
}
function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();
  canvas.x = 600;
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, gotposes);
  poseNet.on("pose", gotposes);

  function gotposes() {
    console.log("poseNet Is Initialized");
  }
  function gotposes(results) {
    if (results.length > 0) {
      console.log(results);
      LeftWristX = results[0].pose.leftWrist.x;
      LeftWristy = results[0].pose.leftWrist.y;
      console.log("LeftWristx=" + LeftWristX + "LeftWristY=" + LeftWristY);
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("RightWristX=" + RightWristX + "RightWristY=" + RightWristY);
    }
  }
}
function draw() {
  image(video, 0, 0, 600, 500);
}
function play() {
  song.play();
  song.setvolume(1);
  song.rate(1);
}
function stop() {
  song.stop();
  song_2.stop();
}
function pause() {
  song.pause();
  song_2.pause();
}
function next() {
  song.stop();
  song_2.play();
}
