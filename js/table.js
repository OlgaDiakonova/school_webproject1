// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function () {
    var newTable = document.querySelector("#table2");

    var tabRow = document.createElement("tr");
    var tabHeader = document.createElement("th");
    tabHeader.style.border = "1px solid";
    tabHeader.innerHTML = "First Name";
    tabRow.appendChild(tabHeader);

    var tabHeader = document.createElement("th");
    tabHeader.style.border = "1px solid";
    tabHeader.innerHTML = "Last Name";
    tabRow.appendChild(tabHeader);

    var tabHeader = document.createElement("th");
    tabHeader.style.border = "1px solid";
    tabHeader.innerHTML = "Age";
    tabRow.appendChild(tabHeader);

    var tabHeader = document.createElement("th");
    tabHeader.style.border = "1px solid";
    tabHeader.innerHTML = "Email";
    tabRow.appendChild(tabHeader);
    newTable.appendChild(tabRow);

    for (var i = 0; i < users.length; i++){
        var tabRow = document.createElement("tr");

        var tabFName = document.createElement("td");
        tabFName.style.border = "1px solid";
        tabFName.innerHTML = users[i].first_name;
        tabRow.appendChild(tabFName);

        var tabLName = document.createElement("td");
        tabLName.style.border = "1px solid";
        tabLName.innerHTML = users[i].last_name;
        tabRow.appendChild(tabLName);

        var tabAge = document.createElement("td");
        tabAge.style.border = "1px solid";
        tabAge.innerHTML = users[i].age;
        tabRow.appendChild(tabAge);

        var tabEmail = document.createElement("td");
        tabEmail.style.border = "1px solid";
        var tabRef = document.createElement("a");
        tabRef.href = "mailto:" + users[i].email;
        tabRef.innerHTML = users[i].email;
        tabEmail.appendChild(tabRef);
        tabRow.appendChild(tabEmail);

        newTable.appendChild(tabRow);
    
    }
    

}