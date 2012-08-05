// On Page Load
$(function()
{
    var buttons_left = $("div.fme.left span.button");
    buttons_left.each(function(index, elem)
    {
            $(elem).hover(function ()
            {
                $(elem).stop();
                $(elem).animate({top:'0'}, 300);
            },
            function ()
            {
                $(elem).stop();
                $(elem).animate({top:'-35px'}, 300);
            }
        );
    });

    var banner_left = $("div.fme.left div.banner");
    banner_left.hover(function()
    {
        buttons_left.stop();
        buttons_left.animate({top:'0'}, 300);
    },
    function()
    {
        buttons_left.stop();
        buttons_left.animate({top:'-35px'}, 300);
    });

    var buttons_right = $("div.fme.right span.button");
    buttons_right.each(function(index, elem)
    {
            $(elem).hover(function ()
            {
                $(elem).stop();
                $(elem).animate({top:'0'}, 300);
            },
            function ()
            {
                $(elem).stop();
                $(elem).animate({top:'-35px'}, 300);
            }
        );
    });

    var banner_right = $("div.fme.right div.banner");
        banner_right.hover(function()
        {
            buttons_right.stop();
            buttons_right.animate({top:'0'}, 300);
        },
        function()
        {
            buttons_right.stop();
            buttons_right.animate({top:'-35px'}, 300);
        });
});