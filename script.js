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
      myGif.setAttribute("src", "myGif/goin.gif");
      break;
    case 7:
      myAudio.setAttribute("src", "audios/hah.mp3");
      myGif.setAttribute("src", "myGif/hah.gif");
      break;
    case 8:
      myAudio.setAttribute("src", "audios/ain.mp3");
      myGif.setAttribute("src", "myGif/ain.gif");
      break;
    case 9:
      myAudio.setAttribute("src", "audios/hhah.mp3");
      myGif.setAttribute("src", "myGif/hhah.gif");
      break;
    case 10:
      myAudio.setAttribute("src", "audios/hamza.mp3");
      myGif.setAttribute("src", "myGif/hamza.gif");
      break;
    case 11:
      myAudio.setAttribute("src", "audios/lad.mp3");
      myGif.setAttribute("src", "myGif/lad.gif");
      break;
    case 12:
      myAudio.setAttribute("src", "audios/lam.mp3");
      myGif.setAttribute("src", "myGif/lam.gif");
      break;
    case 13:
      myAudio.setAttribute("src", "audios/kaf.mp3");
      myGif.setAttribute("src", "myGif/kaf.gif");
      break;
    case 14:
      myAudio.setAttribute("src", "audios/qaf.mp3");
      myGif.setAttribute("src", "myGif/qaf.gif");
      break;
    case 15:
      myAudio.setAttribute("src", "audios/jeem.mp3");
      myGif.setAttribute("src", "myGif/jeem.gif");
      break;
    case 16:
      myAudio.setAttribute("src", "audios/sheen.mp3");
      myGif.setAttribute("src", "myGif/sheen.gif");
      break;
    case 17:
      myAudio.setAttribute("src", "audios/yah.mp3");
      myGif.setAttribute("src", "myGif/yah.gif");
      break;
    case 18:
      myAudio.setAttribute("src", "audios/twah.mp3");
      myGif.setAttribute("src", "myGif/twah.gif");
      break;
    case 19:
      myAudio.setAttribute("src", "audios/dal.mp3");
      myGif.setAttribute("src", "myGif/dal.gif");
      break;
    case 20:
      myAudio.setAttribute("src", "audios/thah.mp3");
      myGif.setAttribute("src", "myGif/thah.gif");
      break;
    case 21:
      myAudio.setAttribute("src", "audios/ssah.mp3");
      myGif.setAttribute("src", "myGif/ssah.gif");
      break;
    case 22:
      myAudio.setAttribute("src", "audios/zal.mp3");
      myGif.setAttribute("src", "myGif/zal.gif");
      break;
    case 23:
      myAudio.setAttribute("src", "audios/lah.mp3");
      myGif.setAttribute("src", "myGif/lah.gif");
      break;
    case 24:
      myAudio.setAttribute("src", "audios/noon.mp3");
      myGif.setAttribute("src", "myGif/noon.gif");
      break;
    case 25:
      myAudio.setAttribute("src", "audios/rah.mp3");
      myGif.setAttribute("src", "myGif/rah.gif");
      break;
    case 26:
      myAudio.setAttribute("src", "audios/swad.mp3");
      myGif.setAttribute("src", "myGif/swad.gif");
      break;
    case 27:
      myAudio.setAttribute("src", "audios/seen.mp3");
      myGif.setAttribute("src", "myGif/seen.gif");
      break;
    case 28:
      myAudio.setAttribute("src", "audios/zah.mp3");
      myGif.setAttribute("src", "myGif/zah.gif");
      break;
  }
  myAudio.load();
  myAudio.play();
}

var myAudio = document.getElementById("myAudio");
myAudio.addEventListener('ended', () => {
    myGif.setAttribute("src", "myGif/normal.gif");
});
