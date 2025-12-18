// Call setSeeds() to (re)set the random and noise seeds.
// Then just use the normal p5js random() and noise() functions.
// Call triggerPreview() to capture the preview image (timeout 30s).
// Initialize all global state in setup() as the page does not reload each time the seed changes.
// To deploy, just go to https://www.editart.xyz/fun and copy&paste the content of this file.

let cs;

function setup() {
    cs = min(windowHeight, windowWidth);
    createCanvas(cs, cs);
    noLoop();
    colorMode(HSB);
    noStroke();
    setSeeds();
}

function draw() {
    background(random() * 180 + 180, 100, 100);
    fill(random() * 180, 100, 100);
    circle(random() * cs, random() * cs, 0.2 * cs);
    for (let i = 0; i < 200; i++) {
        circle(random() * cs, random() * cs, random() * cs * 0.01);
    }
    triggerPreview();
}

function windowResized() {
    setSeeds();
    cs = min(windowHeight, windowWidth);
    resizeCanvas(cs, cs);
}