var DateTime = new Date();           
function DisplayDateTime(){  
      var tagDiv=document.getElementById("currentDay");           
      tagDiv.innerText = DateTime.toLocaleDateString();           
    };
    var taskDiv = document.querySelectorAll(".task-info")
    var hours = DateTime.getHours();
    for (let i = 0; i < taskDiv.length; i++) {
      if (taskDiv[i].id < hours) {
        taskDiv[i].classList.add("past")
      } else if (taskDiv[i].id == hours) {
        taskDiv[i].classList.add("present")
      } else {
        taskDiv[i].classList.add("future")
      };

        
      
     
      
      
    }

// var currentHour =;
    let timeSlot = {
      "8": [],
      "9": [],
      "10": [],
      "11": [],
      "12": [],
      "13": [],
      "14": [],
      "15": [],
      "16": [],
      "17": []
    };

 // setup local storage for variables
 var setTask = function() {
   localStorage.setItem("tasks", JSON.stringify(timeSlot));

 }

 var getTasks = function() {
   var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
   if (loadedTasks) {
     timeSlot = loadedTasks

     $.each(timeSlot, function(hour, timeSlot) {
       var hourDiv = $("#" + hour);
       createTask(timeSlot, hourDiv);
     })
   }
  

 }

 // allow text boxes to be edited
var createTask = function(taskText, hourDiv) {
// create a task in the row that corresponds to the specified hour

var taskDiv = hourDiv.find(".task")
var taskP = $("<p>")
.addClass('description')
.text(taskText)
taskDiv.html(taskP);
}
   
var taskChecker = function() {

  $(".task-info").each(function() {
    var elementHour = parseInt($(this).attr("id"));
    if (elementHour < strHour) {
      $(this).removeClass(["present", "future"]).addClass("past")
    }
    else if ( elementHour === strHour) {
      $(this).removeClass(["past", "future"]).addClass("present");
    }
    else {
      $(this).removeClass(["past", "present"]).addClass("future");
    }
  }) 
}
  
   var updateTextArea = function(textAreaElement) {
    
    var taskInfo = textAreaElement.closest(".task-info");
     var textArea = taskInfo.find("textarea");
     var time = taskInfo.attr("id");
     var text = textArea.val();
     timeSlot[time] = [text];
     setTask();
     createTask(text, taskInfo);
   };
   $(".task").click(function() {
    var DateTime = new Date();           
    var strHour = DateTime.getTime();
     $("textarea").each(function() {
       updateTextArea($(this));
     });
     var time = $(this).closest(".task-info").attr("id")
     if(parseInt(time) >= strHour)
     var text = $(this).text();
     var textInput = $("<textarea>")
     .addClass("form-control")
     .val(text);
     $(this).html(textInput);
        textInput.trigger("focus");
   })
   $(".saveBtn").click(function() {
     updateTextArea($("this"))
   })

   
   
   
   
   
   
   
   
   
   
 
   
   DisplayDateTime();
   getTasks();