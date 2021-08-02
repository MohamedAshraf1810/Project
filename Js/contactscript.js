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

    })
    $("#hov1").hover(function () {
        $(this).css("opacity" , "0.5")
        $("#img1").css("display" , "block")
        $("#img2").css("display" , "none")
        $("#img3").css("display" , "none")
        $("#img4").css("display" , "none")
    },
    function ()
    {
        $(this).css("opacity" , "")
    })

    $("#hov2").hover(function () {
        $(this).css("opacity" , "0.5")
        $("#img1").css("display" , "none")
        $("#img2").css("display" , "block")
        $("#img3").css("display" , "none")
        $("#img4").css("display" , "none")
    },
    function ()
    {
        $(this).css("opacity" , "")
    })

    $("#hov3").hover(function () {
        $(this).css("opacity" , "0.5")
        $("#img1").css("display" , "none")
        $("#img2").css("display" , "none")
        $("#img3").css("display" , "block")
        $("#img4").css("display" , "none")
    },
    function ()
    {
        $(this).css("opacity" , "")
    })

    $("#hov4").hover(function () {
        $(this).css("opacity" , "0.5")
        $("#img1").css("display" , "none")
        $("#img2").css("display" , "none")
        $("#img3").css("display" , "none")
        $("#img4").css("display" , "block")
    },
    function ()
    {
        $(this).css("opacity" , "")
    })

    
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



// End Jquery
