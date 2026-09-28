const btnLike = document.getElementById("btn-like");
// Todo:
// Find and declare the button elements (hate/reset) to add onclick function.
// ...code here
const btnDislike = document.getElementById("btn-dislike");
const btnReset = document.getElementById("btn-reset");

const text = document.getElementById("text");

let count = 0;

function btnLikeHandler() {
    count += 1;
    // text.innerText = `Like: ${count.toString()}`;
    if(count <= -10)
    {
      text.innerText = "Like: " + count.toString() + ", too much hatres!!";
    }
    else
    {
      text.innerText = "Like: " + count.toString();
    }
    console.log(count);
}

btnLike.onclick = btnLikeHandler;
// Todo:
// Define the onclick function for each button (hate/reset)
// ...code here

function btnDislikeHandler() {
    count -= 1;
    if(count <= -10)
    {
      text.innerText = "Like: " + count.toString() + ", too much hatres!!";
    }
    else
    {
      text.innerText = "Like: " + count.toString();
    }
    console.log(count);
}

btnDislike.onclick = btnDislikeHandler;

function btnResetHandler() {
    count = 0;
    text.innerText = "Like: " + count.toString();
    console.log(count);
}

btnReset.onclick = btnResetHandler;
