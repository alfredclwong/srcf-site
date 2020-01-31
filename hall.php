<!doctype html>
<html>
<?php
  $title = "Alfred Wong";
  include("head.inc.php");
?>
<body>
<?php include("navbar.inc.php"); ?>
  <main>
    <embed src="https://docs.google.com/gview?embedded=true&url=https://www.trin.cam.ac.uk/wp-content/uploads/Hall-Menu-cur.pdf" width="80%" height="600px">
  </main>
  <details>
    <summary>Text Processing (WIP)</summary>
    <p id="menu"></p>
  </details>
  <script src="node_modules/pdfjs-dist/build/pdf.js"></script>
  <script src="src/hall.js"></script>
</body>
</html>
