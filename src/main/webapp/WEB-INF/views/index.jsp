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

<script type="text/javascript" src="webjars/jquery/2.2.4/jquery.min.js"></script>
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.5.0/fabric.min.js"></script>
<script type="text/javascript" src="/static/js/canvas.js"></script>
<link href="<c:url value='/static/css/style.css' />" rel="stylesheet"></link>
</head>

<body>
	<button type="button" class="btn btn-primary" onclick="addObject()">Add
		object</button>
	<button type="button" class="btn btn-danger" onclick="clearAll()">Clear
		all objects</button>
	<button type="button" class="btn btn-basic" onclick="showAll()">Show
		all objects</button>
	<div class="row">
		<div class="col-sm-9">
			<canvas id="canvas"></canvas>
		</div>
		<div class="col-sm-3">
			<form id="form">
				<br> <label for="left">Left</label> <br> <input
					type="text" name="left"> <br> <label for="top">Top</label>
				<br> <input type="text" name="top"> <br> <label
					for="width">Width object</label> <br> <input type="text"
					name="width"> <br> <label for="height">Height
					object</label> <br> <input type="text" name="height"> <br>
				<label for="color">Color object</label> <br> <input type="text"
					name="color">
			</form>
			<button type="button" class="btn btn-success" onclick="saveObject()">Save
				object</button>
		</div>
	</div>
</body>
</html>