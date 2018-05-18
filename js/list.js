// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
    var listContainer = document.querySelector("#list1");
    var newAttribute = document.createElement("ol");
    for (var i = 0; i < fruits.length; i++) {
        var newElement = document.createElement("li");
        newElement.innerHTML = fruits[i];
        newAttribute.appendChild(newElement);
    }
    listContainer.appendChild(newAttribute);

    var fileList = document.querySelector("#list2");
    var newList = document.createElement("ul");

    for (var i = 0; i < directory.length; i++){
        var newEl = document.createElement("li");
        newEl.innerHTML = directory[i].name;
        newList.appendChild(newEl);
        if (directory[i].type == "directory") {
            var newUL = document.createElement("ul");
            for (var j = 0; j < directory[i].files.length; j++) {
                var newLI = document.createElement("li");
                newLI.innerHTML = directory[i].files[j].name;
                newUL.appendChild(newLI);
            }
            newEl.appendChild(newUL);

        }
        newList.appendChild(newEl);
    
    }
    fileList.appendChild(newList);


}

