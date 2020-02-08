<!doctype html>
<html>
<?php
  $title = "Alfred Wong";
  include("head.inc.php");
?>
<body>
<?php include("navbar.inc.php"); ?>
  <main>
    <div id="projects"></div>
    <!--div>
      <h2>Engineering</h2>
      <figure>
        <img src="images/electronics.jpg" alt="Mobile Audio System" height="300px">
        <figcaption>Mobile Audio System</figcaption>
      </figure>
      <figure>
        <img src="images/image50.jpg" alt="Quadcopter Control" height="300px">
        <figcaption>Quadcopter Control</figcaption>
      </figure>
      <figure>
      	<img src="images/tetris.png" height="300px" "style=display:block"><img src="images/tetris_fpga.jpg" height="300px" "style=display:block">
	<figcaption>Tetris</figcaption>
      </figure>
    </div>
    <br>
    <hr width=90%>
    <div>
      <h2>Mathematics</h2>
      <figure>
        <img src="images/ODEs.jpg" height="200px">
        <figcaption>Ordinary Differential Equations</figcaption>
      </figure>
      <figure>
        <img src="images/gss.jpg" height="200px">
        <figcaption>Golden Section Search</figcaption>
      </figure>
      <figure>
        <img src="images/3bp.jpg" height="200px">
        <figcaption>Three Body Problem</figcaption>
      </figure>
      <figure>
        <img src="images/crypt.jpg" height="200px">
        <figcaption>Public-Key Cryptography</figcaption>
      </figure>
    </div>
    <br>
    <hr width=90%>
    <div>
      <h2>Coding</h2>
      <figure>
        <img src="images/waterscope-improc.png" height="300px">
        <figcaption>CFU Tracker for Water Testing</figcaption>
      </figure>
      <figure>
        <img src="images/apv-mcts.png" height=300px">
        <figcaption>APV-MCTS for a newly released TCG</figcaption>
    <div-->
  </main>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
  <script src="src/projects.js"></script>
</body>
</html>
