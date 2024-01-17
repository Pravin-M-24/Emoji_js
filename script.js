let parentDiv = document.getElementById("emojee_container");
let search = document.getElementById("searchQuery");

function searchEmoji(){
            let inputValue = search.value;
            // console.log(inputValue);
            displayEmojee(inputValue);
}
console.log(searchQuery );

  
function displayEmojee(searchQuery = ""){

    let filteredData = emojiList.filter((e)=>{

        if(e.description.indexOf(searchQuery ) != -1){
            return true;
        }
        if(e.tags.some((e) => e.startsWith(searchQuery )))
                    return true;
        if(e.aliases.some((e) => e.startsWith(searchQuery )))
                    return true;
    })
        
        console.log(filteredData);

        parentDiv.innerHTML = "";

     filteredData.forEach((e)=>{
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
search.addEventListener('keyup' ,  searchEmoji);
document.addEventListener("DOMContentLoaded" , displayEmojee());
