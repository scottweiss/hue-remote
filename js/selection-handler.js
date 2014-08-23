var PreviousLightStatus;
$(document).ready(function(){
	var scott;
	// $('body').html("hello world");
	hueIP = getHueIP(viewIP);
	getGroups(checkLightStatus);

});

$('#lights-on').on('click', function(){
	lightsOn();
	getGroups(checkLightStatus);
});

$('#lights-off').on('click', function(){
	lightsOff();
	getGroups(checkLightStatus);
});

$('#colorloop').on('click', function(){
	colorloop();
});
$('#blue').on('click', function(){
	blue();
});

function setLightStatus(status){
	if (!(status)){
		$('body').animate({
            backgroundColor: "blue"
    		}, 1000 );
	}
	else{
		$('body').animate({
            backgroundColor: "white"
    		}, 1000 );
	}
}