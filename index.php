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

                <!-- FOLDERS SECTION -->
                <?php require 'requires/folders.php';?>
                <!-- END FOLDERS SECTION -->

                <!-- WARNING MESSAGE -->
                <section id="warning_message">
                    <p lang="fr">Ce site n'est pas optimisé pour une utilisation mobile. Certaines fonctionalités ne seront pas disponibles.</p>
                    <p lang="en">This website isn't optimized for mobile users. Some functionalities won't be available.</p>
                    <button id="close_warning">X</button>
                </section>
                <!-- END WARNING MESSAGE -->
                
                <!-- USER'S LOG -->
                <?php require 'requires/user.php';?>
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