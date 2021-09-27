canvas = new fabric.Canvas('myCanvas');
x= document.getElementById("myAudio");

bday_image_height=600;
bday_image_width=800;

bday_img_object= "";

function new_image(){
fabric.Image.fromURL("BirthdayImage.jpg", function(Img){

      bday_img_object=Img;
      bday_img_object.scaleToWidth(700);
      bday_img_object.scaleToHeight(600);
      bday_img_object.set({
          top : 0,
          left :0});
    canvas.add(bday_img_object);
    });
}



function playSound(){
	x.play();
}
