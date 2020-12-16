<?php

include 'C:/xampp/htdocs/nexodev/modules/underpost.php';
$str_data = file_get_contents('C:/dd/global_data/json/underpost/underpost.json');
$uri = $_SERVER['REQUEST_URI'];
renderPath($uri, $str_data, 0);

 ?>
