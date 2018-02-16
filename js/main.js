(function($){

    // flexbox example
    $('#flexbox-example-live').on('click', 'li', function() {
        var value = $(this).text();
        $('#flexbox-example').css('justify-content', value);
    })
    
})(jQuery);