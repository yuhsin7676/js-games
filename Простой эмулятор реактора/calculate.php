<?php

// Получаем значения с реактора

$n = $_POST["n"];
$s = $_POST["s"];
$c = json_decode($_POST["c"]);
$ro = $_POST["ro"];

// Нейтронные характеристики

include "neutron_propirties.php";

// Рассчет параметров

$dc = array(0,0,0,0,0,0);
$dt = 0.01;
$lamC = 0;

for ($i = 0; $i < 6; $i++){
    $lamC=$lamC+$lamb[$i]*$c[$i];
};
$dn=(($ro-$betta)/$LAMBD*$n+$lamC+$s)*$dt;
for ($i = 0; $i < 6; $i++){
    $dc[$i]=($bettai[$i]*$betta/$LAMBD*$n-$lamb[$i]*$c[$i])*$dt;
};
$n=$n+$dn;
for ($i = 0; $i < 6; $i++){
    $c[$i]=$c[$i]+$dc[$i];
};

if ($n < 1){
	$n = 1;	
};

// Запись в новый массив

$array = array($n,$c);

// Возврат параметров
		
echo json_encode($array);

?>