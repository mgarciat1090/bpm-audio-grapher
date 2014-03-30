var context;
var bufferLoader;

var BUFFERS = {};

var container;
var kickSample;
var kickGainNode, loopGainNode;
var source1,source2,source3;
var sourceLoop1;
var kick, snare, hihat, loop;


function normalize(value,min,max){
    if(min !== 0){
        return ( ( value - min ) / ( max - min) );
    }
    else{
        return ( value / max );
    }
}

function makePlaygroud(){
    var circleCont = $('<div>');
    kickSample = $('<div>');
    circleCont.addClass('circle');
    kickSample.addClass('triangle').draggable({
            drag : function(e,ui){
                console.log(ui.offset.left);
                if(ui.offset.left > 0){
                    var fraction1 = 0.5 + parseInt(ui.offset.left,10)/1000;
                    loopGainNode.gain.value = fraction1 * fraction1 ;
                }else{
                    var fractionb = 0 - parseInt(ui.offset.left,10)/1000;
                    loopGainNode.gain.value = -1;
                }

                loopGainNode.gain.value = 0;

                if(ui.offset.top > 0){
                    var fraction2 = parseInt(ui.offset.top,10)/500;
                    kickGainNode.gain.value = fraction2 * fraction2 ;
                }else{
                    kickGainNode.gain.value = -1;
                }
                
            }
        }
    ).droppable({
      drop: function( event, ui ) {
        console.log(ui);
      }
    }).resizable();
    container.append(circleCont);
    container.append(kickSample);
}

function finishedLoading(bufferList){

    source1 = context.createBufferSource();
    source2 = context.createBufferSource();
    source3 = context.createBufferSource();
    sourceLoop1 = context.createBufferSource();

    source1.buffer = bufferList[0];
    source2.buffer = bufferList[1];
    source3.buffer = bufferList[2];
    sourceLoop1.buffer = bufferList[3];

    BUFFERS.hihat = source1.buffer;
    BUFFERS.snare = source3.buffer;
    BUFFERS.kick = source2.buffer;
    BUFFERS.loop = sourceLoop1.buffer;


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
            'sounds/loops-3-Massive.wav',
        ],
        finishedLoading
        );
    bufferLoader.load();


}

window.onload = init;