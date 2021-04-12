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
                        <img src="<?=$addr;?>assets/images/icons/folder.png" alt="folder_image" title="folder_min">
                        <p class="distorted" lang="fr">Fonds d'écran</p>
                        <p class="distorted" lang="en">Wallpapers</p>
                    </div>
                    <div class="folder drag rclick" id="folder_projects" style="left:100px">
                        <img src="<?=$addr;?>assets/images/icons/folder.png" alt="folder_image" title="folder_min">
                        <p class="distorted" lang="fr">Projets</p>
                        <p class="distorted" lang="en">Projects</p>
                    </div>
                    <div class="folder drag rclick" id="folder_bin" style="left:0px">
                        <img src="<?=$addr;?>assets/images/icons/bin.png" alt="recycle_bin_image" title="folder_min">
                        <p class="distorted" lang="fr">Corbeille</p>
                        <p class="distorted" lang="en">Recycle bin</p>
                    </div>
                    <div class="folder drag rclick" id="folder_infos" style="left:0px;top:100px">
                        <img src="<?=$addr;?>assets/images/icons/infos.png" alt="personal_informations_images" title="folder_min">
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
                    <p class="distorted"><span class="str user4 invisible"><i class="far fa-envelope"></i> Contact</span></p>
                </section>
                <!-- END USER'S LOG -->

                <!-- SMALL DNA ANIMATION -->
                <section id="animation_dna" class="window invisible drag animation"> 
                    <img src="<?=$addr;?>assets/images/other/dna.gif" alt="dna animation gif">
                </section>
                <!-- END SMALL DNA ANIMATION -->

                <!-- PIXEL ART ANIMATION Credits : Kenze Wee https://www.behance.net/KenzeWeeHonMing -->
                <section id="animation_corporations" class="window invisible drag animation">
                    <img src="<?=$addr;?>assets/images/other/Kenze Wee - Corporations.gif" alt="Kenze Wee - Corporations animation gif">
                    <p>Credits : Kenze Wee - Corporations</p>
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

                <section id="windows">
                    
                    <!-- OPEN IMAGE WINDOW -->
                    <section class="window drag invisible" id="window_openimg">
                        <div class="window_menu">
                            <ul class="window_menu_bar">
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
                        <?php require 'requires/window_menu.php';?>
                        <div class="window_content">
                        </div>
                    </section>
                    <!-- END RECYCLE BIN WINDOW -->

                    <!-- IMAGES WINDOW -->
                    <section class="window drag invisible" id="window_images">
                        <?php require 'requires/window_menu.php';?>
                        <div class="window_content">
                            <?php 
                                $files=scandir($addr. 'assets/images/backgrounds/', 1);
                                $files=array_diff($files, array('.', '..'));
                                foreach($files as $key=>$value){
                                    if($value!=='bg_stripes.jpg'){
                                        $name=str_replace('.jpg', '', $value);?>
                                        <div class="window_min img rclick file" id="img_<?=$name;?>">
                                            <img src="<?=$addr;?>assets/images/backgrounds/<?=$value;?>" alt="background_image">
                                            <p class="distorted"><?=ucfirst($value);?></p>
                                        </div>
                                    <?php }
                                } ?>
                        </div>
                    </section>
                    <!-- END IMAGES WINDOW -->

                    <!-- PROJECTS WINDOW -->
                    <section class="window drag invisible" id="window_projects">
                        <?php require 'requires/window_menu.php';?>
                        <div class="window_group">
                            <div class="window_content">
                                <div class="window_min img rclick file project_min" id="vonharper">
                                    <img src="<?=$addr;?>assets/images/icons/at.png" alt="website_image">
                                    <p>Von Harper</p>
                                </div>
                                <div class="window_min img rclick file project_min" id="memory">
                                    <img src="<?=$addr;?>assets/images/icons/at.png" alt="website_image">
                                    <p>Memory</p>
                                </div>
                            </div>
                            <aside class="window_infos">
                                <article id="article_vonharper" class="window_infos_article invisible">
                                    <header>
                                        <h1><b>Von Harper</b></h1>
                                        <h3>Vente hologère de luxe</h3>
                                        <h2>HTML / PHP / SCSS / MySQL</h2>
                                        <h4><a href="../boutique/index.php" target="_blank" rel="noopener noreferrer">
                                        <i class="fas fa-external-link-alt"></i>  Visiter le site</a></h4>
                                    </header>
