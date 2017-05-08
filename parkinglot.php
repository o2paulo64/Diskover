<?php
	include 'head.php';
	include 'db.php';
	

	$result = pg_query($db, "SELECT parkingID, parkingName FROM ParkingLot ORDER BY parkingName");
	
?>

	<div class='container'>
		<div class='row'>
			<div class='col-sm-12' id='Building-Label'><h1><strong><center>Parking Lot</center></strong></h1></div>
		</div>
		<div class='row' style="margin-top: 20px;">
			<div class="col-md-6">
				<a href="#"><img class="img-responsive center-block" src="images/UP_PARKINGLOT.png" alt="logo"/></a>

			</div>
			<div class="col-md-6">
				<div class="list-group">
					<div class="list-group-item active" style="background-color: #6a090a; color: white;	">Choose Parking Lot..</div>
				
<?php			

	if (pg_num_rows($result)>11){
		echo "<div class='scrollbar' id='style-default'>
				    <div class='force-overflow'>";
	}
	while ($row = pg_fetch_row($result)) {

	    echo "<a href='showpark.php?name=".$row[0]."' class='list-group-item'>".$row[1]."</a>";    
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
