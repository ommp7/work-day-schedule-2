$(function () {
  // Listener for click events on the save button
  $('.saveBtn').on('click', function() {
    // Get the ID of the parent time block
    var timeBlockID = $(this).parent().attr('id');
    
    // Use the timeBlockID to save the user input in local storage
    var userDescription = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockID, userDescription);
  });

  // Apply past, present, or future class to each time block
  var currentHour = dayjs().hour(); // Get the current hour in 24-hour time
  $('.time-block').each(function() {
    var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Get user input saved in localStorage and set textarea values
  $('.time-block').each(function() {
    var timeBlockID = $(this).attr('id');
    var storedDescription = localStorage.getItem(timeBlockID);
    
    if (storedDescription) {
      $(this).find('.description').val(storedDescription);
    }
  });

  // Display the current date in the header of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

