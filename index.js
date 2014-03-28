var context;
window.addEventListener('load',init,false);

var soundSample = null;


function init(){

	try {
		window.AudioContext = 
		window.AudioContext || window.webkitAudioContext;
		context = new AudioContext();
		loadSample('sounds/loops-1-Massive.wav');
	}catch(e){
		alert("Web Audio is not supported in this browser");
	}

}

function loadSample(url){
	var request = new XMLHttpRequest();
	request.open('get',url,true);
	request.responseType = "arraybuffer";

	request.onload = function(){
		context.decodeAudioData(request.response,function(buffer){
			soundSample = buffer;
		});
	}
	request.send();
}

function playSound(buffer){
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.start(0);
}

window.onclick = function(){
	playSound(soundSample);
}