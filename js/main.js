(function($){

    // flexbox example
    $('#flexbox-example-live').on('click', 'li', function() {
        var value = $(this).text();
        $('#flexbox-example').css('justify-content', value);
    })

    $(".sub-menu").hide();

    $(".top-menu li:has(ul)").on('click', function() {
        $("ul",this).toggle('slow');
    })
    
})(jQuery);