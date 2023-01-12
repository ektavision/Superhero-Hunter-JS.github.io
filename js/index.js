function createNode(element){
    return document.createElement(element);
}
function append(parent, element){
    return parent.appendChild(element);
}
document.getElementById("form").addEventListener('keyup' , function(){
    var url = getUrl();
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open('get',url,true);
    xhrRequest.send();    
    xhrRequest.onload = function(){
        var data = JSON.parse(xhrRequest.responseText);
        display(data);  
    }
});


function getUrl(){
    var query = document.getElementById('search-character').value;
    console.log(query);
    if(!query){
        console.log('Name cannot be empty!');
        return "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=67be0acb49d69ea06b3be7f8f27bd4ba&hash=5d1b8bf5f846c65ba59dfa781b37e998"
    }else{
        return `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=67be0acb49d69ea06b3be7f8f27bd4ba&hash=5d1b8bf5f846c65ba59dfa781b37e998&ts=1`
    }
}


let template = document.getElementById('template');
let searchHero = document.getElementById('search-character').value;



// function to display the data
function display(data){
    var superHeroList = document.getElementById('superhero-list');
    superHeroList.innerHTML = "";
    var results = data.data.results;
    console.log(results);
    if(!results){
        document.getElementById('search-character').value = "";
        window.alert("No super hero found!");
    }else{
        for(let result of results){
            var card = template.content.cloneNode(true);

            card.getElementById("name").innerHTML = 'Name : ' + result.name;
            card.getElementById("id").innerHTML = 'Id : ' + result.id ;
            card.getElementById('more-info').addEventListener('click', function(){
                localStorage.setItem('id', result.id);
                window.location.assign('./about.html');
            });
            card.getElementById('fav').addEventListener('click', function(){
               
                var index = localStorage.length;
                var data = JSON.stringify(result);
                localStorage.setItem(result.id,data);
                
            });
            superHeroList.appendChild(card);
        }
    }
}













