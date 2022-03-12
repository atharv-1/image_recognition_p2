Webcam.set({
    height:300,
    width:350,
    image_qualty:'jpeg',
    jpeg_qualty:100

});


camera=document.getElementById("camara");
Webcam.attach("#camara");


function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="op"src="'+data_uri+'">';


    })
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier('family project',modelloaded);
function modelloaded(){
    console.log("model is loading wait....");
}