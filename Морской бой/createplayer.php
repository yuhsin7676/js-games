<?php
$password1="iluha251998";
$password2="liza167lazareva";
$word=$_POST["password"];
if ($word==$password1){
	$f=fopen("players/player1.php",w);
	fclose($f);
	copy("textplayer1file.php","players/player1.php");
	header("Location: players/player1.php");
}
else if ($word==$password2){
	$f=fopen("players/player2.php",w);
	fclose($f);
	copy("textplayer2file.php","players/player2.php");
	header("Location: players/player2.php");
}
else {
	echo "good by!";
};
?>