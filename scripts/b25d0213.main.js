function initialise(){var a=new google.maps.LatLng(-33.045773,-71.620191),b={zoom:18,minZoom:6,maxZoom:20,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.DEFAULT},center:a,mapTypeId:google.maps.MapTypeId.HYBRID,scrollwheel:!1,panControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!0,overviewMapControl:!1,rotateControl:!1,draggable:!1},c=new google.maps.Map(document.getElementById("map-canvas"),b),d=new google.maps.MarkerImage("../images/map.png",null,null,null,new google.maps.Size(40,55)),e=new google.maps.Marker({position:a,icon:d,map:c,title:"Click to visit our company on Google Places"}),f=new google.maps.InfoWindow({content:"<h3>https://www.mutualdeseguros.cl/</h3><p>Railway Drive-through available.</p>"});google.maps.event.addListener(e,"click",function(){f.open(c,e)}),google.maps.event.addDomListener(window,"resize",function(){c.setCenter(a)})}!function(){$("#myModal").modal({show:!0}),$(".carousel").carousel({controls:!0}),$(".caract a").click(function(a){a.preventDefault(),$(this).tab("show")}),$("a.scroll").on("click",function(a){var b=$(this).attr("href");$("html, body").animate({scrollTop:$(b).offset().top},"slow"),a.preventDefault()}),$(".scrollchico").click(function(){$("html, body").animate({scrollTop:$(".objetivo").offset().top},1e3)})}(),google.maps.event.addDomListener(window,"load",initialise);