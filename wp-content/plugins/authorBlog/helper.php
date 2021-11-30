<?php
define('YOUTUBE_API_KEY','AIzaSyACqcLEIm9Py5hBnFSR8fPg4n44B2NFlhw');
define('YOUTUBE_API_URI','https://youtube.googleapis.com/youtube/v3/');
function sbs_print_this($array,$flag=0){
	echo '<pre>';
	print_r($array);
	if($flag == 1){
		die;
	}
}
function sbs_sendResponse($data=array()){
  header('Content-Type: application/json');
  echo json_encode($data);
  exit();
}
function sbs_getDateTime($datetime='',$format='Y-m-d H:i:s') {
	$format = trim($format)=='' ? 'Y-m-d H:i:s' : $format;
	$datetime = (trim($datetime)=='') ? date($format) : $datetime;
	return date($format,strtotime($datetime));
}
?>
