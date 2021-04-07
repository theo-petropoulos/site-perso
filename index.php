<?php
    $addr='';
    //$root = $_SERVER['DOCUMENT_ROOT'] . "/theo.petropoulos/";
?>

<!DOCTYPE html>

<html prefix="og: https://ogp.me/ns#" xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <meta name="author" content="Petropoulos Théo">
        <meta name="robots" content="index">
        <meta property="og:title" content="Petropoulos Théo - Développeur Web">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://theo-petropoulos.students-laplateforme.io/">
        <meta http-equiv="expires" content="86400">
        <meta name="description" content="Petropoulos Théo, développeur web & web mobile à Marseille. En recherche d'alternance.">
        <meta name="keywords" content="Petropoulos, Théo, Développeur, Web, Developer, Marseille, Alternance, Javascript, Jquery, JS, PHP, HTML, CSS">
        <meta property="og:image" content="assets/images/other/og.png">
        <link rel="stylesheet" href="<?=$addr;?>css/theo.petropoulos.css?v=<?php echo time(); ?>">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"> 
        <link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo1.png">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="<?=$addr;?>scripts/functions.js"></script>
        <script src="<?=$addr;?>scripts/effects.js"></script>
        <script src="<?=$addr;?>scripts/leftclick.js"></script>
        <script src="<?=$addr;?>scripts/rightclick.js"></script>
        <script src="<?=$addr;?>scripts/musicplayer.js"></script>
        <script src="<?=$addr;?>scripts/window.js"></script>
        <script src="https://kit.fontawesome.com/9ddb75d515.js" crossorigin="anonymous"></script>
        <title>Petropoulos Théo - Développeur Web</title>
    </head>

    <body id="body_index">
        <main id="screen">
            <div id="screen_off" class="visible">
                <form method="post" action="index.php" id="button_power">
                    <input type="hidden" id="connect" name="connect" value="go">
                    <button id="switch_power" type="submit"><i class="fas fa-power-off"></i></button>
                </form>
            </div>
            <div id="screen_on" class="invisible">
                <div id="screen_flicker" class="invisible"></div>
                <div id="screen_distorsion" class="invisible"></div>

                <section id="folder_section" class="invisible">
                    <div class="folder drag rclick" id="folder_images" style="left:100px">
                        <img src="<?=$addr;?>assets/images/icons/folder.png" title="folder_min">
                        <p class="distorted" lang="fr">Images</p>
                        <p class="distorted" lang="en">Pictures</p>
                    </div>
                    <div class="folder drag rclick" id="folder_songs" style="left:200px">
                        <img src="<?=$addr;?>assets/images/icons/folder.png" title="folder_min">
                        <p class="distorted" lang="fr">Musiques</p>
                        <p class="distorted" lang="en">Musics</p>
                    </div>
                    <div class="folder drag rclick" id="folder_projects" style="left:300px">
                        <img src="<?=$addr;?>assets/images/icons/folder.png" title="folder_min">
                        <p class="distorted" lang="fr">Projets</p>
                        <p class="distorted" lang="en">Projects</p>
                    </div>
                    <div class="folder drag rclick" id="folder_bin" style="left:0px">
                        <img src="<?=$addr;?>assets/images/icons/bin.png" title="folder_min">
                        <p class="distorted" lang="fr">Corbeille</p>
                        <p class="distorted" lang="en">Recycle bin</p>
                    </div>
                    <div class="folder drag rclick" id="file_infos" style="left:0px;top:100px">
                        <img src="<?=$addr;?>assets/images/icons/infos.png" title="folder_min">
                        <p class="distorted" lang="fr">Informations personnelles</p>
                        <p class="distorted" lang="en">Personal informations</p>
                    </div>
                </section>
                
                <!-- USER'S LOG -->
                <section id="user" class="invisible">
                    <p class="distorted" lang="fr">Utilisateur : <span class="str user1 invisible" lang="fr">Petropoulos Théo</span></p>
                    <p class="distorted" lang="en">User : <span class="str user1 invisible" lang="en">Petropoulos Theo</span></p>
                    <p class="distorted" lang="fr">Statut : <span class="str user2 invisible" lang="fr">Développeur web</span></p>
                    <p class="distorted" lang="en">Status : <span class="str user2 invisible" lang="en">Web developer</span></p>
                    <p class="distorted" lang="fr">Adresse : <span class="str user3 invisible" lang="fr">176.173.216.180</span></p>
                    <p class="distorted" lang="en">Adress : <span class="str user3 invisible" lang="en">176.173.216.180</span></p>
                    <p class="distorted"><span class="str user4 invisible"><i class="far fa-envelope"></i> Contact</span></p>
                </section>
                <!-- END USER'S LOG -->

                <!-- MUSIC PLAYER -->
                <section id="music_player" class="invisible drag" style="left:70%;top:30%">
                    <div id="music_title"><p class="distorted" style="pointer-events:none"></p></div>
                    <div id="music_controls">
                        <button id="music_prev"><i class="fas fa-backward"></i></button>
                        <button id="music_play"><i class="fas fa-play"></i></button>
                        <button id="music_next"><i class="fas fa-forward"></i></button>
                    </div>
                    <input type="range" id="music_volume" value=25>
                </section>
                <!-- END MUSIC PLAYER -->

                <section id="windows">
                    
                    <!-- OPEN IMAGE WINDOW -->
                    <section class="window drag invisible" id="window_openimg">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_maximize"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                        <div class="window_content">
                        </div>
                    </section>
                    <!-- END OPEN IMAGE WINDOW -->

                    <!-- RECYCLE BIN WINDOW -->
                    <section class="window drag invisible" id="window_bin">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_left">
                                    <li>
                                        <button class="window_file">
                                            <span lang="fr">Fichier</span>
                                            <span lang="en">File</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_edit">
                                            <span lang="fr">Édition</span>
                                            <span lang="en">Edit</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_view">
                                            <span lang="fr">Affichage</span>
                                            <span lang="en">View</span>
                                        </button>
                                    </li>
                                </div>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_maximize"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                        <div class="window_content">
                        </div>
                    </section>
                    <!-- END RECYCLE BIN WINDOW -->

                    <!-- IMAGES WINDOW -->
                    <section class="window drag invisible" id="window_images">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_left">
                                    <li>
                                        <button class="window_file">
                                            <span lang="fr">Fichier</span>
                                            <span lang="en">File</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_edit">
                                            <span lang="fr">Édition</span>
                                            <span lang="en">Edit</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_view">
                                            <span lang="fr">Affichage</span>
                                            <span lang="en">View</span>
                                        </button>
                                        <div id="window_view_menu">
                                            <ul>
                                                <li>
                                                    <span lang="fr">Liste</span>
                                                    <span lang="en">List</span>
                                                </li>
                                                <li>
                                                    <span lang="fr">Icones</span>
                                                    <span lang="fr">Icons</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </div>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_maximize"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                        <div class="window_content">
                            <?php 
                                $files=scandir($addr. 'assets/images/backgrounds/', 1);
                                $files=array_diff($files, array('.', '..'));
                                foreach($files as $key=>$value){
                                    if($value!=='bg_stripes.jpg'){
                                        $name=str_replace('.jpg', '', $value);?>
                                        <div class="window_min img rclick file" id="img_<?=$name;?>">
                                            <img src="<?=$addr;?>assets/images/backgrounds/<?=$value;?>">
                                            <p class="distorted"><?=ucfirst($value);?></p>
                                        </div>
                                    <?php }
                                } ?>
                        </div>
                    </section>
                    <!-- END IMAGES WINDOW -->

                    <!-- PROJECTS WINDOW -->
                    <section class="window drag invisible" id="window_projects">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_left">
                                    <li>
                                        <button class="window_file">
                                            <span lang="fr">Fichier</span>
                                            <span lang="en">File</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_edit">
                                            <span lang="fr">Édition</span>
                                            <span lang="en">Edit</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="window_view">
                                            <span lang="fr">Affichage</span>
                                            <span lang="en">View</span>
                                        </button>
                                    </li>
                                </div>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_expand"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <!-- END PROJECTS WINDOW -->

                    <!-- WINDOW ??? -->
                    <section class="window drag invisible" id="window_musics">
                    </section>
                    <!-- END WINDOW ??? -->

                </section>

                <!-- FOOTER -->
                <footer id="task_bar" class="invisible">
                    <!-- START MENU -->
                    <div id="menu">
                        <button id="start_btn">
                            <p lang="fr">Démarrer</p>
                            <p lang="en">Start</p>
                        </button>
                        <div id="start_menu" class="invisible">
                            <ul>
                                <li>Menu Item 1</li>
                                <li>Menu Item 2</li>
                                <li>Menu Item 3</li>
                                <li>Menu Item 4</li>
                                <li>Menu Item 5</li>
                                <li>Menu Item 6</li>
                                <li>Menu Item 7</li>
                            </ul>
                        </div>
                    </div>
                    <!-- END START MENU -->

                    <!-- WINDOWS MINIATURES -->
                    <div id="task_windows">
                        <ul></ul>
                    </div>
                    <!-- END WINDOWS MINIATURES -->

                    <!-- CORNER RIGHT -->
                    <div id="task_corner">
                        <div id="task_lang">
                            <button id="switch_lang">
                                <p class="distorted" lang="fr">en</p>
                                <p class="distorted" lang="en">fr</p>
                            </button>
                        </div>
                        <span lang="fr"></span>
                        <span lang="en"></span>
                    </div>
                    <!-- END CORNER RIGHT -->
                </footer>
                <!-- END FOOTER -->
            </div>
        </main>
    </body>
</html>