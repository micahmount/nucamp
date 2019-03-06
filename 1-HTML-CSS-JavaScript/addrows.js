function insertItem() {
    var nodeToClone = document.getElementById("list").lastChild;
    var newItem = nodeToClone.cloneNode();
    document.getElementById("list").appendChild(newItem);
    var entryText = document.createTextNode(prompt("What would you like to add to the list?"));    
    newItem.appendChild(entryText);
}

function removeItem(){
    var removeItem=document.getElementById("list");
    removeItem.removeChild(removeItem.lastChild);
}