var object_detector=""
img=""
var objects=[]
var status=""
function setup(){
canvas=createCanvas(380,380)
canvas.center()
video=createCapture(VIDEO)
video.hide()
object_detector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="detecting objects"
}
function modelloaded(){
console.log("model is loaded")
status=true
}
function gotResult(error,results){
    if (error) {
        console.log(error)
    } else {
       console.log(results) 
       objects=results
    }
    }
    function draw(){
        image(video,0,0,380,380)
        if (status!="") {
            object_detector.detect(video,gotResult)
           for (let i = 0; i < objects.length; i++) {
             document.getElementById("status").innerHTML="object is detected"
             document.getElementById("object_detected").innerHTML="number of objects="+objects.length
    fill("black")
            percent=floor(objects[i].confidence*100)
           text(objects[i].label+" "+percent+"%",objects[i].x, objects[i].y) 
           noFill()
           stroke("red")
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
           } 
        }
    }
    