$(document).ready(function () 
{
    var header2 = $(".productSection2Div1").offset().top;
    var imgWithWords = $(".Productsection5Div2");
    var sec5 = $(".Productsection5").offset().top;

    $(window).scroll(function ()
    {
        var w = $(this).scrollTop();

        if (w>= sec5-400 ) 
        {
            imgWithWords.slideDown(2500 ,  "swing");   
        }

        if ( w > header2-50)
        {
            $(".productSection2Div1").css(
            {
                position:"fixed",
                width:"100%",
                height:"50px",
                background:"white",
                left:0,
            });
        }    
        else
        {
            $(".productSection2Div1").attr("style", "");
        }

        var sec2 = $(".productSection3").offset().top;
        var sec6 = $(".productsSection6").offset().top;

        if (w > sec2 )
        {
            $('.count2').each(function () 
            {
                $(this).prop('Counter',0).animate(
                    {
                    Counter: $(this).text()
                    }, 
                    {
                    duration: 2500,
                    easing: 'swing',
                    step: function (now) 
                    {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }

        if (w>= sec6-60) 
        {
            //-- Plugin implementation
            (function($) 
            {
                $.fn.countTo = function(options) 
                {
                    return this.each(function() 
                    {
                        //-- Arrange
                        var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
                        var $el = $(this);
                        var countFrom = parseInt($el.attr('data-count-from'));
                        var countTo = parseInt($el.attr('data-count-to'));
                        var countSpeed = $el.attr('data-count-speed'); // Number increment per second
                
                        //-- Action
                        var rafId;
                        var increment;
                        var currentCount = countFrom;
                        var countAction = function() {              // Self looping local function via requestAnimationFrame
                        if(currentCount < countTo) {              // Perform number incremeant
                            $el.text(Math.floor(currentCount));     // Update HTML display
                            increment = countSpeed / FRAME_RATE;    // Calculate increment step
                            currentCount += increment;              // Increment counter
                            rafId = requestAnimationFrame(countAction);
                        } else {                                  // Terminate animation once it reaches the target count number
                            $el.text(countTo);                      // Set to the final value before everything stops
                            // cancelAnimationFrame(rafId);
                        }
                        };
                        rafId = requestAnimationFrame(countAction); // Initiates the looping function
                    }
                    );
                };
            }
            (jQuery));
        
            //-- Executing
            $('.number-counter').countTo();   
        }

        if (w<sec2) 
        {
                //-- Plugin implementation
            (function($) 
            {
                $.fn.countTo = function(options) 
                {
                    return this.each(function() 
                    {
                        //-- Arrange
                        var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
                        var $el = $(this);
                        var countFrom = parseInt($el.attr('data-count-from'));
                        var countTo = parseInt($el.attr('data-count-to'));
                        var countSpeed = $el.attr('data-count-speed'); // Number increment per second
                
                        //-- Action
                        var rafId;
                        var increment;
                        var currentCount = countFrom;
                        var countAction = function() {              // Self looping local function via requestAnimationFrame
                        if(currentCount < countTo) {              // Perform number incremeant
                            $el.text(Math.floor(currentCount));     // Update HTML display
                            increment = countSpeed / FRAME_RATE;    // Calculate increment step
                            currentCount += increment;              // Increment counter
                            rafId = requestAnimationFrame(countAction);
                        } else {                                  // Terminate animation once it reaches the target count number
                            $el.text(countTo);                      // Set to the final value before everything stops
                            //cancelAnimationFrame(rafId);
                        }
                        };
                        rafId = requestAnimationFrame(countAction); // Initiates the looping function
                    }
                    );
                };
            }
            (jQuery));
        
            //-- Executing
            $('.number-counter').countTo();
        }

        if (w >= 200) 
        {
            $(".top").show();
        }
        else
        {   
            $(".top").hide();
        }
    });

})

$(window).on("load" , function () 
{
    $(".loader-container").fadeOut(2000);
}) 









