window.addEventListener("load", initEvents);

var audio;

function initEvents() {
    audio = document.getElementById("audio");
    document.querySelector("#body").addEventListener("keyup", forwardSong);
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
        var spanId = document.createElement("span")
        spanId.innerHTML = obj.songId;
        spanId.style.display = 'none';
        var span = document.createElement("span");
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        span.innerHTML = obj.songName;
        li.appendChild(spanId);
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

function forwardSong() {
    var key = event.keyCode;
    console.log(key);
    if (key == 39) {
        audio.currentTime += 10;
    } else if (key == 37) {
        audio.currentTime -= 10;
    }
}

function addtoPlaylist() {
    var songId = event.srcElement.parentElement.childNodes[0].innerHTML;
    // console.log(data);
    // obj.addSong(data[0])
    songsArray.forEach(function(x) {
        if (x.songId == songId) {
            obj.addSong(x.songId, x.songName, x.songUrl, x.songImage);
        }
    })
    showPlayList();
}

function showPlayList() {
    var ul = document.getElementById("playlist");
    ul.innerHTML = "";

    obj.songsList.forEach(function(x) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('src', x.image);
        var spanId = document.createElement("span")
        spanId.innerHTML = x.id;
        spanId.style.display = 'none';
        var span = document.createElement("span");
        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        span.innerHTML = x.name;
        li.appendChild(spanId);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.append(li);
        span.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlaylist);
    })
}

function deleteFromPlaylist() {
    var songId = event.srcElement.parentElement.childNodes[0].innerHTML;
    console.log("Deleting", songId);
    obj.deleteSong(songId);
    showPlayList();
}