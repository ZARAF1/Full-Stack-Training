// html doc

<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="/styles.css">
    <title>Learn ReactJS</title>
</head>

<body>
<span id="container"></span>
<script src="https://content.codecademy.com/courses/React/react-course-bundle.min.js"></script>
<script src="/app.compiled.js"></script>
</body>

</html>

// js DOC
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));