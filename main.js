var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update(){
    fabric.Image.fromURL("https://lh5.googleusercontent.com/77JD9K2gC9ZOPh1HnxKen2kX4dqBDQCsJ_aDfqL15SWTYFu6h5SM7KRvGT4ju5TG_sX1FtlxigXlFJPpTXE=w1920-h915-rw", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(150);
        block_image_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_image_object);
    });
}