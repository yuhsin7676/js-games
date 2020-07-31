<?php

// Получаем значения с реактора

$n = $_POST["n"];
$s = $_POST["s"];
$c = json_decode($_POST["c"]);
$ro = $_POST["ro"];

// Нейтронные характеристики

include "neutron_propirties.php";

// Рассчет концентрации эммитеров

for ($i = 0; $i < 6; $i++){
    $c[$i]=$n*$bettai[$i]*$betta/$lamb[$i]/$LAMBD;
};

// Возврат концентрации эммитеров и бетты

echo json_encode(array($c,$betta));

?>