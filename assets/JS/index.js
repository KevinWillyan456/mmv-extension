const buttonAcept = document.getElementById('acept');
const telaBemVindo = document.querySelector('.tela_bem_vindo');
const body = document.querySelector('body');
var videoFundo = document.getElementById('backgroundVideo');
var telaLoading = document.querySelector('.tela_loading');

var data = [
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Devilchi.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Jahy-Sama%20-%20Adorable.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Light%20It%20UP.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV%20-%20%20Aftermath%20-%20The%20way%20You%20Are.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV%20-%20KEAN%20DYSSO%20-%20Plain%20Jane.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/MMV-%20Imanbek%20%E2%80%93%20RosesRemix.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/Never%20Letting%20Go.mp4" type="video/mp4">',
  '<source src="https://mmv-extension.kevinsouza456.repl.co/assets/resources/video/NIVERSO%20-%20Underwater%20_%20Number%202%20in%20Demon%20Realm.mp4" type="video/mp4">'
]


buttonAcept.addEventListener('click', () => {
    telaBemVindo.remove();
    // audioOpen.loop = true;
  //  videoFundo.innerHTML = '<source src="assets/resources/video/MMV -  Aftermath - The way You Are (1080p60).mp4" type="video/mp4">'
  var iniVideo = Math.floor(Math.random() * (data.length - 0) + 0);
  videoFundo.innerHTML = data[iniVideo];
  //videoFundo.innerHTML = data[2];
   // audioOpen.play();

  telaLoading.classList.remove('tela_loading-Hidden');

});


videoFundo.addEventListener('loadeddata', () => {
    setTimeout(() => {
      telaLoading.classList.add('tela_loading-Hidden');
       // videoFundo.playbackRate  = 16;
      videoFundo.play();
      // videoFundo.loop = true;
      gerenciaVideos();
    }, 2000);

});

function gerenciaVideos(){
  var videoL = document.getElementById('backgroundVideo');
  videoL.addEventListener('ended', nextVideo);
  function nextVideo(){
    // LOOP ATIVADO!
    var num = Math.floor(Math.random() * (data.length - 0) + 0);
    videoFundo.innerHTML = '';
    document.querySelector('.player-video-bg').innerHTML = '<video id="backgroundVideo">'+data[num]+'</video';
 //   videoFundo.innerHTML = data[num];
    videoFundo = document.getElementById('backgroundVideo');
videoFundo.play();
    gerenciaVideos();
  }
}

var buttonFullScreen = document.querySelector('.fullScreen');
buttonFullScreen.addEventListener('click', toggleFullScreen);

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen(); 
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen(); 
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
} 