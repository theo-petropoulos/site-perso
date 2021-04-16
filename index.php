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
        <meta name="google-site-verification" content="UsxA6IqAYpwCIVkU1Bg3033meHyV5LG7O3BkpDieOow" />
        <meta property="og:title" content="Petropoulos Théo - Développeur Web">
        <meta property="og:description" content="Petropoulos Théo, développeur web & web mobile à Marseille. En recherche d'alternance.">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://theo-petropoulos.students-laplateforme.io/">
        <meta http-equiv="expires" content="86400">
        <meta name="description" content="Petropoulos Théo, développeur web & web mobile à Marseille. En recherche d'alternance.">
        <meta name="keywords" content="Petropoulos, Théo, Theo, Développeur, Web, Developer, Marseille, Alternance, PACA, Javascript, Jquery, JS, PHP, HTML, CSS, AJAX, AJAJ, Développment, Plateforme, Laplateforme">
        <meta property="og:image" content="assets/images/other/og.png">
        <link rel="stylesheet" href="<?=$addr;?>css/theo.petropoulos.css?v=<?php echo time(); ?>">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Gupter&family=Lexend:wght@300&family=Yusei+Magic&display=swap" rel="stylesheet"> 
        <link id="linkicon" rel="icon" type="image/png" href="assets/images/icons/logo1.png">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script type="text/javascript" src="node_modules/maphilight/jquery.maphilight.min.js"></script>
        <script src="<?=$addr;?>scripts/functions.js"></script>
        <script src="<?=$addr;?>scripts/effects.js"></script>
        <script src="<?=$addr;?>scripts/leftclick.js"></script>
        <script src="<?=$addr;?>scripts/rightclick.js"></script>
        <script src="<?=$addr;?>scripts/musicplayer.js"></script>
        <script src="<?=$addr;?>scripts/window.js"></script>
        <script src="<?=$addr;?>scripts/userinput.js"></script>
        <script src="https://kit.fontawesome.com/9ddb75d515.js" crossorigin="anonymous"></script>
        <title>Petropoulos Théo - Web developer</title>
    </head>

    <body id="body_index">
        <main id="screen">
            <div id="screen_off" class="visible">
                <form method="post" action="index.php" id="button_power">
                    <input type="hidden" id="connect" name="connect" value="go">
                    <button id="switch_power" type="submit"><i class="fas fa-power-off"></i></button>
                </form>
            </div>
            <!-- <div id="screen_questions" class="invisible">
            
            </div> -->
            <div id="screen_on" class="invisible">
                <div id="screen_flicker" class="invisible"></div>
                <div id="screen_distorsion" class="invisible"></div>

                <section id="folder_section" class="invisible">
                    <div class="folder drag rclick" id="folder_images" style="top:100px; left:100px">
                        <img src="<?=$addr;?>assets/images/icons/folder_green.png" alt="folder_image" title="folder_min">
                        <p class="distorted" lang="fr">Fonds d'écran</p>
                        <p class="distorted" lang="en">Wallpapers</p>
                    </div>
                    <div class="folder drag rclick" id="folder_projects" style="left:100px">
                        <img src="<?=$addr;?>assets/images/icons/folder_green.png" alt="folder_image" title="folder_min">
                        <p class="distorted" lang="fr">Projets</p>
                        <p class="distorted" lang="en">Projects</p>
                    </div>
                    <div class="folder drag rclick" id="folder_bin" style="left:0px">
                        <img src="<?=$addr;?>assets/images/icons/bin_green.png" alt="recycle_bin_image" title="folder_min">
                        <p class="distorted" lang="fr">Corbeille</p>
                        <p class="distorted" lang="en">Recycle bin</p>
                    </div>
                    <div class="folder drag rclick" id="folder_infos" style="left:0px;top:100px">
                        <img src="<?=$addr;?>assets/images/icons/infos_green.png" alt="personal_informations_images" title="folder_min">
                        <p class="distorted" lang="fr">Informations personnelles</p>
                        <p class="distorted" lang="en">Personal informations</p>
                    </div>
                </section>
                
                <!-- USER'S LOG -->
                <section id="user" class="invisible">
                    <div class="distorted" lang="fr">Utilisateur : <h1 style="display:inline" class="str user1 invisible" lang="fr">Petropoulos Théo</h1></div>
                    <div class="distorted" lang="en">User : <h1 style="display:inline" class="str user1 invisible" lang="en">Petropoulos Theo</h1></div>
                    <div class="distorted" lang="fr">Statut : <h2 style="display:inline" class="str user2 invisible" lang="fr">Développeur web</h2></div>
                    <div class="distorted" lang="en">Status : <h2 style="display:inline" class="str user2 invisible" lang="en">Web developer</h2></div>
                    <p class="distorted" lang="fr">Adresse : <span class="str user3 invisible" lang="fr">176.173.216.180</span></p>
                    <p class="distorted" lang="en">Adress : <span class="str user3 invisible" lang="en">176.173.216.180</span></p>
                    <details>
                        <summary><p class="distorted"><span class="str user4 invisible"><i class="far fa-envelope"></i> Contact</span></p></summary>
                        <p class="distorted"><i class="fas fa-phone"></i> 06.49.93.18.58</p>
                        <p class="distorted"><i class="fas fa-at"></i> <a id="amail" href="mailto:mpetropoulos.theo@gmail.com">mpetropoulos.theo@gmail.com</a></p>
                        <p class="distorted" lang="fr" id="copy_mail">Copier l'adresse mail</p>
                        <p class="distorted" lang="en" id="copy_mail">Copy mail adress</p>
                    </details>
                </section>
                <!-- END USER'S LOG -->

                <!-- TIPS MASCOT -->
                <section id="tips_mascot" class="invisible">
                    
                </section>
                <!-- END TIPS MASCOT -->

                <!-- SCREEN TOGGLE EFFECTS -->
                <section id="screen_toggle" class="invisible">
                    <img id="effects_off" class="effects_switch" src="assets/images/other/gloom-e.png" alt="screen mascot">
                </section>
                <!-- END SCREEN TOGGLE EFFECTS -->

                <!-- PIXEL ART ANIMATION Credits : Kenze Wee https://www.behance.net/KenzeWeeHonMing -->
                <section id="animation_corporations" class="window invisible drag animation">
                    <p lang="fr" class="distorted post">e-Carte Postale</p>
                    <p lang="en" class="distorted post">e-Postcard</p>
                    <img src="<?=$addr;?>assets/images/other/Kenze Wee - Corporations.gif" alt="Kenze Wee - Corporations animation gif">
                    <a href="https://www.behance.net/KenzeWeeHonMing"><p>Kenze Wee - Corporations</p></a>
                    <button id="close_corporations"><i class="fas fa-times"></i></button>
                </section>
                <!-- END PIXEL ART ANIMATION -->

                <!-- MUSIC PLAYER -->
                <section id="music_player" class="invisible drag">
                    <div id="music_title"><p class="distorted" style="pointer-events:none"></p></div>
                    <div id="music_controls">
                        <button id="music_prev"><i class="fas fa-backward"></i></button>
                        <button id="music_play"><i class="fas fa-play"></i></button>
                        <button id="music_next"><i class="fas fa-forward"></i></button>
                    </div>
                    <input type="range" id="music_volume" value=25>
                </section>
                <!-- END MUSIC PLAYER -->

                <?php require 'requires/windows.php'; ?>

                <!-- FOOTER -->
                <?php require 'requires/footer.php'; ?>
                <!-- END FOOTER -->
            </div>
        </main>
    </body>
</html>