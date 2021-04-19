<?php
    $addr='';
    //$root = $_SERVER['DOCUMENT_ROOT'] . "/theo.petropoulos/";
?>

<!DOCTYPE html>

<html prefix="og: https://ogp.me/ns#" xmlns="http://www.w3.org/1999/xhtml">

    <?php require 'requires/head.php';?>

    <body id="body_index">
        <main id="screen">
            <!-- ASK USER TO ROTATE HIS DEVICE -->
            <div id="rotate_device"></div>

            <!-- WHEN THE POWER IS OFF -->
            <div id="screen_off" class="visible">
                <form method="post" action="index.php" id="button_power">
                    <input type="hidden" id="connect" name="connect" value="go">
                    <button id="switch_power" type="submit"><i class="fas fa-power-off"></i></button>
                </form>
            </div>
            
            <!-- WHEN THE POWER IS ON -->
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
                        <img src="<?=$addr;?>assets/images/icons/infos_green.png" alt="personal_informations_images" title="infos_min">
                        <p class="distorted" lang="fr">Informations personnelles</p>
                        <p class="distorted" lang="en">Personal informations</p>
                    </div>
                    <div class="folder drag rclick" id="folder_credits" style="left:0px;top:200px">
                        <img src="<?=$addr;?>assets/images/icons/txt_green.png" alt="textfile_images" title="text_min">
                        <p class="distorted" lang="fr">Crédits.txt</p>
                        <p class="distorted" lang="en">Credits.txt</p>
                    </div>
                </section>

                <!-- WARNING MESSAGE -->
                <section id="warning_message">
                    <p lang="fr">Ce site n'est pas optimisé pour une utilisation mobile. Certaines fonctionalités ne seront pas disponibles.</p>
                    <p lang="en">This website isn't optimized for mobile users. Some functionalities won't be available.</p>
                    <button id="close_warning">X</button>
                </section>
                <!-- END WARNING MESSAGE -->
                
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
                    <img id="clip_e" class="" src="assets/images/other/clip-e.gif" alt="tips mascot">
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