setTimeout(function() {
    var txt;
    var dial = confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please en cliquant sur OK");
    if (dial == true) {
        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        return true;
    }

}, 10000);


function psychedelicMode() {

    document.querySelectorAll('p').forEach(e => e.style.color = "blue");
    document.querySelectorAll('p').forEach(e => e.style.fontFamily = "courier");
    document.querySelectorAll('h1', 'h2', 'h3').forEach(e => e.style.color = "green");
    document.querySelectorAll('h1', 'h2', 'h3').forEach(e => e.style.fontFamily = "Comic Sans");

    document.documentElement.style.backgroundColor = "magenta";
};

const myButton = document.querySelector('#mybutton');
console.log(myButton);

myButton.addEventListener("click", function() {
    psychedelicMode();
})