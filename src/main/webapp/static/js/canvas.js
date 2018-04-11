var canvas;

$(document).ready(function() {
	canvas = new fabric.Canvas('canvas', {});
	canvas.setWidth(1000);
	canvas.setHeight(550);

	canvas.on("object:modified", function(options) {
		showProp(canvas.getActiveObject());
	});

});

function addShape() {
	var object = new fabric.Rect({
		left : 50,
		top : 50,
		fill : 'black',
		width : 50,
		height : 50
	});
	canvas.add(object).renderAll().setActiveObject(object);
	showProp(object);
}

function clearAll() {
	canvas.clear().renderAll();
	document.getElementById("form").reset();
}

function showProp(object) {
	document.getElementById("form").elements["left"].value = object.left;
	document.getElementById("form").elements["top"].value = object.top;
	document.getElementById("form").elements["width"].value = object.width;
	document.getElementById("form").elements["height"].value = object.height;
	document.getElementById("form").elements["color"].value = object.fill;
}

function showShape() {
	var oldShape = canvas.getActiveObject();
	canvas.remove(oldShape);

	var left = $("#left").val();
	var top = $("#top").val();
	var width = $("#width").val();
	var height = $("#height").val();
	var color = $("#color").val();

	var newShape = new fabric.Rect({
		left : parseInt(left),
		top : parseInt(top),
		fill : color,
		width : parseInt(width),
		height : parseInt(height)
	});

	canvas.add(newShape).renderAll().setActiveObject(newShape);
	showProp(newShape);
}
