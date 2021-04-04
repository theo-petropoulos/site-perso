<?php
    $addr='/theo.petropoulos/';
    $root = $_SERVER['DOCUMENT_ROOT'] . "/theo.petropoulos/";
?>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <link rel="stylesheet" href="<?=$addr;?>css/theo.petropoulos.css?v=<?php echo time(); ?>">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet"> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="<?=$addr;?>scripts/functions.js"></script>
        <script src="<?=$addr;?>scripts/effects.js"></script>
        <script src="<?=$addr;?>scripts/leftclick.js"></script>
        <script src="<?=$addr;?>scripts/rightclick.js"></script>
        <script src="<?=$addr;?>scripts/musicplayer.js"></script>
        <script src="<?=$addr;?>scripts/window.js"></script>
        <script src="https://kit.fontawesome.com/9ddb75d515.js" crossorigin="anonymous"></script>
        <title></title>
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
                        <img src="<?=$addr;?>assets/images/folder.png" title="folder_min">
                        <p class="distorted">Images</p>
                    </div>
                    <div class="folder drag rclick" id="folder_songs" style="left:200px">
                        <img src="<?=$addr;?>assets/images/folder.png" title="folder_min">
                        <p class="distorted">Musiques</p>
                    </div>
                    <div class="folder drag rclick" id="folder_projects" style="left:300px">
                        <img src="<?=$addr;?>assets/images/folder.png" title="folder_min">
                        <p class="distorted">Projets</p>
                    </div>
                </section>

                <section id="user" class="invisible">
                    <p class="distorted" lang="fr">Utilisateur : <span class="str user1 invisible">Petropoulos Théo</span></p>
                    <p class="distorted" lang="fr">Statut : <span class="str user2 invisible">Développeur web</span></p>
                    <p class="distorted" lang="fr">Adresse : <span class="str user3 invisible">176.173.216.180</span></p>
                    <p class="distorted" lang="fr"><span class="str user4 invisible"><i class="far fa-envelope"></i> Contact</span></p>
                </section>

                <section id="music_player" class="invisible drag" style="left:70%;top:30%">
                    <div id="music_title"><p class="distorted" style="pointer-events:none"></p></div>
                    <div id="music_controls">
                        <button id="music_prev"><i class="fas fa-backward"></i></button>
                        <button id="music_play"><i class="fas fa-play"></i></button>
                        <button id="music_next"><i class="fas fa-forward"></i></button>
                    </div>
                    <input type="range" id="music_volume" value=25>
                </section>

                <section id="windows">
                    <section class="window drag invisible" id="window_images">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_left">
                                    <li><button class="window_file">Fichier</button></li>
                                    <li><button class="window_edit">Edition</button></li>
                                    <li><button class="window_view">Affichage</button></li>
                                </div>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_maximize"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                        <div class="window_content">
                            <div class="window_min img rclick" id="img_lake">
                                <img src="<?=$addr;?>assets/images/lake.jpg">
                                <p>Lac</p>
                            </div>
                            <div class="window_min img rclick" id="img_nsa">
                                <img src="<?=$addr;?>assets/images/nsa.jpg">
                                <p>NSA</p>
                            </div>
                            <div class="window_min img rclick" id="img_neon"">
                                <img src="<?=$addr;?>assets/images/neon.jpg">
                                <p>Neon City</p>
                            </div>
                        </div>
                    </section>
                    <section class="window drag invisible" id="window_projects">
                        <div class="window_menu">
                            <ul>
                                <div class="window_menu_left">
                                    <li><button class="window_file">Fichier</button></li>
                                    <li><button class="window_edit">Edition</button></li>
                                    <li><button class="window_view">Affichage</button></li>
                                </div>
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_expand"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section class="window drag invisible" id="window_musics">
                    </section>
                </section>

                <footer id="task_bar" class="invisible">
                    <div id="menu">
                        <button id="start_btn">
                            <p lang="fr">Démarrer</p>
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
                    <div id="task_windows">
                        <ul></ul>
                    </div>
                    <div id="task_corner"></div>
                </footer>
            </div>
        </main>
    </body>
</html>