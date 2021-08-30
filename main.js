var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
    fabric.Image.fromURL("Steve.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) 
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") 
    {
        console.log("Shift + p is pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == "77") 
    {
        console.log("Shift + m is pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "38")
    {
        up();
        console.log("Up 🔼");
    }

    if (keyPressed == "40")
    {
        down();
        console.log("Down 🔽");
    }

    if (keyPressed == "37")
    {
        left();
        console.log("Left ◀");
    }

    if (keyPressed == "39")
    {
        right();
        console.log("Right ▶");
    }

    if (keyPressed == "66")
    {
        new_image("brick.jpg");
        console.log("You placed a brick (b/B)");
    }

    if (keyPressed == "78")
    {
        new_image("netherite.jpg");
        console.log("You placed a netherite block (n/N)");
    }

    if (keyPressed == "79")
    {
        new_image("oak_wood.jpg");
        console.log("You placed a oak wood block (o/O)");
    }

    if (keyPressed == "76")
    {
        new_image("light_on.png");
        console.log("You placed a light block which is turened on (l/L)");
    }

    if (keyPressed == "71")
    {
        new_image("ground.png");
        console.log("You placed a grass block (g/G)");
    }

    if (keyPressed == "80")
    {
        new_image("Polished_stone.png");
        console.log("You placed a polished stone block (p/P)");
    }

    if (keyPressed == "69")
    {
        new_image("Easter_egg(block).png");
        console.log("You placed a EASTER EGG block (e/E)");
    }

    if (keyPressed == "65")
    {
        new_image("Arica_wooden_planks.png");
        console.log("You placed a Arica wooden plank block (a/A)");
    }

    if (keyPressed == "68")
    {
        new_image("Dark_oak_wooden_planks.png");
        console.log("You placed a Dark oak wodden plank block (d/D)");
    }

    if (keyPressed == "80")
    {
        new_image("oak_wooden_planks.png");
        console.log("You placed a Oak wodden plank block (p/P)");
    }

    if (keyPressed == "87")
    {
        new_image("Orange_wool.png");
        console.log("You placed a Orange wool block (w/W)");
    }

    if (keyPressed == "80")
    {
        new_image("Pink_wool.png");
        console.log("You placed a Pink wool block (i/I)");
    }

}

function up()
{
    if (player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When (up/UP) is pressed : x = " + player_x + " | y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if (player_y <= 700)
    {
        player_y = player_y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When (down/DOWN) is pressed : x = " + player_x + " | y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if (player_y >= 0)
    {
        player_x = player_x - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When (left/LEFT) is pressed : x = " + player_x + " | y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if (player_y <= 850)
    {
        player_x = player_x + block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When (right/RIGHT) is pressed : x = " + player_x + " | y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}