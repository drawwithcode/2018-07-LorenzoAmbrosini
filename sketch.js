var sizeChar = 10;


function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();





}


function draw() {
  var x = windowWidth / 4;
  var y = windowHeight / 5;
  background(0);

  var myImage = capture.loadPixels();
  image(myImage, x, y, x * 2, y * 3);


  filter(POSTERIZE, 2);
  filter(GRAY);

  for (var v = x; v < x * 3; v += sizeChar - 5) {
    for (var t = y; t < y * 4; t += sizeChar - 5) {

      var col = get(v, t);
      //var alphabet = ["a", "b", "c", "d", "e", "f", ];

      fill(col);
      textSize(sizeChar);
      var a = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
      )
      text(a, v, t);
    }
  }
}
