<?php
$player=$_POST["player"];
if ($player==1){
    $b=2;
}
else{
    $b=1;
};
$a=file_get_contents("players/array{$b}.php");
$arr=unserialize($a);
$d=json_encode($arr);
echo $d;
?>