var context;
var bufferLoader;

var BUFFERS = {};

var container;
var kickSample;

function makePlaygroud(){
	var circleCont = $('<div>');
	kickSample = $('<div>');
	circleCont.addClass('circle');
	kickSample.addClass('triangle');
	container.append(circleCont);
	container.append(kickSample);
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

	container = $('.container');

	makePlaygroud();

	$('#start').click(function(){
		DrumsSample.play();
		
	});
	

}


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

window.onload = init;