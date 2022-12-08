  function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(200)
  strokeWeight(3);
  ellipse(200,70,50,50);    //head
  strokeWeight(5);
  line(200,95,150,120);     //arm-left
  line(200,95,250,120);     //arm-right
  line(200,95,200,200);     //body
  line(200,200,150,280);    //leg-left
  line(200,200,250,280);    //leg-right

  line(100,20,100,325);     //scaffold vertical
  line(75,325,125,325);     //scaffold base
  line(100,20, 200, 20);    //scaffold arm
  line(200,20, 200,45);     //scaffold noose
  
}