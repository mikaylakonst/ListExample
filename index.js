window.onload = addStuffToPage;

function addStuffToPage(){
  var stuffToAdd = ["thing1", "thing2", "thing3", "thing4", "thing5"];
  for (var i = 0; i < stuffToAdd.length; i++){
    var thing = stuffToAdd[i];
    var paragraph = document.createElement("p");
    paragraph.innerHTML = thing;
    var container = document.getElementById("container");
    container.appendChild(paragraph);
  }
}
