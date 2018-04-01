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
<link href="<c:url value='/static/css/style.css' />" rel="stylesheet"></link>

<script type="text/javascript" src="webjars/jquery/2.2.4/jquery.min.js"></script>
<script type="text/javascript"
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script type="text/javascript"
	src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.5.0/fabric.min.js"></script>
<script type="text/javascript" src="/static/js/canvas.js"></script>
</head>

<body>
	<button type="button" class="btn btn-danger" onclick="addRectangle()">Add
		rectangle</button>
	<button type="button" class="btn btn-success" onclick="addCircle()">Add
		circle</button>
	<button type="button" class="btn btn-primary" onclick="addTriangle()">Add
		triangle</button>
	<button type="button" class="btn btn-basic" onclick="clearAll()">Clear
		all</button>
	<hr />
	<canvas id="canvas"></canvas>
</body>
</html>