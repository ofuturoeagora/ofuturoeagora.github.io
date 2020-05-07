class Player {

    constructor(playerID) {

        this.playPauseBtn = document.querySelector('div#'+playerID+'-player div button.play')
        this.stopBtn = document.querySelector('#'+playerID+'-player .stop');
        this.backwardBtn = document.querySelector('#'+playerID+'-player .backward');
        this.forwardBtn = document.querySelector('#'+playerID+'-player .forward');
        this.timeLabel = document.querySelector('#'+playerID+'-player .time');

        this.player = document.querySelector('#'+playerID+'-player audio');

        this.contentPlayer = document.getElementById(playerID+"-audio");
        this.calculateAudioTime(this.contentPlayer.duration);
    };

        calculateAudioTime(audioTime) {

            var minutes = Math.floor(audioTime / 60);
            var seconds = Math.floor(audioTime - minutes * 60);
            var minuteValue;
            var secondValue;

            if (minutes<10) {
              minuteValue = "0" + minutes;
            } else {
              minuteValue = minutes;
            };

            if (seconds<10) {
              secondValue = "0" + seconds;
            } else {
              secondValue = seconds;
            };

            var mediaTime = minuteValue + ":" + secondValue;
            this.timeLabel.textContent = mediaTime;

            if (!this.player.paused) {
                this.timeLabel.className = 'time active';
            } else if (this.player.ended) {
                this.stopAudio();
            } else {
                this.timeLabel.className = 'time';
            };
        };
        updateAudioTime() {
            if (this.player.currentTime == 0) {
              this.calculateAudioTime(this.contentPlayer.duration);
            } else {
              this.calculateAudioTime(this.player.currentTime);
            };
        };
        playPauseAudio() {
            if(this.player.paused) {
              this.player.play();
              this.playPauseBtn.innerHTML = '<span>Pause</span>';
              this.playPauseBtn.className = 'pause';
            } else {
              this.player.pause();
              this.playPauseBtn.innerHTML = '<span>Play</span>';
              this.playPauseBtn.className = 'play';
            };
        };
        pauseAudio() {
              this.player.pause();
              this.playPauseBtn.innerHTML = '<span>Play</span>';
              this.playPauseBtn.className = 'play';
        };
        stopAudio() {
            this.player.pause();
            this.player.currentTime = 0;
            this.playPauseBtn.innerHTML = '<span>Play</span>';
            this.playPauseBtn.className = 'play';
        };
        backwardAudio() {
            this.player.currentTime -= 3;
        };
        forwardAudio() {
            this.player.currentTime += 3;
            if(this.player.currentTime >= this.player.duration || this.player.paused) {
              this.stopAudio()
            };
        };
};

var audioPlayers = []

function createAudioPlayer(thisElement){

    var elementAudioPlayerID = thisElement.id.split("-audio")[0];
    var elementAudioPlayer = new Player(elementAudioPlayerID);
    
    audioPlayers.push(elementAudioPlayer);

    elementAudioPlayer.contentPlayer.onloadedmetadata = function() {
        elementAudioPlayer.calculateAudioTime(elementAudioPlayer.contentPlayer.duration);
    };
    elementAudioPlayer.player.ontimeupdate = function() {
        elementAudioPlayer.updateAudioTime();
    };
    elementAudioPlayer.playPauseBtn.onclick = function() {
        for (var i = 0; i < audioPlayers.length; i++) {
            if (audioPlayers[i] != elementAudioPlayer) {
                audioPlayers[i].pauseAudio();
            };
        };
        elementAudioPlayer.playPauseAudio();
    };
    elementAudioPlayer.stopBtn.onclick = function() {
        elementAudioPlayer.stopAudio();
    };
    elementAudioPlayer.backwardBtn.onclick = function() {
        elementAudioPlayer.backwardAudio();
    };
    elementAudioPlayer.forwardBtn.onclick = function() {
        elementAudioPlayer.forwardAudio();
    };
};