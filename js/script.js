$(window).load(function() {
  $('#horizontalTab').responsiveTabs({
                rotate: false,
                startCollapsed: 'accordion',
                collapsible: 'accordion',
                setHash: true,
                activate: function(e, tab) {
                    $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
                }
            });
////hot deals slider left
$('.flexhd').flexslider({
    animation: "slide"
  });
 $('.flexgallery').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 176,
    itemMargin: 5
  });
  $('.flexreview').flexslider({
    animation: "slide"
  });
  $('.flext-r').flexslider({
    animation: "slide"
  });
});
