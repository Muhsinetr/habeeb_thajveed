
var harf = ["def","jeem","ssah","thah","bah","hamza","rah","zal","dal","krah","hah","lad","swad","sheen","seen","zah","fah","goin","ain","lah","twah","noon","meem","lam","kaf","qaf","yah","vav","hhah"];
var myAudio = document.getElementById("myAudio");
var myGif = document.getElementById("myGif");

function press(x) {
    var aLink = "audios/"+ harf[x] +".mp3";
    var gLink = "myGif/"+ harf[x] + ".gif";

    myGif.src = gLink;
    myAudio.setAttribute("src", aLink);
    
    myAudio.load();
    myAudio.play();
}
    
myAudio.addEventListener('ended', () => {
    myGif.setAttribute("src", "Files/gifimage.png");
});