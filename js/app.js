$(document).ready(function() {
    $('#wrapper').fullpage();

    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 10,
        callback: function() {
          $("#typedContent").delay(1000).fadeOut();
          $("#logo, nav, .main i").delay(1500).fadeIn();
        }
    });


    $('#navMobile').on("click", function() {
      $('#dropdown').fadeToggle();
    })

    var menuLi = $('#dropdown').find('li');
    menuLi.each(function(){
      $(this).on("click", function(){
        $('#dropdown').fadeOut();
      })
    })

});
