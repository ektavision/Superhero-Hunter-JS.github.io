
var template = document.getElementById("template");
console.log(localStorage.length);


for(let i=0;i<localStorage.length;i++)
{
    if(localStorage.key(i) == 'id'){
        continue;
    }
    let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(temp);
    var card = template.content.cloneNode(true);
    
    //from here we add all the data of favourite character
    card.getElementById("name").innerHTML = 'Name : ' + temp.name;
    card.getElementById("id").innerHTML = 'Id : ' + temp.id;

    card.getElementById("more-info").addEventListener('click',function(){
        localStorage.setItem('id',temp.id);
        window.location.assign('./about.html');
    });
    //if user click on remove it will remove from the favourites
    card.getElementById("fav").addEventListener('click',function (){
        card.innerHTML = null;
        localStorage.removeItem(localStorage.key(i));
        window.location.assign('./favourites.html');
        

    });
// appending to the list
    document.getElementById("superhero-list").appendChild(card);
}