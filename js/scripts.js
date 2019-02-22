$(document).ready(function() {
    //Business Logic
    var quizResult = [];
    $("#forms").on('click', function(event) {
      $('.radio input:checked').each(function() {
        quizResult.push($(this).val());
        event.preventDefault();
      });
      var totalScore = 0;
      for (var i = 0; i < quizResult.length; i++) {
        totalScore += quizResult[i] << 0;
      }
      $("#result").val(totalScore);
    });
  
    //User interface
    $("#forms").on('click', function(event) {
      $("#quiz").fadeOut('slow');
      $("#quiz-results").fadeIn('slow');
    });
  });
