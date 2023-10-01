
var harf = ["hamza","bah","thah","ssah","jeem","hah","krah","dal","zal","rah","zah","seen","sheen","swad","lad","twah","lah","ain","goin","fah","qaf","kaf","lam","meem","noon","hhah","vav","yah"]
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
    myGif.setAttribute("src", "Files/resized.jpg");
});

function menu(){
    var list = document.getElementById("list");
    var menu_bar = document.getElementById("menu_icon");
    if(list.style.display == 'none'){
    list.style.display = 'block';
    menu_bar.style.backgroundImage = "url('Files/cross.png')";
    }else{
        list.style.display = 'none';
        menu_bar.style.backgroundImage = "url('Files/menu.png')";
    }
}


const audioElement = document.querySelector('#textAudio');
audioElement.addEventListener('play', function() {
  this.timelineElement.style.color = 'red';
});


if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sworker.js").then(registration=>{
    console.log("Service worker registered")
 }).catch(error=>{
        console.log("Service worker error")
        console.log(error)
 })
}else{
    alert("Service worker not working")
}