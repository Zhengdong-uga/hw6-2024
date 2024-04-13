var video;

//Loading

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
	console.log("Good job opening the window")
	console.log("Auto play is set to false");
    console.log("Loop is set to false");

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

//Playing
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Play Video");
    
});

//Pausing
document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed:", video.playbackRate);
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate);
});

//Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
	console.log("Skip Ahead");
    console.log("Video current time is:", video.currentTime);
});

//Mute
document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
    console.log(video.muted ? "Mute" : "Unmute");
});

//Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = video.volume * 100 + "%";
    console.log("Volume:", video.volume * 100);
});


//Old School
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});
