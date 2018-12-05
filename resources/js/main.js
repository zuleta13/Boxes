		$(document).ready(function() {
			$(".add-button").click(function () {
				var val1 = parseInt($(".val1").val());
				var val2 = parseInt($(".val2").val());
				var val3 = parseInt($(".val3").val());
				
				$(".return").html("");
				$(".return").append("<p>" + val3 + " " + (val3+val2) + " " + (2*val3+val2) + " " + (2*val3+ 2*val2) + " " + (2*val3+ 2*val2 + 2) +  "</p>");
				$(".return").append("<p>" + val3/2 + " " + (val1 + val3/2) + " " + (val3+val1) + "</p>");
				$(".return").append("<p>" + (2*val3+ 2*val2 + 2)*(val3+val1)*0.05/1000 + "</p>");
			});
			
		});
