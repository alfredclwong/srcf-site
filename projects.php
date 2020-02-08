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
  </main>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
  <!--script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script-->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="src/projects.js" type="module"></script>
</body>
</html>
