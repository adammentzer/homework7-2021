var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var val = document.getElementById("slider").value 
	document.getElementById('volume').innerHTML = val + '%';
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play();
	 
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#mute").addEventListener("click", function() {
	

	
	if(video.muted === false){
		video.muted = true;
		console.log("Mute Video");
		document.querySelector('#mute').innerText = 'Unmute';
	}
	else{
		video.muted = false;
		console.log("Unmute Video");
		document.querySelector('#mute').innerText = 'Mute';
	}
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(video.playbackRate);
	
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (1/0.95);
	console.log(video.playbackRate);
	
});
//console.log(obj.playbackRate);
//video.playbackRate = 1.5;

document.querySelector("#skip").addEventListener("click", function() {
	if((video.currentTime + 15) < video.duration){
		video.currentTime = video.currentTime + 15;
		//console.log(video.currentTime);
	}
	else{
		video.currentTime = 0;
		//console.log(video.currentTime);
	}
	console.log(video.currentTime);
});


document.querySelector("#slider").addEventListener("change", function() {
	video.volume = slider.value / 100;
	//output.innerHTML = slider.value;
	console.log(slider.value);
	
});

document.getElementById("slider").oninput = function() {
	//video.volume = slider.value / 100;
	var val = document.getElementById("slider").value 
	document.getElementById('volume').innerHTML = val + '%';
	console.log(val)
	
};
document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});









