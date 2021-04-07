<?php
    $files=scandir('../assets/audio/musics/', 1);
    if($files=array_diff($files, array('.', '..'))) echo json_encode($files, JSON_PRETTY_PRINT);
    else die('Error');
