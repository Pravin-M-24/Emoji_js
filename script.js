let parentDiv = document.getElementById("emojee_container");
let search = document.getElementById("search_Query");

function searchEmoji(){
            let inputValue = search.value;
            
}

function displayEmojee(){
   
     console.log(parentDiv);

     emojiList.forEach((e)=>{
        let newRow = document.createElement("tr");
        let emoj = document.createElement("td");
        let aliases = document.createElement("td");
        let desc = document.createElement("td");
       
        newRow.append(emoj , aliases , desc);
        parentDiv.appendChild(newRow);
   
            emoj.innerHTML = e.emoji;
            aliases.innerHTML = e.aliases;
            desc.innerHTML = e.description;
            emoj.classList.add("emoj");

    })
    
}

document.addEventListener("DOMContentLoaded" , displayEmojee());
search.addEventListener("keyup" ,  searchEmoji);