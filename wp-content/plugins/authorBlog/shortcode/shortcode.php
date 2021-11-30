<?php
include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';

function sbs_author_blog_script(){
  //wp_enqueue_script('sbs_jquery-3.5_script','https://code.jquery.com/jquery-3.5.1.min.js', array('jquery'), rand(), true );
  wp_enqueue_style('sbs_author_blog_style',plugins_url('/asset/css/sbs_author_blog_style.css', __FILE__ ));
  //wp_enqueue_style('sbs_ticker_style',plugins_url('/asset/css/sbs_ticker.css', __FILE__ ));

  //wp_enqueue_script('sbs_sbs_ticker_script',plugins_url('/asset/js/sbs_ticker.js', __FILE__ ), array('jquery'), rand(), true );
  wp_enqueue_script('sbs_fontawesome_script','https://use.fontawesome.com/d0eb7a4cfd.js', array('jquery'), rand(), true );
  //wp_enqueue_script('sbs_sbs_ticker_script',plugins_url('/asset/js/news_post_ticker/sbs_ticker.js', __FILE__ ), array('jquery'), rand(), true );
  wp_enqueue_script('sbs_author_blog_script',plugins_url('/asset/js/sbs_author_blog_script.js', __FILE__ ), array('jquery'), rand(), true );
  wp_localize_script('sbs_author_blog_script', 'DVO', array('siteurl'=>get_option('siteurl')));
}

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

add_action('sbs_enqueue_scripts', 'sbs_author_blog_script', 100 );
add_shortcode("blog_with_author", 'sbs_show_blog_with_authors');
add_shortcode("show_author_blog", 'sbs_show_author_blogs');
add_shortcode("show_recent_post_by_type", 'sbs_show_recent_post_by_type');
add_shortcode("show_latest_post_author", 'sbs_show_latest_post_author');
add_shortcode("show_opinion_post", 'sbs_show_show_opinion_post');
add_shortcode("show_trending_post", 'sbs_show_trending_post');
add_shortcode("news_post", 'sbs_news_post');
add_shortcode("news_ticker", 'sbs_news_ticker');
add_shortcode("news_post_ticker", 'sbs_news_post_ticker');
add_shortcode("paid_post", 'sbs_paid_post');

function load_recent_posts(){
  global $wpdb;
  include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
  $type =  (isset($_POST['type']))?trim($_POST['type']):'post';
  $category_id =  (isset($_POST['category_id']))?trim($_POST['category_id']):0;
  $post = new sbsRecentPostClass();
  $current_post_count = $_POST['current_post_count'];
  $rowcount = $post->get_post_count($type, $category_id);
  $response = $post->loadMorePost($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  sbs_sendResponse(['posts'=>$response['template'],'last_id'=>$response['last_id'],'is_load_more'=>$is_load_more]);
}

add_action('wp_ajax_load_recent_posts', 'load_recent_posts');
add_action('wp_ajax_nopriv_load_recent_posts', 'load_recent_posts');

function load_trending_posts(){
  global $wpdb;
  include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
  $type =  (isset($_POST['type']))?trim($_POST['type']):'post';
  $category_id =  (isset($_POST['category_id']))?trim($_POST['category_id']):0;
  $post = new sbsRecentPostClass();
  $current_post_count = $_POST['current_post_count'];
  $rowcount = $post->get_trending_post_count($type, $category_id);
  $response = $post->loadMoreTrendingPost($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  sbs_sendResponse(['posts'=>$response['template'],'last_id'=>$response['last_id'],'is_load_more'=>$is_load_more]);
}

add_action('wp_ajax_load_trending_posts', 'load_trending_posts');
add_action('wp_ajax_nopriv_load_trending_posts', 'load_trending_posts');

function load_recent_opinions(){
  global $wpdb;
  include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
  $type =  (isset($_POST['type']))?trim($_POST['type']):'post';
  $category_id =  (isset($_POST['category_id']))?trim($_POST['category_id']):0;
  $post = new sbsRecentPostClass();
  $current_post_count = $_POST['current_post_count'];
  $rowcount = $post->get_opinion_post_count($type, $category_id);
  $response = $post->loadMoreOpinionPost($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  sbs_sendResponse(['posts'=>$response['template'],'last_id'=>$response['last_id'],'is_load_more'=>$is_load_more]);
}

add_action('wp_ajax_load_recent_opinions', 'load_recent_opinions');
add_action('wp_ajax_nopriv_load_recent_opinions', 'load_recent_opinions');

function load_author_posts(){
  global $wpdb;
  include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
  $post = new sbsRecentPostClass();
  $current_post_count = $_POST['current_post_count'];
  $rowcount = $post->get_user_post_count($_POST['user_id']);
  $response = $post->loadAuthorMorePost($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  sbs_sendResponse(['posts'=>$response['template'],'last_id'=>$response['last_id'],'is_load_more'=>$is_load_more]);
}

add_action('wp_ajax_load_author_posts', 'load_author_posts');
add_action('wp_ajax_nopriv_load_author_posts', 'load_author_posts');

function search_author_posts(){
  $attributes = [];
  $attributes['loader'] = true;
  $attributes['limit'] = $_POST['limit'];
  $attributes['user_id'] = $_POST['user_id'];
  $attributes['search_value'] = $_POST['search_value'];
  $attributes['from'] = $_POST['from'];
  $post = new sbsRecentPostClass();
  sbs_sendResponse(['posts'=>$post->previewAuthorPosts($attributes)]);
}
add_action('wp_ajax_search_author_posts', 'search_author_posts');
add_action('wp_ajax_nopriv_search_author_posts', 'search_author_posts');

function load_recent_authors(){
  global $wpdb;
  include_once plugin_dir_path(__FILE__).'class/sbsRecentPostClass.php';
  $type =  (isset($_POST['type']))?trim($_POST['type']):'post';
  $category_id =  (isset($_POST['category_id']))?trim($_POST['category_id']):0;
  $post = new sbsRecentPostClass();
  $current_post_count = $_POST['current_post_count'];
  $rowcount = $post->get_authors_count();
  $response = $post->loadMoreAuthors($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  sbs_sendResponse(['posts'=>$response['template'],'last_id'=>$response['last_id'],'is_load_more'=>$is_load_more]);
}
add_action('wp_ajax_load_recent_authors', 'load_recent_authors');
add_action('wp_ajax_nopriv_load_recent_authors', 'load_recent_authors');

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
?>
