var DrumsSample = {
};
var BUFFERS =  window.BUFFERS || {};

function playSound(buffer,time){
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	if(!source.start)
		source.start = source.noteOn;
	source.start(time);
}

DrumsSample.play = function(){

	

	var kick = BUFFERS.kick;
	var snare = BUFFERS.snare;
	var hihat = BUFFERS.hihat;

	var startTime = context.currentTime + 0.100;
	var tempo = 123;
	var eightNoteTime = (60 / tempo) / 2;

	
	for (var bar = 0; bar < 10; bar++) {
		var time = startTime + bar * 8 * eightNoteTime;
		playSound(kick,time);
		playSound(kick,time + 2 * eightNoteTime);
		playSound(kick,time + 4 * eightNoteTime);
		playSound(kick,time + 6 * eightNoteTime);


		playSound(snare,time + 2 * eightNoteTime);
		playSound(snare,time + 6 * eightNoteTime);

		playSound(hihat,time + 1 * eightNoteTime);
		playSound(hihat,time + 3 * eightNoteTime);
		playSound(hihat,time + 5 * eightNoteTime);
		playSound(hihat,time + 7 * eightNoteTime);

		
		

	}

	


}