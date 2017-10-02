let currectList = {};

function createShoppingList() {
    currectList.name = $("#shoppingListName").val();
    currectList.items = new Array();

    $("#shoppingListTitle").html(currectList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
}

function addItem() {
    let newItem = {};
    newItem.name = $("#newItemName").val();
    currectList.items.push(newItem);
    console.info(currectList);

    drawItems();
}

function drawItems() {
    let $list = $("#shoppingListItems").empty();

    for (let i = 0; i <currectList.items.length; i++){
        let currentItem = currectList.items[i];
        let $li = $("<li>").html(currentItem.name).attr("id", "item_" + i);

        let $deleteBtn = 
            $("<button onclick ='deleteItem(" + i + ")'>D</button>").appendTo($li);
        let $checkBtn = $("<button onclick ='checkItem(" + i + ")'>C</button>").appendTo($li);

        $li.appendTo($list);
    }
}

function deleteItem(index) {
    currectList.items.splice(index, 1);
    drawItems();
}

function checkItem(index) {
    if($("#item_" + index).hasClass("checked")){
        $("#item_" + index).removeClass("checked"); 
    }
    else{
        $("#item_" + index).addClass("checked");         
    }
}

$(document).ready(function () {
    console.log("ready");
});