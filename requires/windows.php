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
        <?php require 'window_menu.php';?>
        <div class="window_content">
        </div>
    </section>
    <!-- END RECYCLE BIN WINDOW -->

    <!-- IMAGES WINDOW -->
    <section class="window drag invisible" id="window_images">
        <?php require 'window_menu.php';?>
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
        <?php require 'window_menu.php';?>
        <div class="window_group">
            <div class="window_content">
                <div class="window_min img rclick file project_min" id="vonharper">
                    <img src="<?=$addr;?>assets/images/icons/at_green.png" alt="website_image">
                    <p>Von Harper</p>
                </div>
                <div class="window_min img rclick file project_min" id="memory">
                    <img src="<?=$addr;?>assets/images/icons/at_green.png" alt="website_image">
                    <p>Memory</p>
                </div>
            </div>
            <aside class="window_infos">
                <article id="article_vonharper" class="window_infos_article invisible">
                    <header>
                        <h1><b>Von Harper</b></h1>
                        <h3>Vente hologère de luxe</h3>
                        <h2>HTML / PHP / SCSS / MySQL</h2>
                        <h4><a href="../boutique/index.php" class="example" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt example"></i>  Visiter le site</a></h4>
                    </header>
<p>Le site <b><a id="a_vonharper" href="../boutique/index.php" class="example" target="_blank" rel="noopener noreferrer">Von Harper</a></b>, entièrement 
reponsive a été réalisé 'from scratch' 
avec <a href="https://adam-fraga.students-laplateforme.io/" class="example" target="_blank" rel="noopener noreferrer">@<strong class="example">Adam Fraga</strong></a> 
dans le cadre d'un projet de boutique en ligne. 
Nous avons utilisé deux bibliothèques <strong>PHP</strong> : <em>mPDF</em> pour la création de factures, 
et <em>PHPmailer</em> pour la gestion des mails ( inscription, confirmation d'achat, mot de passe oublié...). Nous avons opté pour une 
architecture pseudo-MVC, une POO et un accès à la base de donnée de type PDO.</p>
                    <footer>
                        <a href="https://github.com/theo-petropoulos/boutique" class="example">GitHub</a>
                        <a href="https://adam-fraga.students-laplateforme.io/" class="example">Adam Fraga</a>
                        <a href="https://theo-petropoulos.students-laplateforme.io/" class="example">Theo Petropoulos</a>
                    </footer>
                </article>
                <article id="article_memory" class="window_infos_article invisible">
                    <header>
                        <h1><b>Memory</b></h1>
                        <h3>Jeu de cartes</h3>
                        <h2>HTML / PHP / CSS / MySQL</h2>
                        <h4><a href="../memory/index.php" class="example" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt example"></i>  Visiter le site</a></h4>
                    </header>
<p>Le site <b><a id="a_memory" href="../memory/index.php" class="example" target="_blank" rel="noopener noreferrer">Memory</a></b>, est un projet 
de début d'année portant sur le jeu de carte éponyme.
Le site marquait le début de la <strong>programmation orientée objet</strong> et l'introduction à l'<strong>algorithmie</strong>. 
Il est entièrement développé sous <b>PHP</b> et possède un accès à la base de données de type <b>mysqli</b>.
                    <footer>
                        <a href="https://github.com/theo-petropoulos/memory" class="example">GitHub</a>
                        <a href="https://theo-petropoulos.students-laplateforme.io/" class="example">Theo Petropoulos</a>
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
                    <div id="animation_div">
                        <img id="animation_room" src="assets/images/other/animation.gif" usemap="#animation-map">
                        <map name="animation-map">
                            <area id="poster_area" class="area" target="_blank" alt="anim_poster" title="anim_poster" href="" coords="124,30,124,197,238,219,238,48" shape="poly">
                        </map>
                    </div>
                    <!-- <div id="hamburger" class="slide2">
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
                    </div> -->
                </div> 
        </div>
    </section>
    <!-- END WINDOW INFOS -->

</section>