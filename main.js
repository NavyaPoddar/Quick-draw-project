function preload(){
    doodlemodel = ml5.imageClassifier("DoodleNet");
}

function setup(){
 canvas= createCanvas(600,400);
 canvas.center();
 background("white");

 canvas.mouseReleased(classifyCanvas);
 speaker=window.SpeechSynthesis;
}

function draw(){
    strokeWeight(5);
    stroke("black");

    if(mouseIsPressed){

        line(pmouseX , pmouseY , mouseX , mouseY);
    }

}

function clearcanvas(){

    background("white");

}


function classifyCanvas(){
    doodlemodel.classify(canvas , getresults);
}

function getresults(error,results){
    if(error){
        console.log(error);
    }

    else {
        console.log(results);
        document.getElementById("object_confidence").innerHTML = results[0].confidence;
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}