<?php
$a=file_get_contents('control.php');
$arr=unserialize($a);
$player=$_POST["player"];
$choose=$_POST["choose"];
$arrmy0=$_POST["arrmy"];
$arrmy=json_decode($arrmy0);
print_r($arrmy);
if ($player==1){
	$arr[0]=2;
	$b=serialize($arrmy);
	$f=fopen("players/array1.php",w);
    fwrite($f,$b);
    fclose($f);
}
else if($player==2){
	$arr[1]=2;
	$b=serialize($arrmy);
	$f=fopen("players/array2.php",w);
    fwrite($f,$b);
    fclose($f);
};
$a=serialize($arr);
$f=fopen("control.php",w);
fwrite($f,$a);
fclose($f);
?>