var myGif = document.getElementById("myGif");

function abc(x) {
  var myAudio = document.getElementById("myAudio");
  var myGif = document.getElementById("myGif");
  switch (x) {
    case 1:
      myAudio.setAttribute("src", "audios/vav.mp3");
      myGif.setAttribute("src", "myGif/vav.gif");
      break;
    case 2:
      myAudio.setAttribute("src", "audios/bah.mp3");
      myGif.setAttribute("src", "myGif/bah.gif");
      break; 
    case 3:
      myAudio.setAttribute("src", "audios/meem.mp3");
      myGif.setAttribute("src", "myGif/meem.gif");
      break;
    case 4:
      myAudio.setAttribute("src", "audios/fah.mp3");
      myGif.setAttribute("src", "myGif/fah.gif");
      break;
    case 5:
      myAudio.setAttribute("src", "audios/krah.mp3");
      myGif.setAttribute("src", "myGif/krah.gif");
      break;
    case 6:
      myAudio.setAttribute("src", "audios/goin.mp3");
      break;
    case 7:
      myAudio.setAttribute("src", "audios/hah.mp3");
      break;
    case 8:
      myAudio.setAttribute("src", "audios/ain.mp3");
      break;
    case 9:
      myAudio.setAttribute("src", "audios/hhah.mp3");
      break;
    case 10:
      myAudio.setAttribute("src", "audios/hamza.mp3");
      break;
    case 11:
      myAudio.setAttribute("src", "audios/lad.mp3");
      break;
    case 12:
      myAudio.setAttribute("src", "audios/lam.mp3");
      break;
    case 13:
      myAudio.setAttribute("src", "audios/kaf.mp3");
      break;
    case 14:
      myAudio.setAttribute("src", "audios/qaf.mp3");
      break;
    case 15:
      myAudio.setAttribute("src", "audios/jeem.mp3");
      break;
    case 16:
      myAudio.setAttribute("src", "audios/sheen.mp3");
      break;
    case 17:
      myAudio.setAttribute("src", "audios/yah.mp3");
      break;
    case 18:
      myAudio.setAttribute("src", "audios/twah.mp3");
      break;
    case 19:
      myAudio.setAttribute("src", "audios/dal.mp3");
      break;
    case 20:
      myAudio.setAttribute("src", "audios/thah.mp3");
      break;
    case 21:
      myAudio.setAttribute("src", "audios/ssah.mp3");
      break;
    case 22:
      myAudio.setAttribute("src", "audios/zal.mp3");
      break;
    case 23:
      myAudio.setAttribute("src", "audios/lah.mp3");
      break;
    case 24:
      myAudio.setAttribute("src", "audios/noon.mp3");
      break;
    case 25:
      myAudio.setAttribute("src", "audios/rah.mp3");
      break;
    case 26:
      myAudio.setAttribute("src", "audios/swad.mp3");
      break;
    case 27:
      myAudio.setAttribute("src", "audios/seen.mp3");
      break;
    case 28:
      myAudio.setAttribute("src", "audios/zah.mp3");
      break;
  }
  myAudio.load();
  myAudio.play();
  myGif.load();
}

var myAudio = document.getElementById("myAudio");
myAudio.addEventListener('ended', () => {
    myGif.setAttribute("src", "myGif/normal.gif");
});
