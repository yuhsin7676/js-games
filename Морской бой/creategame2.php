<?php
$a=file_get_contents('control.php');
$arr=unserialize($a);
$arr=$_POST["player"];
$choose=$_POST["choose"];
$a=serialize($arr);
$f=fopen("control.php",w);
fwrite($f,$a);
fclose($f);
?>