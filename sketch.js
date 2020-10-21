// Image Shuffler v1
// Random image sequence
// Based on storyboard for 'Psycho'

var scene = 1;

// Countdown timer variables
var timerTitle;
var timerRotate;
var countdown;
var timer;
var state;

var names = [
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs1.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs2.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs3.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs4.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs5.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs6.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs7.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs8.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs9.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs10.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs11.jpg',
  'https://raw.githubusercontent.com/riezong/EXPER1-Image-Shuffler/main/data/Psycho_Screen_Grabs12.jpg',
];

var i;
var posX;
var posY;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#000000');

  savedTime = millis();

  pixelDensity(displayDensity());
  // frameRate(2);

  // Generate first image
  i = int(random(12));

  // Countdown timer setup
  timerTitle = 3000;
  timerRotate = 1000;
  timer = millis() + timerTitle;
  state = 0;

  // Typography (Totally optional)
  textAlign(LEFT);
  textFont('Helvetica');
  textSize(16);

  posX = (width / 2 - 200);
  posY = (height / 2 - 150);
}

function draw() {

  // Titles
  if (scene == 1) {
    background(0);
    textAlign(CENTER, CENTER);
    fill(255);
    text("Experiment 1: Shuffled Images", width / 2, height / 2 - 10);
    text("Saul Bass 'Psycho' storyboards", width / 2, height / 2 + 10);

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {
      background(0);
      scene = 2;
      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }

  // Image shuffler
  if (scene == 2) {

    // Load image
    // img = loadImage(names[i]);
    // print(names[i]);
    // img.resize(width, height);
    // image(img, 0, 0);

    img = createImg(names[i], "");
    image(img, posX, posY, 400, 300);
    img.hide();

    // Frame counter
    noStroke();
    fill(0);
    rect(posX, posY - 1, 90, 20);
    fill('#ff8800');
    textAlign(LEFT, TOP);
    text("Frame " + (i + 1), posX + 10, posY + 1);

    // Timer
    countdown = ceil((timer - millis()) / 1000);
    if (state == 0) {} else if (state == 1) {

      //Generate new frames    
      var j = int(random(12));
      // Check for repetition
      while (j == i) {
        j = int(random(11));
      }
      i = j;

      state = 0;
    }
    if (timer < millis()) {
      timer = millis() + timerRotate;
      state = 1;
    }
  }
}