
status="";
object=[];
function setup(){
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(380,380);

object_decter=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("model Loaded");
    status=true;
   
}
function gotResult(error,results){
if (error) {
    console.log(error);
} else {
    console.log(results);
    object=results;
    
}
}



function preload(){


}





function draw(){
    image(video,0,0,380,380);

    if (status !="")
     {
        object_decter.detect(video,gotResult);
     

       for (i=0; i< object.length;i++) {
          document.getElementById("status").innerHTML=" status:object detected";
           document.getElementById("number_of_objects").innerHTML="number of objects detected are"+object.length;
       
        fill("#0000ff");
        percent= floor(object[i].confidence*100);

text(object[i].label+""+ percent+"%",object[i].x,object[i].y);
noFill();
stroke("#0000ff");

       }

        
    }

}