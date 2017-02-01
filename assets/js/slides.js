/**
 * Created by johann on 25/01/2017.
 */

$(function () {
    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(3000)
            .next()
            .fadeIn(3000)
            .end()
            .appendTo('#slideshow');
    }, 6000);
});
