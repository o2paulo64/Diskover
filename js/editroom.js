//var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diskover/upload';
var CLOUDINARY_URL = ' https://api.cloudinary.com/v1_1/dmmqe1m3m/image/upload';
//var CLOUDINARY_UPLOAD_PRESET = 'b8ay1z9e';
var CLOUDINARY_UPLOAD_PRESET = 'pv0uvamk';

//var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('editfile-upload1');
var fileUpload1 = document.getElementById('editfile-upload2');
var fileUpload2 = document.getElementById('editfile-upload3');
var fileSubmit = document.getElementById('new-submit');

var result;
var trigg = 0;

var namek = document.getElementsByName('buildingName');
var desc = document.getElementsByName('buildingDescription');
var direction = document.getElementsByName('Directions');
var fromwhere=document.getElementById('from').value;
var id=document.getElementById('infoD').value;

// //alert(fromwhere);
// //alert(id);

fileUpload.addEventListener('change', function(event){
	var file = event.target.files[0];
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
	document.getElementById("roomz").style.display = "block";
	axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then(function(res){
		console.log(res);
		result = res.data.secure_url;
		trigg ++;
		document.getElementById("roomz").style.display = "none";

	}).catch(function(err){
		console.error(err);
	});

});

fileUpload1.addEventListener('change', function(event){
	var file = event.target.files[0];
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
	document.getElementById("roomz").style.display = "block";
	axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then(function(res){
		console.log(res);
		result1 = res.data.secure_url;
		trigg ++;
		document.getElementById("roomz").style.display = "none";

	}).catch(function(err){
		console.error(err);
	});

});

fileUpload2.addEventListener('change', function(event){
	var file = event.target.files[0];
	var formData = new FormData();
	formData.append('file', file);
	formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
	document.getElementById("roomz").style.display = "block";
	axios({
		url: CLOUDINARY_URL,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: formData
	}).then(function(res){
		console.log(res);
		result2 = res.data.secure_url;
		trigg ++;
		document.getElementById("roomz").style.display = "none";

	}).catch(function(err){
		console.error(err);
	});

});

var myFunctionEDITROOM = function(){
	
	if(trigg===3 && namek[0].value !== "" && desc[0].value !=="" && direction[0].value !== ""){
		if(confirm("Are you sure?")){
			if(fromwhere=="6"){
				//alert("checking");

				window.location.href = "editRoomVIP.php?w1=" + result + "&w2=" + namek[0].value + "&w4=" + desc[0].value + "&w5=" + direction[0].value + "&w6=" + result1 + "&w7=" + result2 + "&w8="+id;
			}
		}
	}

	else{
		alert("Complete the form before hitting Submit. Check if you have uploaded an image or if it has been uploaded completely.");
		return false;
	}
}