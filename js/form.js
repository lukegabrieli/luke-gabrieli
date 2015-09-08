$('#email_form').submit(function(e) {
  e.preventDefault();

  var data = $(this).serialize();

  $.ajax({
    type: 'POST',
    url: $('#email_form').attr('action'),
    data: data
  }).done(function(response) {
    $('#submit').remove();
    $('#email_form').append("<p class='form_success'>Thanks! I'll respond soon.</p>");
    $('#first_name').val('');
    $('#last_name').val('');
    $('#contact_email').val('');
    $('#contact_subject').val('');
    $('#contact_message').val('');
  });
});
