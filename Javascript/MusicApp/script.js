window.addEventListener("load", initEvents);

var audio;

function initEvents() {
    audio = document.getElementById("audio");
    var songsList = document.getElementById("songsList");

    // for (var i = 0; i < songsArray.length; i++) {
    //     var li = document.createElement("li");
    //     li.innerHTML = songsArray[i].songName;
    //     songsList.append(li);
    // }

    songsArray.forEach(function(obj) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src', obj.songImage);
        var span = document.createElement("span");
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        span.innerHTML = obj.songName;
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        songsList.append(li);
        span.addEventListener("click", playSong);
        btn.addEventListener("click", addtoPlaylist);
    })

}

function playSong() {
    var songName = event.srcElement.innerHTML;
    for (var i = 0; i < songsArray.length; i++) {
        if (songsArray[i].songName == songName) {
            songUrl = songsArray[i].songUrl;
        }
    }
    // console.log(songUrl);
    audio.src = songUrl;
    audio.play();
}

function addtoPlaylist() {
    var data = event.srcElement.parentElement.innerHTML;
    var playlist = document.getElementById("playlist")
    var li = document.createElement("li");
    li.innerHTML = data;
    // console.log(li.childNodes);
    var btn = li.childNodes[2];
    btn.innerHTML = "Delete";
    playlist.appendChild(li);
    // btn.addEventListener("click", deleteFromPlaylist);
}