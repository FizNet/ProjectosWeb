const musicList = [
	'../assets/softcore.mp3',
	'../assets/zendaya.mp3',
	'../assets/wait_a_minute.mp3'
]
let sound = new Audio(musicList[0])
let musicStatus = document.getElementById("music-status");
playBtn.addEventListener('click', () => {
	sound.play();
	musicStatus.innerHTML = "Reproduciendo"
});
pauseBtn.addEventListener('click', () => {
	sound.pause();
	musicStatus.innerHTML = "Pausado"
});

