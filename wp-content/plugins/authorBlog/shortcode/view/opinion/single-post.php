<?php
global $sbs_current_lang;
if($key == 0){
  include plugin_dir_path(__FILE__).'section/section-one.php';
}
else if($key<=3){
  include plugin_dir_path(__FILE__).'section/section-two.php';
}
else{
  include plugin_dir_path(__FILE__).'section/section-three.php';
}
?>
