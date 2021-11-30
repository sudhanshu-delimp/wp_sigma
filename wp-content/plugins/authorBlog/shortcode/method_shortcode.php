<?php
function sbs_show_blog_with_authors($atts){
  $attributes = shortcode_atts( array(
        'loader' => true,
        'limit' => 4,
    ), $atts );
  do_action('sbs_enqueue_scripts');
  $post = new sbsRecentPostClass();
  return $post->previewPosts($attributes);
}

function sbs_show_author_blogs($atts){
  $attributes = shortcode_atts( array(
        'user_id' => 0,
        'loader' => true,
        'limit' => 4,
    ), $atts );
  do_action('sbs_enqueue_scripts');
  $post = new sbsRecentPostClass();
  return $post->previewAuthorPosts($attributes);
}

function sbs_show_recent_post_by_type($atts){
  $attributes = shortcode_atts( array(
        'post_type' => 'post',
        'category_id' => 0,
        'loader' => true,
        'limit' => 4,
    ), $atts );
    do_action('sbs_enqueue_scripts');
    $post = new sbsRecentPostClass();
    return $post->previewPostType($attributes);
}

function sbs_show_latest_post_author($atts){
  $category = get_category( get_query_var( 'cat' ) );
  if(!empty($category->cat_ID)){
    $catId = $category->cat_ID;
  }else{
    $catId = 0;
  }
  $attributes = shortcode_atts( array(
        'module_type' => 'one',
        'category_id' => $catId,
        'loader' => true,
        'limit' => 4,
    ), $atts );
  do_action('sbs_enqueue_scripts');
  $post = new sbsRecentPostClass();
  return $post->previewLatestPostAuthor($attributes);
}

function sbs_show_show_opinion_post($atts){
  $attributes = shortcode_atts( array(
        'post_type' => 'post',
        'category_id' => 0,
        'loader' => false,
        'init_post_count' => 11,
        'limit' => 6,
    ), $atts );
    do_action('sbs_enqueue_scripts');
    $post = new sbsRecentPostClass();
    return $post->previewOpinionPost($attributes);
}

function sbs_show_trending_post($atts){
  $attributes = shortcode_atts( array(
        'post_type' => 'post',
        'category_id' => 0,
        'loader' => true,
        'limit' => 4,
    ), $atts );
    do_action('sbs_enqueue_scripts');
    $post = new sbsRecentPostClass();
    return $post->previewTrendingPostType($attributes);
}

function sbs_news_post($atts){
    global $wpdb;
    include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
    $post = new sbsRecentPostClass();
    $attributes = shortcode_atts( array(
          'limit' => 4,
      ), $atts );
    do_action('sbs_enqueue_scripts');
    return $post->getNewsHeadlines($attributes);
}

function sbs_news_ticker(){
  global $wpdb;
  global $sbs_current_lang;
  $today_date = sbs_getDateTime('','Y-m-d');
  $direction = ($sbs_current_lang == 'en') ? 'right' : 'left';
  if($_SERVER['HTTP_HOST'] === 'localhost'){
    $category_id = ($sbs_current_lang == 'en') ? 16 : 17; //breaking news
  }
  else{
    $category_id = ($sbs_current_lang == 'en') ? 39388 : 39389; //breaking news
  }
  $limit = 5;
  $type = 'post';
  $today = getdate();
  $news_type = 'Breaking News';
  $news_header_class = 'news_header_class';
  $news_container_class = '';
  $latest_posts = [];
  $latest_post_query = '';
  $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
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
  $latest_post_query .="  p.post_date LIKE '%{$today_date}%' AND p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
  $latest_posts = $wpdb->get_results($latest_post_query);

  if(count($latest_posts) == 0){
    $latest_post_query = '';
    if($_SERVER['HTTP_HOST'] === 'localhost'){
      $category_id = ($sbs_current_lang == 'en') ? 14 : 15;  // loacl news
    }
    else{
      $category_id = ($sbs_current_lang == 'en') ? 39377 : 3;  // loacl news
    }
    $news_type = 'News';
    $news_header_class = '';
    $news_container_class = 'news_container_class';

    $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
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
    $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
    $latest_posts = $wpdb->get_results($latest_post_query);
  }
  $new_items = [];
  if(!empty($latest_posts)){
    $index = 0;
    foreach($latest_posts as $key=>$news){
        $index = $index+1;
        $new_items[$index] = $news->post_title;
        $breaking_news_points = get_post_meta($news->ID,'breaking_news_point',true);
        $breaking_news_points = json_decode($breaking_news_points);
        if(!empty($breaking_news_points) && $news_type == 'Breaking News'){
          foreach ($breaking_news_points as $news_points){
            $index = $index+1;
            $new_items[$index] = $news_points->title;
          }
        }
    }
  }
  $string = json_encode($new_items,JSON_UNESCAPED_UNICODE);
  do_action('sbs_enqueue_scripts');
  ob_start();
  include plugin_dir_path(__FILE__).'/view/news-ticker.php';
  $template .= ob_get_contents();
  ob_end_clean();
  return $template;
}

function sbs_news_post_ticker($atts){
    global $wpdb;
    include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
    $post = new sbsRecentPostClass();
    $attributes = shortcode_atts( array(
          'limit' => 4,
      ), $atts );
    do_action('sbs_enqueue_scripts');
    return $post->getNewsHeadlinesTicker($attributes);
}

function sbs_paid_post($atts){
  global $sbs_current_lang;
  if($_SERVER['HTTP_HOST'] === 'localhost'){
    $category_id = ($sbs_current_lang=='en')?19:20;  // localhost
  }
  else{
    $category_id = ($sbs_current_lang=='en')?39398:39397;  // live
  }
  $attributes = shortcode_atts( array(
        'user_id' => 0,
        'loader' => true,
        'category_id' => $category_id,
        'limit' => 4,
    ), $atts );
   do_action('sbs_enqueue_scripts');
   $post = new sbsRecentPostClass();
  return $post->previewPiadPosts($attributes);
}

function sbs_category_play_list($atts){

  $attributes = shortcode_atts( array(
        'category_id' => 0,
        'loader' => true,
        'limit' => 4,
    ), $atts );
    do_action('sbs_enqueue_scripts');
    $youtube = new sbsYoutubeClass();
    return $youtube->previewPlaylist($attributes);
}
?>
