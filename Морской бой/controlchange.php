<?php
$player=$_POST["player"];
$arraycontrol2=unserialize(file_get_contents("control{$player}.txt"));
echo json_encode($arraycontrol2);
$arraycontrol2=array();
$f=fopen("control{$player}.txt",w);
fwrite($f,serialize($arraycontrol2));
fclose($f);
?>