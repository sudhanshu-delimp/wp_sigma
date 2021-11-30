<?php
function sbs_author_blog_script(){
  //wp_enqueue_script('sbs_jquery-3.5_script','https://code.jquery.com/jquery-3.5.1.min.js', array('jquery'), rand(), true );
  wp_enqueue_style('sbs_author_blog_style',plugins_url('/asset/css/sbs_author_blog_style.css', __FILE__ ));
  //wp_enqueue_style('sbs_ticker_style',plugins_url('/asset/css/sbs_ticker.css', __FILE__ ));

  //wp_enqueue_script('sbs_sbs_ticker_script',plugins_url('/asset/js/sbs_ticker.js', __FILE__ ), array('jquery'), rand(), true );
  wp_enqueue_script('sbs_fontawesome_script','https://kit.fontawesome.com/a076d05399.js', array('jquery'), rand(), true );
  //wp_enqueue_script('sbs_sbs_ticker_script',plugins_url('/asset/js/news_post_ticker/sbs_ticker.js', __FILE__ ), array('jquery'), rand(), true );
  wp_enqueue_script('sbs_author_blog_script',plugins_url('/asset/js/sbs_author_blog_script.js', __FILE__ ), array('jquery'), rand(), true );
  wp_localize_script('sbs_author_blog_script', 'DVO', array('siteurl'=>get_option('siteurl')));
}

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
?>
