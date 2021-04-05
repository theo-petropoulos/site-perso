<?php
    $files=scandir('assets/images/', 1);
    echo json_encode($files);
?>

<!doctype html>

<html>
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="test.js"></script>
    </head>
</html>