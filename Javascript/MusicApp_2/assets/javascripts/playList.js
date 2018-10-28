function PlayList(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.select = false;
}

var obj = {
    songsList: [],
    addSong: function(id, name, url, image) {
        var song = new PlayList(id, name, url, image);
        this.songsList.push(song);
        console.log(this.songsList);
    },

    deleteSong: function(songId) {
        // for(var i = 0; i < s.length; i++) {
        //     if(s[i].id == 102) {
        //         s[i].select = true;
        //     }
        // }
        var song = this.songsList.filter(function(x) {
            return x.id == songId;
        })
        song[0].select = true;

        this.songsList = this.songsList.filter(function(x) {
            return x.select == false;
        })
        console.log("Updated playlist", this.songsList);
    }
}