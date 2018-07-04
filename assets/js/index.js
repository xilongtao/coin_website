function feature()
{
    if (!$("#feature").hasClass('animation-added')) {
        $("#feature img").addClass("fadein");
        $("#feature ul li").addClass("fadein");
    }
}
function feature2()
{
    if (!$("#feature2").hasClass('animation-added')) {
        $("#feature2 img").addClass("fadein");
        $("#feature2 ul li").addClass("fadein");
    }
}
$("#feature").waypoint({
    handler: function(direction) {
        feature();
    },
    offset: 450
});