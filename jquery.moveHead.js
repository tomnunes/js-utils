    (function( $ ){
        $.fn.moveHead = function(options) {
     
            var defaults =  {};
            var settings = $.extend( {}, defaults, options );
            
            var changePositionImage = function(positionMouse, maskObject) {

                var widthWindow     = jQuery(window).width();
                var normalize       = (widthWindow-960)/2;
                var positionX       = (positionMouse - normalize);
                var imageObject     =  maskObject.find("img").eq(0);
                var startImage      = (imageObject.position().left-normalize);
                var widthImage      = maskObject.width();
                var finalImage      = (startImage+widthImage);
                var incrementMouse  = (finalImage - startImage)/5;
                var incrementImage  = (widthImage/5);

                if (positionX <= startImage+incrementMouse) {
                    imageObject.css("margin-left", "0px");
                } else if(positionX >= (startImage+incrementMouse) && positionX < startImage+(incrementMouse*2)) {
                	imageObject.css("margin-left", "-" + widthImage+ "px");
                } else if(positionX >= (startImage+(incrementMouse*2)) && positionX < startImage+(incrementMouse*3)) {
                   imageObject.css("margin-left", "-" + (widthImage*2) + "px");
                } else if(positionX >= (startImage+(incrementMouse*3)) && positionX < startImage+(incrementMouse*4)) {
                  imageObject.css("margin-left", "-" + (widthImage*3) + "px");
                } else if(positionX >= (startImage+(incrementMouse*4)) && positionX < startImage+(incrementMouse*5)) {
                  imageObject.css("margin-left", "-" + ((widthImage*4)) + "px");
                } else {
                  imageObject.css("margin-left", "-" + 200 + "px");
                }
            };


            return this.each(function() {

               $(this).mousemove(function(p){
                      changePositionImage(p.pageX, $(this));
                });

                $(this).on("touchmove", function(p){

                    if (p.originalEvent.touches) {
                        pageX = p.originalEvent.touches[p.originalEvent.touches.length-1].pageX;
                    } 

                    changePositionImage(pageX, $(this));
                });
            });
        };
    })( jQuery );
