<?php
$player=$_POST["player"];
$poleX=$_POST["poleX"];
$poleY=$_POST["poleY"];
if ($player==1){
    $b=2;
}
else{
    $b=1;
};
$a=file_get_contents("players/array{$b}.php");
$arr=unserialize($a);
$d=0;
if($arr[$poleX][$poleY]>0){
    for($i=0; $i<count($arr); $i++){
	    for($j=0; $j<count($arr[$i]); $j++){
		    if($arr[$i][$j]==$arr[$poleX][$poleY]){
				$d++;
			};
	    };
    };
};
echo $d;
$arr[$poleX][$poleY]="100";
$a=serialize($arr);
$f=fopen("players/array{$b}.php",w);
fwrite($f,$a);
fclose($f);
$arraycontrol2=unserialize(file_get_contents("control{$b}.txt"));
$arraycontrol2[]=array($b,$poleX,$poleY);
$f=fopen("control{$b}.txt",w);
fwrite($f,serialize($arraycontrol2));
fclose($f);
?>