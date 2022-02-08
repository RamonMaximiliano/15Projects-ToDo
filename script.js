function addItem() {

    let list = document.querySelector("ul.mainList")
    let newListItem = document.createElement("li")

    //Descobrir quant items de uma list
    //Se impar adicionar red ou par adicionar white 
    console.log(list.childElementCount);
    console.log(list.getElementsByTagName("LI").length);

    let listQuantity = list.childElementCount;
    console.log(listQuantity)

    if (listQuantity % 2 == 1) {
        newListItem.setAttribute("class", "listItemWhite")
    } else {
        newListItem.setAttribute("class", "listItem")
    }

    /*Item Text*/
    let itemTyped = document.querySelector("input.inputItem").value

    if (itemTyped == '') {
        window.alert("We do not accept empty items")
    } else {
        let itemResult = document.createElement("p")
        itemResult.setAttribute("class", "paragraphText")
        let newText = document.createTextNode(itemTyped)
        itemResult.appendChild(newText)
        //riscando o item que já foi feito
        itemResult.addEventListener("click", function checked(event) {
            event.target.style.textDecoration = "line-through";
        })

        let deleteButton = document.createElement("p")
        let deleteButtonText = document.createTextNode("X")
        deleteButton.setAttribute("class", "deleteButton")
        deleteButton.appendChild(deleteButtonText)

        deleteButton.addEventListener("click", function deleteItem(deleteItem) {
            let deletedItem = deleteItem.target.parentElement
            deletedItem.remove()
        //o de baixo tbm funciona mas o elemento continua existindo
/*         deleteItem.target.parentElement.style.display = "none"
 */    })

        newListItem.appendChild(itemResult)
        newListItem.appendChild(deleteButton)
        list.appendChild(newListItem)
    }
}
