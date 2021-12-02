<?php
class sbsYoutubeClass{
  public function previewPlaylist($request=[]){
    $out_put_string = "";
    $template = "";

    $category_id =  (isset($request['category_id']))?trim($request['category_id']):0;
    get_term_meta($category_id, 'color_code', true);
    $youtube_play_list_id = get_term_meta($category_id, 'youtube_play_list_id', true);
    $url = YOUTUBE_API_URI."playlistItems?maxResults={$request['limit']}&playlistId={$youtube_play_list_id}&key=".YOUTUBE_API_KEY."&part=snippet";
    $result = $this->get_curl($url);
    $results = json_decode($result);
    if(!empty($results)){
      //sbs_print_this($result);
      echo "++++++++++++++++++++++++<br>";
      if(!empty($results->items)){
        foreach($results->items as $key=>$item){
          ob_start();
          include plugin_dir_path(__FILE__).'../view/youtube-play-list/youtube-play-list-single.php';
          $template .= ob_get_contents();
          ob_end_clean();
        }
      }
      ob_start();
      include plugin_dir_path(__FILE__).'../view/youtube-play-list/youtube-play-list-archive.php';
      $out_put_string .= ob_get_contents();
      ob_end_clean();
      return $out_put_string;
    }
    return $template;
  }

  public function get_curl($url=''){
    // create curl resource
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
  }
}
?>
