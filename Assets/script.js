//this shows time from day JS and refreshes it at an intervul of 1 second
function showTime() {
  var today = dayjs();
  $('#currentDay').text(today.format('MMMM D, YYYY h:mm A'));
  
}

setInterval(showTime, 1000);
//this is the Jquerty function everything will be wrapped in
$(function () {
  //this function saves the timeblock id to local storeage along with its discription
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });
  //this function updates the timeblocks by class, calls the function and converts the timeblock id to a string for order
  function updateTimeBlocks() {
    var currentHour = dayjs().format('H');

    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var hour = parseInt(timeBlockId.split("-")[1]);

     
      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour == currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  updateTimeBlocks();

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);

    if (savedUserInput) {
      $(this).find(".description").val(savedUserInput);
    }
  });
 
});





