var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "Selfie."){
      speak();
      
    }

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
img_id = "selfie1";
    take_Snapshot();
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        img_id = "selfie2";
        take_Snapshot();
        var synth = window.speechSynthesis;
      speakData = "taking your selfie in 10 seconds"; ;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
      }, 5000);

      setTimeout(function(){
        img_id = "selfie3";
        take_Snapshot();
        var synth = window.speechSynthesis;
      speakData = "taking your selfie in 15 seconds"; ;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
      }, 10000);
    }}

    function take_Snapshot(){
        Webcam.snap(function(data_uri){
            if(img_id == "selfie1"){
                document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_uri+"'>";
            }
            if(img_id == "selfie2"){
                document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_uri+"'>";
            }
            if(img_id == "selfie3"){
                document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_uri+"'>";
            }
          
        })
      }