$(function() {

    $('.navigation-cell').click(function() {
        $('.navigation-mobile').css("display", "flex")
        $('#navigation-cell-a').css("display", "none")
        $('#navigation-cell-b').css("display", "block")

        $('html, body').css({
            'overflow': 'hidden'
        });
        
    })

    $('#navigation-cell-b, .links-nav, .navigation-mobile').click(function() {
        $('.navigation-mobile').css("display", "none")
        $('#navigation-cell-a').css("display", "block")
        $('#navigation-cell-b').css("display", "none")
        
        $(window).resize(function() {
            if ($(window).width() > 519) {
                $('.navigation-cell').css("display", "none")
                $('.navigation-mobile').css("display", "none")
            }
        })

        $(window).resize(function() {
            if ($(window).width() < 519) {
                $('.navigation-mobile').css("display", "none")
                $('#navigation-cell-a').css("display", "block")
                $('#navigation-cell-b').css("display", "none")
            }
        })
        $('html, body').css({
            'overflow': 'auto'
        });
    })

})
