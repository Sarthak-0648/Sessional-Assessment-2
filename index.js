var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09", true);
xhr.onload = function () {
    var responseJSON = JSON.parse(xhr.response);

    for (let i = 0; i < responseJSON.length; i++) {
        let div = document.createElement("div");

        let p1 = document.createElement("p");
        let id = document.createTextNode(" Id: " + responseJSON[i].id);
        p1.append(id);

        let p2 = document.createElement("p");
        let body = document.createTextNode(" body: " + responseJSON[i].body);
        p2.append(body);

        div.appendChild(p1);
        div.appendChild(p2);
        
        document.getElementById("div1").appendChild(div);
    }
}
xhr.send();

let a =  document.getElementById("btn");
let b = document.getElementById("text");
let c = document.getElementById("area");
 

a.addEventListener("click",function(event){
console.log(b.value);
console.log(c.value);

let d = document.getElementById("div22");

let html = `
<div style="width: 75%;
margin: auto;
height: auto;
border: 2px solid black;
background-color: rgba(102, 192, 163, 0.344);
margin-top: 45px;">
<div>
id : ${b.value}
</div>
<div>
body : ${c.value}
</div>
</div>
`
d.innerHTML += html;
});