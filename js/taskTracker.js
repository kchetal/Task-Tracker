var prePopulate = [{
   "name": "Test Task #1",
   "date": "12/01/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #2",
   "date": "12/02/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #3",
   "date": "12/03/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #4",
   "date": "12/04/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #5",
   "date": "12/05/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #6",
   "date": "12/06/2012",
   "assigned": "John Doe"
 }, {
   "name": "Test Task #7",
   "date": "12/07/2012",
   "assigned": "John Doe"
 }];

 function onPageLoad(prePopulate) {
   prePopulate.forEach(function(task) {
     var taskItem = "<div class='task-item'><h3 class='task-name'>" + task.name + "</h3><h3 class='task-date'>" + task.date + "</h3><h3 class='task-assigned'>" + task.assigned + "</h3></div>";
     $(".task-wrapper").prepend(taskItem);
   });
 };

function addTaskToList(){
 var name = $("#name").val();
 var date = $("#date").val();
 var assigned = $("#assigned").val();
 var taskItem = "<div class='task-item'><h3 class='task-name'>" + name + "</h3><h3 class='task-date'>" + date + "</h3><h3 class='task-assigned'>" + assigned + "</h3></div>";
 $(".task-wrapper").prepend(taskItem);
};

$(document).ready(function() {

 onPageLoad(prePopulate);

 $("#addTaskForm").on('submit',function(event){
   event.preventDefault();
       addTaskToList();
 });

});
