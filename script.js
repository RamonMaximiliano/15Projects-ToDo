function addItem(){

    let list = document.querySelector("ul.mainList")
    let newListItem = document.createElement("li")
 
    //Descobrir quant items de uma list
    //Se impar adicionar red ou par adicionar white 
    console.log(list.childElementCount);
    console.log(list.getElementsByTagName("LI").length);

    let listQuantity = list.childElementCount;
    console.log(listQuantity)

    if(listQuantity%2 == 1){
        newListItem.setAttribute("class", "listItemWhite")
    } else {
        newListItem.setAttribute("class", "listItem")
    }

    let itemTyped = document.querySelector("input.inputItem").value
    let itemResult = document.createElement("p")
    let newText = document.createTextNode(itemTyped)
    itemResult.appendChild(newText)

    let deleteButton = document.createElement("p")
    let deleteButtonText = document.createTextNode("X")
    deleteButton.setAttribute("onclick", "deleteItem(this)")
    deleteButton.appendChild(deleteButtonText)

    newListItem.appendChild(itemResult)
    newListItem.appendChild(deleteButton)
    list.appendChild(newListItem)
 
}


function deleteItem(item){
    console.log(item)
}