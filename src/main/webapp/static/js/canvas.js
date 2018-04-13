var canvas;

$(document).ready(function() {
	canvas = new fabric.Canvas('canvas', {});
	canvas.setWidth(1000);
	canvas.setHeight(550);
	canvas.on("object:modified", function(options) {
		showProp(canvas.getActiveObject());
	});
	canvas.on("object:selected", function(options) {
		showProp(canvas.getActiveObject());
	});
});

function addShape() {
	var object = new fabric.Rect({
		id : -1,
		left : 500,
		top : 225,
		fill : 'black',
		width : 50,
		height : 50,
		angle : 0
	});
	canvas.add(object).renderAll().setActiveObject(object);
	showProp(object);
}

function clearAll() {
	canvas.clear().renderAll();
	document.getElementById("form").reset();
}

function showProp(object) {
	document.getElementById("form").elements["id"].value = object.id;
	document.getElementById("form").elements["left"].value = object.left;
	document.getElementById("form").elements["top"].value = object.top;
	document.getElementById("form").elements["width"].value = object.width;
	document.getElementById("form").elements["height"].value = object.height;
	document.getElementById("form").elements["color"].value = object.fill;
	document.getElementById("form").elements["angle"].value = object.angle;
}

function showShape() {
	var oldShape = canvas.getActiveObject();
	canvas.remove(oldShape);

	var id = $("#id").val();
	var left = $("#left").val();
	var top = $("#top").val();
	var width = $("#width").val();
	var height = $("#height").val();
	var color = $("#color").val();
	var angle = $("#angle").val();

	var newShape = new fabric.Rect({
		id : parseInt(id),
		left : parseInt(left),
		top : parseInt(top),
		fill : color,
		width : parseInt(width),
		height : parseInt(height),
		angle : parseInt(angle)
	});

	canvas.add(newShape).renderAll().setActiveObject(newShape);
	showProp(newShape);
}
