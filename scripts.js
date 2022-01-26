

$('button').on('click', function() { 
    let item = $('input').val();
    $('ul').append(`<li>${item}</li>`);   
  });


  $('ul').on('click', 'li', function()  {
          $(this).css('text-decoration', 'line-through');
      });