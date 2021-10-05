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

    <!-- RECYCLE BIN WINDOW -->
    <section class="window drag invisible" id="window_credits">
        <?php require 'window_menu.php';?>
        <textarea id="window_credits_textarea" spellcheck="false">
        </textarea>
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
                <div class="window_min img rclick file project_min" id="clock">
                    <img src="<?=$addr;?>assets/images/icons/at_green.png" alt="website_image">
                    <p>Clock</p>
                </div>
            </div>
            <aside class="window_articles">
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
                <article id="article_clock" class="window_infos_article invisible">
                    <header>
                        <h1><b>Ceci est une horloge</b></h1>
                        <h3>Mais pas que.</h3>
                        <h2>HTML / SCSS / jQuery</h2>
                        <h4><a href="../thisisaclock/index.php" class="example" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt example"></i>  Visiter le site</a></h4>
                    </header>
<p>Le site <b><a id="a_vonharper" href="../thisisaclock/index.php" class="example" target="_blank" rel="noopener noreferrer">Ceci est une horloge</a></b>, est 
un projet d'horloge multi-fonctionnelle en ligne.<br>
Le site utilise le plugin <a href="https://github.com/davidjbradshaw/image-map-resizer" rel="noopener noreferrer" class="example">Image-Map-Resizer</a> 
pour adapter les éléments clickables à la taille de l'écran.</p>
                    <footer>
                        <a href="https://github.com/theo-petropoulos/oclock" class="example">GitHub</a>
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
                        <area id="hamburger" target="_blank" alt="anim_poster" title="anim_poster" href="" coords="124,30,124,197,238,219,238,48" shape="poly">
                        <area id="computer" target="_blank" alt="computer" title="anim_computer" href="" coords="101,268,52,285,52,449,400,449,399,340" shape="poly">
                        <area id="self" target="_blank" alt="anim_self" title="anim_self" href="" coords="285,225,282,134,318,85,351,82,402,90,430,146,426,202,411,225,408,273,436,301,503,331,544,384,543,450,407,450,406,335,284,312,302,300,288,279,280,253" shape="poly">
                    </map>
                </div>
                <p id="window_infos_message_box" class="distorted">
                    <b>SecCam : 4ll.1n-87C</b><br>
                    <b>Loc</b> : -14.680366592708031, -75.10059156065051
                </p>
            </div> 
        </div>
    </section>
    <!-- END WINDOW INFOS -->

    <!-- WINDOW HAMBURGER -->
    <section class="window drag invisible window_anim" id="window_hamburger">
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
                <div id="hamburger" class="slide2">
                    <span id="hamburger_name">
                        <h3>McManager Burger</h3>
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
    <!-- END WINDOW HAMBURER -->

    <!-- WINDOW COMPUTER --> 
    <section class="window drag invisible window_anim" id="window_computer">
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
                <p class="distorted" lang="fr" id="pcomputer_fr"></p>
                <p class="distorted" lang="en" id="pcomputer_en"></p>
            </div>
        </div>
    </section>
    <!-- END WINDOW CUMPUTER -->

    <!-- WINDOW SELF -->
    <section class="window drag invisible window_anim" id="window_self">
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
                <p class="distorted" lang="fr" id="window_self_text">
                    Petropoulos Théo, anciennement responsable opérationnel au restaurant McDonald's Bonneveine à Marseille. <br>
                    Actuellement en formation au sein de La Plateforme afin d'exercer le métier de développeur sécurité.<br>
                    Un vieux parchemin traine sur le bureau.</p>
                <p class="distorted" lang="en" id="window_self_text">
                    Petropoulos Theo, formerly manager at the Bonneveine's McDonald's in Marseilles.<br>
                    Currently studying at La Plateforme to work as a security developer.<br>
                    An ancient parchment lingers on the desk.</p>
                <a href="" id="open_parchment"><img src="<?=$addr;?>assets/images/other/parchment.png" alt="poetry parchment"></a>
                <a href="assets/images/other/CV.pdf" download id="download_resume">
                    <p lang="fr">Télécharger le CV</p>
                    <p lang="en">Download the resume</p>
                </a>
            </div>
        </div>
    </section>
    <!-- END WINDOW SELF -->

</section>