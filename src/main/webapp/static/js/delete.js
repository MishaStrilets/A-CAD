function deleteShape() {
	var id = $("#id").val();

	$.ajax({
		type : "DELETE",
		contentType : "application/json",
		url : "/delete/" + id,
		data : JSON.stringify(id),
		cache : false,
		timeout : 600000,

		success : function(data) {
			var deletedShape = canvas.getActiveObject();
			canvas.remove(deletedShape);
			document.getElementById("form").reset();
			alert("Shape deleted.");
		},

		error : function(e) {
			alert("ERROR.");
		}

	});
}
