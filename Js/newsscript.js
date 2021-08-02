$(document).ready(function()
{
    var header = $("header").offset().top;

    $(window).scroll(function ()
    {
        var w = $(this).scrollTop();

        if ( w > header)
        {
            $("header").css(
            {
                position:"fixed",
                width:"100%",
                height:"50px",
                background:"rgb(78,202,194)",
                top:0,
                left:0,
            });

            $(".myimg").css({height:"50px",})
            $(".containerDiv2 ul li").css({"line-height":"50px"})
        }    
        else
        {
            $("header").attr("style", "");
            $(".myimg").css({"height":"115px",})
            $(".containerDiv2 ul li").css({"line-height":"115px"})
        }

        // Show Button
        if (w >= 200) 
        {
            $(".top").show();
        }
        else
        {   
            $(".top").hide();
        }

    }
    
)
    $(".top").on("click", function () {
            
    });

    $(".top").on("click" , function (){
        $("html , body").animate({scrollTop:0,},1500);
    });
})





$(window).on("load" , function () 
{
    $(".loader-container").fadeOut(2000);
})