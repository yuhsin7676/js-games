<!DOCTYPE HTML>
<HTML>
<HEAD>
    <TITLE></TITLE>
	<!--<LINK rel="icon" href="flag.png">-->
</HEAD>
<BODY>
    <style>
	    body{
			margin:0px;
		}
	    #passpole{
			position:absolute;
			top:0px;
			left:0px;
			right:0px;
			bottom:0px;
			background-color:#80E0F0;
		}
		#formbegin{
			position:absolute;
			top:0px;
			bottom:0px;
			left:0px;
			right:0px;
		}
		#text{
			display:block;
			position:absolute;
			top:100px;
			left:100px;
			width:calc(100% - 200px);
			height:calc(50% - 150px);
			background-color:#FFF;
			font-size:30px;
			font-family:TimesNewRoman;
			text-align:center;
			border:2px #80E0F0 inset;
			outline:none;
		}
		#submit{
			display:block;
			position:absolute;
			bottom:100px;
			left:100px;
			width:calc(100% - 200px);
			height:calc(50% - 150px);
			background-color:#CCC;
			font-size:30px;
			font-family:TimesNewRoman;
			text-align:center;
			border:2px #CCC outset;
		}
	</style>
    <div id="passpole">
	    <form action="createplayer.php" method="post" id="formbegin">
		    <input type="text" name="password" id="text">
		    <input type="submit" id="submit">
		</form>
	</div>
</BODY>
</HTML>
<?php

?>