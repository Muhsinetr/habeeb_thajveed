var myGif = document.getElementById("myGif");
var vav = "myGif/vav.gif"; 
var bah = "myGif/bah.gif";
var meem = "myGif/meem.gif"; 
var fah = "myGif/fah.gif";
var krah = "myGif/krah.gif"; 
var goin = "myGif/goin.gif";
var hah = "myGif/hah.gif"; 
var ain = "myGif/ain.gif";
var hhah = "myGif/hhah.gif"; 
var hamza = "myGif/hamza.gif";
var lad = "myGif/lad.gif"; 
var lam = "myGif/lam.gif";
var kaf = "myGif/kaf.gif"; 
var qaf = "myGif/qaf.gif";
var jeem = "myGif/jeem.gif"; 
var sheen = "myGif/sheen.gif";
var yah = "myGif/yah.gif"; 
var twah = "myGif/twah.gif";
var dal = "myGif/dal.gif"; 
var thah = "myGif/thah.gif";
var ssah = "myGif/ssah.gif"; 
var zal = "myGif/zal.gif";
var lah = "myGif/lah.gif"; 
var noon = "myGif/noon.gif";
var rah = "myGif/rah.gif"; 
var swad = "myGif/swad.gif";
var seen = "myGif/seen.gif"; 
var zah = "myGif/zah.gif";


function abc(x) {
  var myAudio = document.getElementById("myAudio");
  var myGif = document.getElementById("myGif");
  switch (x) {
    case 1:
      myAudio.setAttribute("src", "audios/vav.mp3");
      myGif.src = vav;
      break;
    case 2:
      myAudio.setAttribute("src", "audios/bah.mp3");
      myGif.src = bah;
      break; 
    case 3:
      myAudio.setAttribute("src", "audios/meem.mp3");
      myGif.src = meem;
      break;
    case 4:
      myAudio.setAttribute("src", "audios/fah.mp3");
      myGif.src = fah;
      break;
    case 5:
      myAudio.setAttribute("src", "audios/krah.mp3");
      myGif.src = krah;     
      break;
    case 6:
      myAudio.setAttribute("src", "audios/goin.mp3");
      myGif.src = goin;
      break;
    case 7:
      myAudio.setAttribute("src", "audios/hah.mp3");
      myGif.src = hah;
      break;
    case 8:
      myAudio.setAttribute("src", "audios/ain.mp3");
      myGif.src = ain;
      break;
    case 9:
      myAudio.setAttribute("src", "audios/hhah.mp3");
      myGif.src = hhah;
      break;
    case 10:
      myAudio.setAttribute("src", "audios/hamza.mp3");
      myGif.src = hamza;
      break;
    case 11:
      myAudio.setAttribute("src", "audios/lad.mp3");
      myGif.src = lad;
      break;
    case 12:
      myAudio.setAttribute("src", "audios/lam.mp3");
      myGif.src = lam ;
      break;
    case 13:
      myAudio.setAttribute("src", "audios/kaf.mp3");
      myGif.src = kaf;
      break;
    case 14:
      myAudio.setAttribute("src", "audios/qaf.mp3");
      myGif.src = qaf;
      break;
    case 15:
      myAudio.setAttribute("src", "audios/jeem.mp3");
      myGif.src = jeem;
      break;
    case 16:
      myAudio.setAttribute("src", "audios/sheen.mp3");
      myGif.src = sheen;
      break;
    case 17:
      myAudio.setAttribute("src", "audios/yah.mp3");
      myGif.src = yah;
      break;
    case 18:
      myAudio.setAttribute("src", "audios/twah.mp3");
      myGif.src = twah;
      break;
    case 19:
      myAudio.setAttribute("src", "audios/dal.mp3");
      myGif.src = dal;
      break;
    case 20:
      myAudio.setAttribute("src", "audios/thah.mp3");
      myGif.src = thah;
      break;
    case 21:
      myAudio.setAttribute("src", "audios/ssah.mp3");
      myGif.src = ssah;
      break;
    case 22:
      myAudio.setAttribute("src", "audios/zal.mp3");
      myGif.src = zal;
      break;
    case 23:
      myAudio.setAttribute("src", "audios/lah.mp3");
      myGif.src = lah;
      break;
    case 24:
      myAudio.setAttribute("src", "audios/noon.mp3");
      myGif.src = noon;
      break;
    case 25:
      myAudio.setAttribute("src", "audios/rah.mp3");
      myGif.src = rah;
      break;
    case 26:
      myAudio.setAttribute("src", "audios/swad.mp3");
      myGif.src = swad;
      break;
    case 27:
      myAudio.setAttribute("src", "audios/seen.mp3");
      myGif.src = seen;
      break;
    case 28:
      myAudio.setAttribute("src", "audios/zah.mp3");
      myGif.src = zah;
      break;
  }
  myAudio.load();
  myAudio.play();
}
var myAudio = document.getElementById("myAudio");
myAudio.addEventListener('ended', () => {
    myGif.setAttribute("src", "myGif/normal.gif");
});
