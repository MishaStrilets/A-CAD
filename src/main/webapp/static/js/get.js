$(document).ready(function() {

	$("#get").click(function(event) {

		event.preventDefault();

		$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "/get",
			cache : false,
			timeout : 600000,

			success : function(data) {

				clearAll();

				if (data == "")
					alert("No figures.");

				$.each(data, function(i, shape) {

					var object = new fabric.Rect({
						id : parseInt(shape.id),
						left : parseInt(shape.left),
						top : parseInt(shape.top),
						fill : shape.color,
						width : parseInt(shape.width),
						height : parseInt(shape.height),
						angle : parseInt(shape.angle)
					});

					canvas.add(object).renderAll();
				});
			},

			error : function(e) {
				alert("ERROR.");
			}

		});

	});
});
