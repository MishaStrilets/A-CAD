<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>A-CAD</title>

<link
	href="http://cdn.jsdelivr.net/webjars/bootstrap/3.3.4/css/bootstrap.min.css"
	href="@{/webjars/bootstrap/3.3.4/css/bootstrap.min.css}"
	rel="stylesheet" media="screen" />

<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.5.0/fabric.min.js"></script>
<script type="text/javascript" src="/static/js/canvas.js"></script>
<script type="text/javascript" src="/static/js/post.js"></script>
<script type="text/javascript" src="/static/js/get.js"></script>
<link href="<c:url value='/static/css/style.css' />" rel="stylesheet"></link>
</head>

<body>
	<button type="button" class="btn btn-primary" onclick="addShape()">Add
		shape</button>
	<button type="button" class="btn btn-danger" onclick="clearAll()">Clear</button>
	<button id="get" type="button" class="btn btn-basic"
		onclick="showAll()">Show all shapes</button>
	<div class="row">
		<div class="col-sm-9">
			<canvas id="canvas"></canvas>
		</div>
		<div class="col-sm-3">
			<form id="form">
				<input type="hidden" name="id" id="id"> <label for="left">Left</label>
				<br> <input type="text" name="left" id="left"
					onchange="showShape()"> <br> <label for="top">Top</label>
				<br> <input type="text" name="top" id="top"
					onchange="showShape()"> <br> <label for="width">Width
					of shape</label> <br> <input type="text" name="width" id="width"
					onchange="showShape()"> <br> <label for="height">Height
					of shape</label> <br> <input type="text" name="height" id="height"
					onchange="showShape()"> <br> <label for="color">Color
					of shape</label> <br> <input type="text" name="color" id="color"
					onchange="showShape()"> <br> <label for="angle">Angle
					of shape</label> <br> <input type="text" name="angle" id="angle"
					onchange="showShape()"> <br>
				<button type="submit" id="save" class="btn btn-success">Save
					shape</button>
			</form>
		</div>
	</div>
</body>
</html>