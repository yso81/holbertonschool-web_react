var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
console.log(studentsList);
var body = document.getElementsByTagName("body")[0];
var table = document.createElement("table");
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
var headRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
var locationHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headRow.appendChild(firstNameHeader);
headRow.appendChild(locationHeader);
tableHead.appendChild(headRow);
table.appendChild(tableHead);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
body.appendChild(table);
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = "\n  table {\n    width: 80%;\n    border-collapse: collapse;\n    margin: 20px 0;\n  }\n  th, td {\n    border: 1px solid black;\n    padding: 8px;\n    text-align: left;\n  }\n  th {\n    background-color: #f2f2f2;\n  }\n";
document.head.appendChild(styleSheet);
