<?php
	include 'head.php';
	include 'db.php';
	
	
	$result = pg_query($db, "SELECT commonpID, commonpName FROM CommonP ORDER BY commonpName");

?>

	<div class='container'>
		<div class='row'>
			<div class='col-sm-12' id='Building-Label'><h1><strong><center>Common Place</center></strong></h1></div>
		</div>
		<div class='row' style="margin-top: 20px;">
			<div class="col-md-6">
				<a href="#"><img class="img-responsive center-block" src="images/UP_common.png" alt="logo"/></a>

			</div>
			<div class="col-md-6">
				<div class="list-group">
					<div class="list-group-item active" style="background-color: #6a090a; color: white;	">Choose Common Place..</div>

				
<?php			

	if (pg_num_rows($result)>11){
		echo "<div class='scrollbar' id='style-default'>
				    <div class='force-overflow'>";
	}
	
	while ($row = pg_fetch_row($result)) {

	    echo "<a href='showcommp.php?name=".$row[0]."' class='list-group-item'>".$row[1]."</a>";    
	}	
	if (pg_num_rows($result)>11){
		echo "</div></div>";
    }
?>
      			</div>
    		</div>
		</div>
	</div>
</body>
</html>
