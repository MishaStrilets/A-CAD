var canvas;

$(document).ready(function() {
	canvas = new fabric.Canvas('canvas', {});
	canvas.setWidth(1000);
	canvas.setHeight(550);

	canvas.on("object:modified", function(options) {
		show(canvas.getActiveObject());
	});
});

function addObject() {
	var object = new fabric.Rect({
		left : 50,
		top : 50,
		fill : 'black',
		width : 50,
		height : 50
	});
	canvas.add(object).renderAll().setActiveObject(object);
	show(object);
}

function clearAll() {
	canvas.clear().renderAll();
}

function show(object) {
	document.getElementById("form").elements["left"].value = object.left;
	document.getElementById("form").elements["top"].value = object.top;
	document.getElementById("form").elements["width"].value = object.width;
	document.getElementById("form").elements["height"].value = object.height;
	document.getElementById("form").elements["color"].value = object.fill;
}

function saveObject() {
	var oldObject = canvas.getActiveObject();
	canvas.remove(oldObject);

	var left = document.getElementById("form").elements["left"].value;
	var top = document.getElementById("form").elements["top"].value;
	var width = document.getElementById("form").elements["width"].value;
	var height = document.getElementById("form").elements["height"].value;
	var color = document.getElementById("form").elements["color"].value;

	var newObject = new fabric.Rect({
		left : parseInt(left),
		top : parseInt(top),
		fill : color,
		width : parseInt(width),
		height : parseInt(height)
	});
	canvas.add(newObject).renderAll().setActiveObject(newObject);
	show(newObject);
}