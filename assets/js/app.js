 //<![CDATA[
$(window).load(function(){
    function fluctuate(bar) {
        var height = Math.floor(Math.random() * 19) + 19;
        //Animate the equalizer bar repeatedly
        bar.animate({
            height: height
        }, function() {
            fluctuate($(this));
        });
    }

    $(".bar").each(function(i) {
        fluctuate($(this));
    });
});//]]>


           
          