<p>Le site <b><a id="a_vonharper" href="../boutique/index.php" target="_blank" rel="noopener noreferrer">Von Harper</a></b>, entièrement 
reponsive a été réalisé 'from scratch' 
avec <a href="https://adam-fraga.students-laplateforme.io/" target="_blank" rel="noopener noreferrer">@<strong>Adam Fraga</strong></a> 
dans le cadre d'un projet de boutique en ligne. 
Nous avons utilisé deux bibliothèques <strong>PHP</strong> : <em>mPDF</em> pour la création de factures, 
et <em>PHPmailer</em> pour la gestion des mails ( inscription, confirmation d'achat, mot de passe oublié...). Nous avons opté pour une 
architecture pseudo-MVC, une POO et un accès à la base de donnée de type PDO.</p>
                                    <footer>
                                        <a href="https://github.com/theo-petropoulos/boutique">GitHub</a>
                                        <a href="https://adam-fraga.students-laplateforme.io/">Adam Fraga</a>
                                        <a href="https://theo-petropoulos.students-laplateforme.io/">Theo Petropoulos</a>
                                    </footer>
                                </article>
                                <article id="article_memory" class="window_infos_article invisible">
                                    <header>
                                        <h1><b>Memory</b></h1>
                                        <h3>Jeu de cartes</h3>
                                        <h2>HTML / PHP / CSS / MySQL</h2>
                                        <h4><a href="../memory/index.php" target="_blank" rel="noopener noreferrer">
                                        <i class="fas fa-external-link-alt"></i>  Visiter le site</a></h4>
                                    </header>
<p>Le site <b><a id="a_memory" href="../memory/index.php" target="_blank" rel="noopener noreferrer">Memory</a></b>, est un projet 
de début d'année portant sur le jeu de carte éponyme.
Le site marquait le début de la <strong>programmation orientée objet</strong> et l'introduction à l'<strong>algorithmie</strong>. 
Il est entièrement développé sous <b>PHP</b> et possède un accès à la base de données de type <b>mysqli</b>.
                                    <footer>
                                        <a href="https://github.com/theo-petropoulos/memory">GitHub</a>
                                        <a href="https://theo-petropoulos.students-laplateforme.io/">Theo Petropoulos</a>
                                    </footer>
                                </article>
                            </aside>
                        </div>
                    </section>
                    <!-- END PROJECTS WINDOW -->

                    <!-- WINDOW INFOS -->
                    <section class="window drag invisible" id="window_infos">
                        <div class="window_menu">
                            <ul class="window_menu_bar">
                                <div class="window_menu_right">
                                    <li><button class="window_minimize"><i class="far fa-window-minimize"></i></button></li>
                                    <li><button class="window_maximize"><i class="far fa-window-maximize"></i></button></li>
                                    <li><button class="window_close"><i class="fas fa-times"></i></button></li>
                                </div>
                            </ul>
                        </div>
                        <div class="window_content window_content_infos">
                                <div class="window_content_center">
                                    <!-- <div id="about_manager" class="slide1">
                                        <h1>Petropoulos Théo</h1>
                                        <h2>Anciennement Responsable opérationnel (Manager) dans la restauration rapide</h2>
                                    </div> -->
                                    <div id="hamburger" class="slide2">
                                        <span id="hamburger_name">
                                            <h3>Big Ol'Manager Burger</h3>
                                            <h4 lang="fr">• Garniture •</h4>
                                            <h4 lang="en">• Garnish •</h4>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_top.png' alt="Hamburger top">
                                            <p lang="fr">Pain d'<b>autonomie</b> brioché et ses graines de <b>responsabilité</b></p>
                                            <p lang="en"><b>Autonomous</b> bun with its <b>responsability</b> seeds</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_pickles.png' alt="Pickles">
                                            <p lang="fr">Couple de cornichons aigre-<b>curieux</b> "<b>écoute</b>" et "<b>communication</b>"</p>
                                            <p lang="en">Pair of pickles <b>curious</b> & sour "<b>listening</b>" and "<b>communication</b>"</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_tomato.png' alt="Tomato">
                                            <p lang="fr"><b>Concentration</b> de tomate en tranche 'La <b>Créative</b>'</p>
                                            <p lang="en">Slice of tomato <b>concentration</b> 'The <b>Creative</b> One'</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_lettuce.png' alt="Lettuce">
                                            <p lang="fr">Salade de <b>leadership</b> & <b>esprit d'équipe</b></p>
                                            <p lang="en">Salad mix of <b>leadership</b> & <b>team spirit</b></p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_cheddar.png' alt="Cheese">
                                            <p lang="fr">Fromage <b>rigoureux</b> fumé au bois de <b>confiance</b> fondu</p>
                                            <p lang="en"><b>Confident</b> wood smoked <b>rigorous</b> melted cheese</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_steak.png' alt="Burger patty">
                                            <p lang="fr">Hâché 230g 'Le <b>Résolveur de problèmes</b>' et sa cuisson <b>adaptative</b></p>
                                            <p lang="en">'<b>Problem solver</b>' 8oz patty and its <b>adaptative</b> cooking</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_sauce.png' alt="Sauces">
                                            <p lang="fr">Duo de sauces <b>gestion</b> '<b>stress</b>' et '<b>temps</b>'</p>
                                            <p lang="en">Couple of '<b>handling</b>' sauces '<b>stress</b>' and '<b>time</b>'</p>
                                        </span>
                                        <span class="garnish_holder">
                                            <img src='<?=$addr;?>assets/images/other/ham_bottom.png' alt="Hamburger bottom">
                                            <p lang="fr">Pain d'<b>équipe</b> et son toastage bilatéral '<b>délégation</b>'' & '<b>motivation</b>'</p>
                                            <p lang="en"><b>Teamed</b> bottom bun and its bilateral toasting '<b>delegate</b>'' & '<b>motivate</b>'</p>
                                        </span>
                                    </div>
                                </div>
                        </div>
                    </section>
                    <!-- END WINDOW INFOS -->

                </section>

                <!-- FOOTER -->
                <?php require 'requires/footer.php'; ?>
                <!-- END FOOTER -->
            </div>
        </main>
    </body>
</html>