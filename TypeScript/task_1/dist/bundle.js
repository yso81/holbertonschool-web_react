/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log("printTeacher('John', 'Doe'):", printTeacher("John", "Doe"));
console.log("printTeacher('Alice', 'Smith'):", printTeacher("Alice", "Smith"));
var teacher1 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var teacher2 = {
    firstName: 'Alice',
    lastName: 'Smith',
    fullTimeEmployee: false,
    location: 'Los Angeles',
    hourlyRate: 50,
};
console.log("Teacher 1:", teacher1);
console.log("Teacher 2:", teacher2);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var container = document.createElement("div");
container.className = "teacher-container";
container.innerHTML = "\n  <h1>Holberton Task 1: Teacher Profiles</h1>\n  \n  <div class=\"card\">\n    <h2>Teacher 1: ".concat(teacher1.firstName, " ").concat(teacher1.lastName, "</h2>\n    <pre>").concat(JSON.stringify(teacher1, null, 2), "</pre>\n  </div>\n\n  <div class=\"card\">\n    <h2>Teacher 2: ").concat(teacher2.firstName, " ").concat(teacher2.lastName, "</h2>\n    <pre>").concat(JSON.stringify(teacher2, null, 2), "</pre>\n  </div>\n");
document.body.appendChild(container);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWlCQSxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFpQixFQUFFLFFBQWdCO0lBQzdFLE9BQU8sVUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFLLFFBQVEsQ0FBRSxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRS9FLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVk7SUFDeEIsU0FBUyxFQUFFLE9BQU87SUFDbEIsUUFBUSxFQUFFLE9BQU87SUFDakIsZ0JBQWdCLEVBQUUsS0FBSztJQUN2QixRQUFRLEVBQUUsYUFBYTtJQUN2QixVQUFVLEVBQUUsRUFBRTtDQUNmLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVwQyxJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFhdkI7SUFJSSxzQkFBWSxTQUFpQixFQUFFLFFBQWdCO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0ksT0FBTyxtQkFBbUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDO0FBR0QsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO0FBRTFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsMEdBSUQsUUFBUSxDQUFDLFNBQVMsY0FBSSxRQUFRLENBQUMsUUFBUSw2QkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyw0RUFJdkIsUUFBUSxDQUFDLFNBQVMsY0FBSSxRQUFRLENBQUMsUUFBUSw2QkFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyx1QkFFM0MsQ0FBQztBQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gICAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gICAgbG9jYXRpb246IHN0cmluZztcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgcHJpbnRUZWFjaGVyRnVuY3Rpb24ge1xuICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmNvbnN0IHByaW50VGVhY2hlcjogcHJpbnRUZWFjaGVyRnVuY3Rpb24gPSAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX0uICR7bGFzdE5hbWV9YDtcbn07XG5cbmNvbnNvbGUubG9nKFwicHJpbnRUZWFjaGVyKCdKb2huJywgJ0RvZScpOlwiLCBwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpKTtcbmNvbnNvbGUubG9nKFwicHJpbnRUZWFjaGVyKCdBbGljZScsICdTbWl0aCcpOlwiLCBwcmludFRlYWNoZXIoXCJBbGljZVwiLCBcIlNtaXRoXCIpKTtcblxuY29uc3QgdGVhY2hlcjE6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnN0IHRlYWNoZXIyOiBUZWFjaGVyID0ge1xuICBmaXJzdE5hbWU6ICdBbGljZScsXG4gIGxhc3ROYW1lOiAnU21pdGgnLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbG9jYXRpb246ICdMb3MgQW5nZWxlcycsXG4gIGhvdXJseVJhdGU6IDUwLFxufTtcblxuY29uc29sZS5sb2coXCJUZWFjaGVyIDE6XCIsIHRlYWNoZXIxKTtcbmNvbnNvbGUubG9nKFwiVGVhY2hlciAyOlwiLCB0ZWFjaGVyMik7XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuaW50ZXJmYWNlIFN0dWRlbnRDb25zdHJ1Y3RvciB7XG4gICAgbmV3IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IFN0dWRlbnRDbGFzc0ludGVyZmFjZTtcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzc0ludGVyZmFjZSB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmc7XG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50Q2xhc3NJbnRlcmZhY2Uge1xuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xuICAgIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICAgICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIH1cblxuICAgIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkN1cnJlbnRseSB3b3JraW5nXCI7XG4gICAgfVxuXG4gICAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lO1xuICAgIH1cbn1cblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGFpbmVyLmNsYXNzTmFtZSA9IFwidGVhY2hlci1jb250YWluZXJcIjtcblxuY29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgPGgxPkhvbGJlcnRvbiBUYXNrIDE6IFRlYWNoZXIgUHJvZmlsZXM8L2gxPlxuICBcbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICA8aDI+VGVhY2hlciAxOiAke3RlYWNoZXIxLmZpcnN0TmFtZX0gJHt0ZWFjaGVyMS5sYXN0TmFtZX08L2gyPlxuICAgIDxwcmU+JHtKU09OLnN0cmluZ2lmeSh0ZWFjaGVyMSwgbnVsbCwgMil9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgPGgyPlRlYWNoZXIgMjogJHt0ZWFjaGVyMi5maXJzdE5hbWV9ICR7dGVhY2hlcjIubGFzdE5hbWV9PC9oMj5cbiAgICA8cHJlPiR7SlNPTi5zdHJpbmdpZnkodGVhY2hlcjIsIG51bGwsIDIpfTwvcHJlPlxuICA8L2Rpdj5cbmA7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==