 $( ".change" ).on("click", function() { 
            if( $( "hero-image" ).hasClass( "sunset-class" )) { 
                $( "hero-image" ).removeClass( "sunset-class" ); 
                $( ".change" ).text( "OFF" ); 
            } else { 
                $( "hero-image" ).addClass( "sunset-class" ); 
                $( ".change" ).text( "ON" ); 
            } 
        }); 