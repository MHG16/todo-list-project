// Check off specific Todos by clicking
$("li").click(function() {
	//if li is gray
	if($(this).css("color")  === "rgb(128, 128, 128)") {
			//turn it black
		$(this).css({

			//turn it black
			color: "black",
			textDecoration: "none"

		});
	}	
	//else
	else {
		$(this).css({

			//turn it gray
			color: "gray",
			textDecoration: "line-through"
		});


	}

		



});