const CONTENT = document.querySelector('#contentarea');

// Eks
document.getElementById('ex1').addEventListener('click', function() {
    let headertags = CONTENT.getElementsByTagName('h1');
    let headertag = headertags[0];
    
    let textnode = 'HTML Ipsum Presents';
    if(headertag.textContent === textnode) {
        headertag.innerText = 'Hello World!'
    } else {
        headertag.innerText = textnode
    }
    
})

// Eks 4
document.getElementById('ex4').addEventListener('click', function() {
    let h1 = CONTENT.querySelector('h1');
    //Eksempel på inline style
    //h1.style.display = 'none';
    h1.classList.toggle('hide')
})

// Eks 9
document.getElementById('ex9').addEventListener('click', function() {
    initLiCss('list-start-pos')
    setTimeout(initLiCss, 20, "list-end-pos")
})

// Eks 9 - Function definition
function initLiCss(classname) {
    let list = CONTENT.getElementsByTagName('li');
    for(let elm of list) {
        elm.classList.toggle(classname)
    }
}
