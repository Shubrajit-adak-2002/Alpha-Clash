function removeAndAdd(id1, id2) {
    const hide = document.getElementById(id1);
    hide.classList.add('hidden');

    const display = document.getElementById(id2);
    display.classList.remove('hidden');
}

function showAndHide() {
    removeAndAdd('home', 'kbd');
    alphabet();
    continuePlay()
}

function alphabet(){
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const alphaStrings = alphabets.split('');

    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);

    const alpha = alphaStrings[index];
   
    return alpha;
}

function continuePlay() {
    const alphabets = alphabet();
    
    const screen = document.getElementById('current-alpha');
    screen.innerText = alphabets;

    changeKeyboardKeyColor(alphabets);
}


function changeKeyboardKeyColor(alphabet) {
    const kbd = document.querySelectorAll('.kbd');

    for(let key of kbd) {
      key.style.backgroungColor = 'white';
    }
    
    const keys = document.getElementById(alphabet);

    if(keys){
        keys.style.backgroundColor = 'orange';
    }
    else{
        console.error('key is not found!');
    }
}





