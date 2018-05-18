// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload = function () {
    var divVideo = document.querySelector("#videoList");
 
    var videoEl = document.createElement("video");
    videoEl.controls = video.controls;
    videoEl.width = video.width;
    videoEl.height = video.height;
    for (var i = 0; i < video.source.length; i++){
        var newVideo = document.createElement("source");
        newVideo.src = video.source[i].src;
        newVideo.type = video.source[i].type;
        newVideo.innerHTML = "Your browser does not support the video tag."
        videoEl.appendChild(newVideo);
    }
    divVideo.appendChild(videoEl);




}