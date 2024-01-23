

var quote =[
    {'quote': "Do not take life too seriously. You will not get out alive." ,
    'author':"--Elbert Hubbard"
},
{'quote':"Resentment is like drinking poison and waiting for your enemies to die." ,
 'author' : "--Nelson Mandela"} ,
 {
    'quote':"The best revenge is massive success." ,
 'author' : "--Frank Sinatra"} ,

 {'quote':"You miss 100% of the shots you don't take." ,
 'author' : "--Wayne Gretzy"} ,
 {
    'quote':"It's not what happens to you, but how you react to it that matters.",
 'author' : "--Epictetus"} ,
]


function getQuotes() {
    var num = Math.floor(Math.random()*quote.length)
    console.log(num);
    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("author").innerHTML=quote[num].author;
}