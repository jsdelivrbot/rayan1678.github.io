
  var config = {
    apiKey: "AIzaSyAOLCWdfH3mhuPylLcWunNq_WwOIiuTcoE",
    authDomain: "collaboritive-sketch.firebaseapp.com",
    databaseURL: "https://collaboritive-sketch.firebaseio.com",
    storageBucket: "collaboritive-sketch.appspot.com",
  };
  firebase.initializeApp(config);

var pointsData = firebase.database().ref();

                    
var points = [];
 
function setup() {
    var canvas = createCanvas(1200, 800);
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {
        points.push(point.val());
    });
    canvas.mousePressed(drawPoint);
    
    canvas.mouseMoved(drawPointIfMousePressed);
}
function draw() {
    background(255);
    // console.log(points.length);
    for (var i = 0; i < points.length; i++){
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
        
    }
}
function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}

function drawPoint() {
 
    pointsData.push({x: mouseX, y: mouseY});
       console.log(points.length);
} 


                    

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}