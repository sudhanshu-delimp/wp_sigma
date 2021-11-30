<?php
/*
Template Name: example-json
*/
// global $wpdb;
// global $sbs_current_lang;
// $limit = 5;
// $type = 'post';
// $output = '';
// $today_date = sbs_getDateTime('','Y-m-d');
// $direction = ($sbs_current_lang == 'en') ? 'right' : 'left';
// if($_SERVER['HTTP_HOST'] === 'localhost'){
//   $category_id = ($sbs_current_lang == 'en') ? 16 : 17; //breaking news
// }
// else{
//   $category_id = ($sbs_current_lang == 'en') ? 39388 : 39389; //breaking news
// }
// $news_type = 'Breaking News';
// $news_header_class = 'news_header_class';
// $news_container_class = '';
// $latest_posts = [];
// $latest_post_query = '';
// $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
// if(!empty($sbs_current_lang)){
//   $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
// }
// if($category_id > 0){
//   $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
//   $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
//   $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
// }
// $latest_post_query .=" WHERE p.post_type='{$type}' AND";
// if($category_id > 0){
//   $latest_post_query .=" trm.term_id={$category_id} AND";
// }
// if(!empty($sbs_current_lang)){
//     $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
// }
// $latest_post_query .=" p.post_date LIKE '%{$today_date}%' AND p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
// $latest_posts = $wpdb->get_results($latest_post_query);
//
// if(count($latest_posts) == 0){
//   $latest_post_query = '';
//   if($_SERVER['HTTP_HOST'] === 'localhost'){
//     $category_id = ($sbs_current_lang == 'en') ? 14 : 15;  // loacl news
//   }
//   else{
//     $category_id = ($sbs_current_lang == 'en') ? 39377 : 3;  // loacl news
//   }
//   $news_type = 'News';
//   $news_header_class = '';
//   $news_container_class = 'news_container_class';
//
//   $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
//   if(!empty($sbs_current_lang)){
//     $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
//   }
//   if($category_id > 0){
//     $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
//     $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
//     $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
//   }
//   $latest_post_query .=" WHERE p.post_type='{$type}' AND";
//   if($category_id > 0){
//     $latest_post_query .=" trm.term_id={$category_id} AND";
//   }
//   if(!empty($sbs_current_lang)){
//     $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
//   }
//   $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
//   $latest_posts = $wpdb->get_results($latest_post_query);
// }
//
//
// $new_items = [];
// if(!empty($latest_posts)){
//   $index = 0;
//   foreach($latest_posts as $key=>$news){
//       $index = $index+1;
//       $new_items[$index] = $news->post_title;
//       $breaking_news_points = get_post_meta($news->ID,'breaking_news_point',true);
//       $breaking_news_points = json_decode($breaking_news_points);
//       if(!empty($breaking_news_points) && $news_type == 'Breaking News'){
//         foreach ($breaking_news_points as $news_points){
//           if(!empty($news_points->title)){
//             $index = $index+1;
//             $new_items[$index] = $news_points->title;
//           }
//         }
//       }
//   }
// }
// $string = json_encode($new_items,JSON_UNESCAPED_UNICODE);
// if ($_GET['callback'] != '') {
//   $mime = 'application/javascript';
//   $start = "(";
//   $end = ")";
// } else {
//   $mime = 'application/json';
//   $start = "";
//   $end = "";
// }
// //echo $_GET['callback'] . $start ."$string". $end;
// echo $_GET['callback'].$start."{$string}".$end;
// //echo $_GET['callback'] . $start . '{0: "first", 1: "second "}' . $end;
function get_post_2($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = 0){
  global $wpdb;
  $sbs_current_lang = 'en';
  $latest_posts = [];
  $latest_post_query = "SELECT p.ID,p.post_title,p.post_content,p.post_date FROM {$wpdb->prefix}posts AS p";
  if(!empty($sbs_current_lang)){
    $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
  }
  if($category_id > 0){
    $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
    $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
    $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
  }
  $latest_post_query .=" WHERE p.post_type='{$type}' AND";
  if($category_id > 0){
    $latest_post_query .=" trm.term_id={$category_id} AND";
  }
  if(!empty($sbs_current_lang)){
    $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
  }
  if($last_id > 0){
    $latest_post_query .=" p.post_status='publish' AND p.ID < {$last_id} ORDER BY p.ID DESC LIMIT {$limit}";
  }
  else{
    $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$start},{$limit}";
  }
  $latest_posts = $wpdb->get_results($latest_post_query);
  if(!empty($latest_posts)){
    foreach($latest_posts as $key=>$post){
      $user_detail = get_user_by('slug',$post->user_nicename);

     $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
     $latest_posts[$key]->category_name = get_the_category($post->ID)[0]->cat_name;
     $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
     $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
    }
  }
  echo $latest_post_query;die;
  //sbs_print_this($latest_posts,1);
  return $latest_posts;
}

echo get_post_2(0,1);
?>
