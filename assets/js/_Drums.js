var DrumsSample = {
};
var BUFFERS =  window.BUFFERS || {};

function playSound(buffer,time,gainNode){
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	if(!source.start){
		source.start = source.noteOn;
	}
	source.start(time);
	source.connect(gainNode);
}

DrumsSample.play = function(){

	

	kick = BUFFERS.kick;
	snare = BUFFERS.snare;
	hihat = BUFFERS.hihat;

	loop = BUFFERS.loop;

	var startTime = context.currentTime + 0.100;
	var tempo = 123;
	var eightNoteTime = (60 / tempo) / 2;


    kickGainNode = context.createGain();
    kickGainNode.connect(context.destination);

    loopGainNode = context.createGain();
    loopGainNode.connect(context.destination);

	
	for (var bar = 0; bar < 10; bar++) {
		var time = startTime + bar * 8 * eightNoteTime;

		if(bar % 4 === 0 ){
			playSound(loop,time,loopGainNode);
		}

		playSound(kick,time,kickGainNode);
		playSound(kick,time + 2 * eightNoteTime,kickGainNode);
		playSound(kick,time + 4 * eightNoteTime,kickGainNode);
		playSound(kick,time + 6 * eightNoteTime,kickGainNode);


		playSound(snare,time + 2 * eightNoteTime,kickGainNode);
		playSound(snare,time + 6 * eightNoteTime,kickGainNode);

		playSound(hihat,time + 1 * eightNoteTime,kickGainNode);
		playSound(hihat,time + 3 * eightNoteTime,kickGainNode);
		playSound(hihat,time + 5 * eightNoteTime,kickGainNode);
		playSound(hihat,time + 7 * eightNoteTime,kickGainNode);

		
		

	}

	


};