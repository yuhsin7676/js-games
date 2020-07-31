<?php
$a=file_get_contents('control.php');
$arr=unserialize($a);
if ($arr[0]==1 and $arr[1]==1){
	echo 1;
};
if ($arr[0]==2 and $arr[1]==2){
	echo 2;
};
$b=array();
$c=serialize($b);
$f=fopen("control1.txt",w);
fwrite($f,$c);
fclose($f);
$f=fopen("control2.txt",w);
fwrite($f,$c);
fclose($f);
?>