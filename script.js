
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



var lobj = [{heding:"اِدْغَام بِغُنَّة",Text:"രാഷ്ട്രത്തിൻറെ ഉത്ഭവത്തെക്കുറിച്ച് നിരവധി സിദ്ധാന്തങ്ങൾ നിലവിലുണ്ടെങ്കിലും അവയൊന്നും പൂർണമായ ഒരു വിശദീകരണം നൽകുന്നില്ല ദൈവത്തിൻറെ ധനമോ ഉൽകൃഷ്ടമായ ശക്തി ഉപയോഗിച്ച് സൃഷ്ടിക്കപ്പെട്ടത് പ്രതിനിധി യോഗത്തിൽ ചർച്ചചെയ്തു രൂപം കൊടുത്തത് കുടുംബങ്ങളുടെ സ്വാഭാവിക വളർച്ച ഇല്ല എന്ന് പറയുന്നു കാലത്തിലൂടെയുള്ള വളർച്ചയുടെ ഫലമായിട്ടാണ് സമാനസ്വഭാവമുള്ള രാഷ്ട്രം ഉരുത്തിരിഞ്ഞുവരുന്നത് ചരിത്രപരമായി പരിണാമത്തിലൂടെ സ്വാഭാവികമായി വളർന്നുവരുന്ന ഒരു സ്ഥാപനമാണ് രാഷ്ട്രം സമൂഹത്തിന് നിരന്തരമായ വളർച്ചയിലൂടെ സർവ്വദേശീയ സ്വഭാവമുള്ള ഒരു പ്രകടനമല്ല മറിച്ച് ഒരു വളർച്ചയാണ് എല്ലാ സ്ഥലങ്ങളിലും വളർച്ചയുടെ ഗതിവേഗം രീതിയിലായിരുന്നില്ല ചില സ്ഥലങ്ങൾ രാഷ്ട്രത്തിൻറെ ഉത്ഭവത്തെക്കുറിച്ച് ്ട്രം ഉരുത്തിരിഞ്ഞുവരുന്നത് ചരിത്രപരമായി പരിണാമത്തിലൂടെ സ്വാഭാവികമായി വളർന്നുവരുന്ന ഒരു സ്ഥാപനമാണ് രാഷ്ട്രം സമൂഹത്തിന് നിരന്തരമായ വളർച്ചയിലൂടെ സർവ്വദേശീയ സ്വഭാവമുള്ള ഒരു പ്രകടനമല്ല മറിച്ച് ഒരു വളർച്ചയാണ് എല്ലാ സ്ഥലങ്ങളിലും വളർച്ചയുടെ ഗതിവേഗം രീതിയിലായിരുന്നില്ല ചില സ്ഥലങ്ങൾ രാഷ്ട്രത്തിൻറെ ഉത്ഭവത്തെക്കുറിച്ച് നിരവധി സിദ്ധാന്തങ്ങൾ"},
            {heding:"bilaunna",Text:"മാത്രമല്ല വിക്കി സമൂഹവും ഇല്ലായിരുന്നു. 2002 ഡിസംബർ 21 തൊട്ടാണ് ഇപ്പോഴുള്ള വെബ്ബ് വിലാസത്തിൽ മലയാളം വിക്കിപീഡിയ ആരംഭിച്ചത്. അതിനാൽ ഔദ്യോഗികമായി മലയാളം വിക്കിപീഡിയ ആരംഭിച്ചത് 2002 ഡിസംബർ 21 ന് എന്ന് പറയാം. ആ ദിവസം വിനോദ് എഴുതിയ മലയാളം അക്ഷരമാല എന്ന ലേഖനമാണ് മലയാളം വിക്കിപീഡിയയിലെ വിജ്ഞാനസംബന്ധിയായ ആദ്യ ലേഖനമെന്നു കരുതുന്നു. http://ml.wikipedia.org/ എന്ന വിലാസത്തിലെക്ക് മാറിയ ശേഷം രണ്ട് വർഷത്തോളം മലയാളം വിക്കിപീഡിയയെ സജീവമായി നിലനിർത്താൻ പ്രയത്നിച്ചതും വിനോദ് തന്നെയാണ്. കുറേ കാലത്തോളം അദ്ദേഹം ഒറ്റയ്ക്കായിരുന്നു ഇതിന്റെ പ്രവർത്തനങ്ങൾ ചെയ്തിരുന്നത്. വിവിധ മലയാളി ഓൺലൈൻ ഗ്രൂപ്പുകളിലും, ചർച്ചാവേദികളിലും മലയാളം ശരിയായി വായിക്കാനും എഴുതാനുമുള്ള സഹായങ്ങൾ അന്വേഷിച്ച് അദ്ദേഹം എഴുതിയ കുറിപ്പുകൾ കാണുന്നുണ്ട്. മലയാളം വിക്കിപീഡിയയുടെ ആരംഭകാലത്ത് ഉണ്ടായിരുന്ന അംഗങ്ങളെല്ലാം വിദേശ മലയാളികളായിരുന്നു."}];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const content = params.get('Text');

    var head = document.getElementById("heading");
    var texts = document.getElementById("text");

if(content=="one"){
    head.innerHTML = lobj[0].heding;
    texts.innerHTML = lobj[0].Text;
}else if(content == "two"){
    head.innerHTML = lobj[1].heding;
    texts.innerHTML = lobj[1].Text;
}
