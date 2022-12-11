var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
    Webcam.attach(camera);
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
 });