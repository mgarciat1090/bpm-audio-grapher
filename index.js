window.onload = init;
var context;
var bufferLoader;

function init(){
	window.AudioContext = window.AudioContext ||
	window.webkitAudioContext;

	context = new AudioContext();

	bufferLoader = new BufferLoader(
		context,
		[
			'sounds/loops-1-Massive.wav',
			'sounds/loops-2-Massive.wav',
		],
		finishedLoading
		);
	bufferLoader.load();
}

function finishedLoading(bufferList){
	var source1 = context.createBufferSource();
	var source2 = context.createBufferSource();
	source1.buffer = bufferList[0];
	source2.buffer = bufferList[1];

	source1.connect(context.destination);
	source2.connect(context.destination);
	source1.start();
	source2.start();
}