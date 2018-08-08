// var h = $("#headerBlock").height();
// var w = $("#headerBlock").width() + 30;
// $("#headerBlock").css('height', h + 'px');
// $("#headerBlock").css('width', w + 'px');
// $("#headerBlock").css('position', 'static');
function feature()
{
    if (!$("#feature").hasClass('animation-added')) {
        // $("#feature img").css('visibility', 'visible');
        // $("#feature ul li").css('visibility', 'visible');
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
$(".feature-title").waypoint({
    handler: function () {
        if (!$(".feature-title").hasClass('fadein')) {
            $(".feature-title").addClass("fadein");
        }
    },
    offset: 450
});
$("#feature").waypoint({
    handler: function(direction) {
        feature();
    },
    offset: 450
});
$("#feature2").waypoint({
    handler: function(direction) {
        feature2();
    },
    offset: 450
});
$(".wallet-container").waypoint({
    handler: function(direction) {
        if (!$("h1.wallet-title").hasClass('fadein')) {
            $("h1.wallet-title").addClass("fadein");
        }
        if (!$("div.sub-wallet").hasClass('fadein')) {
            $("div.sub-wallet").addClass("fadein");
        }
    },
    offset: 400
});

$(".footer").waypoint({
    handler: function(direction) {
        if (!$(".footer").hasClass('fadein')) {
            $(".footer").addClass("fadein");
        }
    },
    offset: 700
});