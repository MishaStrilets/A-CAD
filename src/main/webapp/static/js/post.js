$(document).ready(function() {

	$("#form").submit(function(event) {

		event.preventDefault();

		var form = {}
		form["id"] = $("#id").val();
		form["left"] = $("#left").val();
		form["top"] = $("#top").val();
		form["width"] = $("#width").val();
		form["height"] = $("#height").val();
		form["color"] = $("#color").val();
		form["angle"] = $("#angle").val();

		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/post",
			data : JSON.stringify(form),
			cache : false,
			timeout : 600000,

			success : function(data) {
				alert("Shape saved.");
			},

			error : function(e) {
				alert("INVALID INPUT.");
			}

		});

	});
});
