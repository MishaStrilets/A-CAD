$(document).ready(function() {

	$("#form").submit(function(event) {

		event.preventDefault();

		var form = {}
		form["left"] = $("#left").val();
		form["top"] = $("#top").val();
		form["width"] = $("#width").val();
		form["height"] = $("#height").val();
		form["color"] = $("#color").val();

		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/add",
			data : JSON.stringify(form),
			cache : false,
			timeout : 600000,

			success : function(data) {
				alert("Shape saved.");
			},

			error : function(e) {
				alert("ERROR.");
			}

		});

	});
});
