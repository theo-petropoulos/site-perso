<!DOCTYPE html>

<style>
    body{
        height:100vh;
        width:100vw;
        background:black;
    }
    body:hover #off{
        opacity:0;
    }
    body:hover #on{
        opacity:1;
    }
    #off{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:radial-gradient(circle, rgba(40,57,20,1) 0%, rgba(20,29,9,1) 10%, rgba(0,0,0,1) 45%);
        transition:all 0.5s;
    }

    #on{
        position:absolute;
        top:0;
        left:0;
        display:flex;
        flex-flow:column;
        width:100%;
        height:100%;
        background:radial-gradient(circle, rgba(40,57,20,0.95) 0%, rgba(20,29,9,0.97) 80%, rgba(0,0,0,0.99) 100%), url('/perso/assets/bg_stripes.jpg');
        opacity:0;
        transition:all 0.9s 0.9s;
    }
</style>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/perso/css/perso.css?v=<?php echo time(); ?>">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="/perso/scripts/bg_change.js"></script>
        <script src="https://kit.fontawesome.com/9ddb75d515.js" crossorigin="anonymous"></script>
        <title>Bonjour Monde</title>
    </head>

    <body>
        <div id="off"></div>
        <div id="on"></div>
    </body>
</html>