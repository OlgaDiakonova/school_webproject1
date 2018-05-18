// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function () {

    var myAudio = document.querySelector("#audiofiles");
    var newEl = document.createElement("audio");
    newEl.controls = audio.controls;
    for (var i = 0; i < audio.source.length; i++) {        
        var newSrc = document.createElement("source");
        newSrc.src = audio.source[i].src;
        newSrc.type = audio.source[i].type;

        newEl.appendChild(newSrc);
        
    }

    myAudio.appendChild(newEl);

}