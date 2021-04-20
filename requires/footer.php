<footer id="task_bar" class="invisible">
    <!-- START MENU -->
    <div id="menu">
        <button id="start_btn">
            <p lang="fr">Démarrer</p>
            <p lang="en">Start</p>
        </button>
        <div id="start_menu" class="invisible">
            <ul id="start_menu_list">
                <li id="shutdown_li">
                    <button id="shutdown_btn">
                        <p lang="fr">Arrêter</p>
                        <p lang="en">Shut down</p>
                    </button>
                </li>
                <li id="settings_li">
                    <span id="settings">
                        <p lang="fr">Paramètres <i class="fas fa-caret-right"></i></p>
                        <p lang="en">Settings <i class="fas fa-caret-right"></i></p>
                    </span>
                    <ul id="settings_list">
                        <li id="settings_color">
                            <p lang="fr">Couleur <i class="fas fa-caret-right"></i></p>
                            <p lang="en">Color <i class="fas fa-caret-right"></i></p>
                            <ul>
                                <li>
                                    <p class="example color_example" id="color_green" style="color:rgb(173, 255, 47)" lang="fr">Vert</p>
                                    <p class="example color_example" id="color_green" style="color:rgb(173, 255, 47)" lang="en">Green</p>
                                </li>
                                <li>
                                    <p class="example color_example" id="color_red" style="color:rgb(165, 17, 17)" lang="fr">Rouge</p>
                                    <p class="example color_example" id="color_red" style="color:rgb(165, 17, 17)" lang="en">Red</p>
                                </li>
                                <li>
                                    <p class="example color_example" id="color_blue" style="color:rgb(35, 105, 200)" lang="fr">Bleu</p>
                                    <p class="example color_example" id="color_blue" style="color:rgb(35, 105, 200)" lang="en">Blue</p>
                                </li>
                                <li>
                                    <p class="example color_example" id="color_white" style="color:rgba(255,255,255,0.9)" lang="fr">Blanc</p>
                                    <p class="example color_example" id="color_white" style="color:rgba(255,255,255,0.9)" lang="en">White</p>
                                </li>
                                <li>
                                    <p class="example color_example" id="color_white" style="color:rgba(120,120,120,1)" lang="fr">Gris</p>
                                    <p class="example color_example" id="color_white" style="color:rgba(120,120,120,1)" lang="en">Grey</p>
                                </li>
                            </ul>
                        </li>
                        <li id="settings_font">
                            <p lang="fr">Police <i class="fas fa-caret-right"></i></p>
                            <p lang="en">Font <i class="fas fa-caret-right"></i></p>
                            <ul>
                                <li>
                                    <p class="example font_example" style="font-family:'DotGothic16'" id="dotgothic16">Dot Gothic 16</p>
                                </li>
                                <li>
                                    <p class="example font_example" style="font-family:'Lexend'" id="lexend">Lexend</p>
                                </li>
                                <li>
                                    <p class="example font_example" style="font-family:'Yusei Magic'" id="yuseimagic">Yusei Magic</p>
                                </li>
                                <li>
                                    <p class="example font_example" style="font-family:'Gupter'" id="gupter">Gupter</p>
                                </li>
                                <li>
                                    <p class="example font_example" style="font-family:'Calibri'" id="calibri">Calibri</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
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
                <p class="distorted" lang="en">en</p>
                <p class="distorted" lang="fr">fr</p>
            </button>
        </div>
        <span lang="fr"></span>
        <span lang="en"></span>
    </div>
    <!-- END CORNER RIGHT -->
</footer>