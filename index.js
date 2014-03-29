window.onload = init;
var context;
var bufferLoader;

var BUFFERS = {};



function init(){
	window.AudioContext = window.AudioContext ||
	window.webkitAudioContext;

	context = new AudioContext();

	bufferLoader = new BufferLoader(
		context,
		[
			'sounds/hihat.wav',
			'sounds/kick.wav',
			'sounds/snare.wav',
		],
		finishedLoading
		);
	bufferLoader.load();


}

function finishedLoading(bufferList){

	var source1 = context.createBufferSource();
	var source2 = context.createBufferSource();
	var source3 = context.createBufferSource();
	source1.buffer = bufferList[0];
	source2.buffer = bufferList[1];
	source3.buffer = bufferList[2];

	BUFFERS.hihat = source1.buffer;
	BUFFERS.snare = source3.buffer;
	BUFFERS.kick = source2.buffer;


	DrumsSample.play();
	


}