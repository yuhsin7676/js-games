<?php
$a=file_get_contents('control.php');
$arr=unserialize($a);
$player=$_POST["player"];
$choose=$_POST["choose"];
if ($player==1){
	$arr[0]=1;
	if ($choose==1){
	    for($i=0; $i<15; $i++){
		    for($j=0; $j<15; $j++){
			    $arr1[$i][$j]=0;
			};
		};
	}
	else{
		for($i=0; $i<15; $i++){
		    for($j=0; $j<15; $j++){
			    $arr1[$i][$j]=0;
			};
		};
	};
	$a1=serialize($arr1);
	$f=fopen("players/array1.php",w);
    fwrite($f,$a1);
    fclose($f);
}
else if($player==2){
	$arr[1]=1;
	if ($choose==1){
	    for($i=0; $i<15; $i++){
		    for($j=0; $j<15; $j++){
			    $arr2[$i][$j]=0;
			};
		};
	}
	else{
		for($i=0; $i<15; $i++){
		    for($j=0; $j<15; $j++){
			    $arr2[$i][$j]=0;
			};
		};
	};
	$a2=serialize($arr2);
	$f=fopen("players/array2.php",w);
    fwrite($f,$a2);
    fclose($f);
};
$a=serialize($arr);
$f=fopen("control.php",w);
fwrite($f,$a);
fclose($f);
?>