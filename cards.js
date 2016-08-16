const createBtn = document.getElementById("create");
const textArea = document.getElementById("textArea");
createBtn.addEventListener("click", function() {
    let value = textArea.value;
    addCard(value);
});

var container = document.getElementById("container");

function addCard(value) {
    var newDiv = document.createElement("div");
    newDiv.className = "card";
    var newContent = document.createTextNode(value);
    newDiv.appendChild(newContent); //add the text node to the newly created div.
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", deleteCard);
    newDiv.appendChild(deleteButton);
    container.appendChild(newDiv);
}

function deleteCard() {
    this.parentNode.parentNode.removeChild(this.parentNode)
}
