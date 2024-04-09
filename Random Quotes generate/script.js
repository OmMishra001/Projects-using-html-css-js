let api_url = "https://api.quotable.io/random"
let quote = document.getElementById("quote");
let author = document.getElementById("author");

async function getquote(url) {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    quote.innerHTML = data.content
    author.innerHTML = data.author
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML +"---- by " + author.innerHTML
    , "tweet Window" , "width=600,height=300");
}