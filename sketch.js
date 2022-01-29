var box
function setup() {
  createCanvas(400,400);
 box = createSprite(10,100,20,20)
}
function draw() 
{
  background("blue");
  if(keyDown("right")){
  box.x = box.x + 3
  }
  if(keyDown("left")){
    box.x = box.x - 3
    }
    if(keyDown("up")){
      box.y = box.y - 3
      }
      if(keyDown("down")){
        box.y = box.y + 3
        }
drawSprites()
}




