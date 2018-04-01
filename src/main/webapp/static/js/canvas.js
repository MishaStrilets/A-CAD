var canvas = activeObject = '';

$(document).ready(function() {
	canvas = new fabric.Canvas('canvas', {});
	canvas.setWidth(1300);
	canvas.setHeight(500);
});

function addRectangle() {
	var rectangle = new fabric.Rect({
		left : 50,
		top : 50,
		fill : 'red',
		width : 50,
		height : 50
	});
	canvas.add(rectangle).renderAll().setActiveObject(rectangle);
}

function addCircle() {
	var circle = new fabric.Circle({
		left : 50,
		top : 50,
		radius : 25,
		fill : 'green',
		stroke : 'green'
	});
	canvas.add(circle).renderAll().setActiveObject(circle);
}

function addTriangle() {
	var triangle = new fabric.Triangle({
		left : 50,
		top : 50,
		width : 50,
		height : 50,
		fill : 'blue'
	});
	canvas.add(triangle).renderAll().setActiveObject(triangle);
}

function clearAll() {
	canvas.clear().renderAll();
}
