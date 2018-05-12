var $torf_s = false;
var $torf_m = false;
function searchclick(){
	if ($torf_s == false) {
		document.getElementById('search_id').style.width = '380px';
		document.getElementById('search_id').style.background = '#f55500';
		document.getElementById('input_id').style.display = 'block';
		document.getElementById('input_id').focus();
		document.getElementById('hider').style.top = "-100%";

		$torf_s = true;
		if ($torf_m == true) {
			menuclick()
		}
	}
	else if ($torf_s == true){
		document.getElementById('hider').style.top = "0px";
		document.getElementById('search_id').style.width = '73px';
		document.getElementById('search_id').style.background = '';
		document.getElementById('input_id').style.display = 'none';
		document.getElementById('input_id').value = "";
		$torf_s = false;
	}
}
function menuclick(){
	if ($torf_m == false) {
		document.getElementById('open_menu_id').style.width = '700px';
		document.getElementById('menu_animate').style.transform = 'rotate(90deg)';
		document.getElementById('menu_animate2').style.transform = 'rotate(90deg)';
		$torf_m = true;
		if ($torf_s == true) {
			searchclick()
		}
	}
	else if ($torf_m == true) {
		document.getElementById('open_menu_id').style.width = '0px';
		document.getElementById('menu_animate').style.transform = 'none';
		document.getElementById('menu_animate2').style.transform = 'none';
		$torf_m = false;
	}
}