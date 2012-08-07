// On Page Load
$(function()
{

    var onHover = function(ev)
    {
        $(ev.target).stop().animate({top: '0'}, 350, 'easeInQuad');
        $(ev.target).find("img.grey").stop().animate({opacity:'0'}, 300);
    };

    var onUnHover = function(ev)
    {
        $(ev.target).stop().animate({top:'-35px'}, 350, 'easeInQuad');
        $(ev.target).find("img.grey").stop().animate({opacity:'1'}, 300);
    };

    var buttons = $("div.fme span.button");
    buttons.each(function(index, elem)
    {
            $(elem).hover(onHover, onUnHover);
    });

    var banner_left = $("div.fme.left div.banner");
    banner_left.hover(function()
    {
        $("div.fme.left span.button").each(function(index, elem)
        {
            onHover({target: elem});
        });
    },
    function(ev)
    {
        $("div.fme.left span.button").each(function(index, elem)
        {
            onUnHover({target: elem});
        });
    });

    var banner_right = $("div.fme.right div.banner");
    banner_right.hover(function()
        {
            $("div.fme.right span.button").each(function(index, elem)
            {
                onHover({target: elem});
            });
        },
        function(ev)
        {
            $("div.fme.right span.button").each(function(index, elem)
            {
                onUnHover({target: elem});
            });
        });
});