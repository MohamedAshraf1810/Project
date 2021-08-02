//jquey

// Fixed Header
$(document).ready(function()
{
    $(".fa-play-circle").hover(function()
    {
        $( ".popupDiv" ).slideDown(300);
    },
    function()
    {
        $( ".popupDiv" ).slideUp(300);

    });

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

        if ( w >= $(".section3").offset().top-100)
        {
            $(".div1Fdiv").attr("style" , "display:flex");
            $(".div1Sdiv").attr("style" , "display:flex");
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

    });

    $(".top").on("click", function () {
        
      });

      $(".top").on("click" , function (){
          $("html , body").animate({scrollTop:0,},1500);
    });
});

$(window).on("load" , function () 
{
    $(".loader-container").fadeOut(2000);
})

// EndJquery

//JavaScript

var mya = document.querySelector(".footerDiv1_Div1PA");

mya.onclick=function () 
{
    location.reload();
    window.scrollTo(0, 0);
}