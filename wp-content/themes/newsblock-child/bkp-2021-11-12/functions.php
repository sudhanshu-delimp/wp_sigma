<?php
/**
 * Include Theme Functions
 *
 * @package Newsblock Child Theme
 * @subpackage Functions
 * @version 1.0.0
 */

/**
 * Setup Child Theme
 */
function csco_setup_child_theme() {
	// Add Child Theme Text Domain.
	load_child_theme_textdomain( 'newsblock', get_stylesheet_directory() . '/languages' );
}

add_action( 'after_setup_theme', 'csco_setup_child_theme', 99 );

/**
 * Enqueue Child Theme Assets
 */
function csco_child_assets() {
	if ( ! is_admin() ) {
		$version = wp_get_theme()->get( 'Version' );
		wp_enqueue_style( 'csco_child_css', trailingslashit( get_stylesheet_directory_uri() ) . 'style.css', array(), $version, 'all' );

	}
	//( 'category_slide_css', get_stylesheet_directory_uri() . '/asset/css/slick.css', array('slick-css'));
	wp_enqueue_script( 'developer_custom_script', get_stylesheet_directory_uri().'/asset/js/custom.js', array('jquery'), rand(), true );
	wp_enqueue_script( 'developer_additional_script', get_stylesheet_directory_uri().'/asset/js/slide.js', array('jquery'), rand(), true );

  wp_localize_script('developer_custom_script', 'DVO', array('siteurl'=>get_option('siteurl')));
}

add_action( 'wp_enqueue_scripts', 'csco_child_assets', 99 );


function getDateTime($datetime='',$format='mm/dd/yy H:i:s') {
	$format = trim($format)=='' ? 'mm/dd/yy H:i:s' : $format;
	$datetime = (trim($datetime)=='') ? date($format) : $datetime;
	return date($format,strtotime($datetime));
}

function getWeather(){
	  global $temperature;
		$temperature_is = 0;
		$curl = curl_init();
		curl_setopt_array($curl, array(
		CURLOPT_URL => 'https://api.weatherapi.com/v1/current.json?key=57189dc3791340df8f6121904211709&q=Riyadh&aqi=no',
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => '',
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 0,
		CURLOPT_FOLLOWLOCATION => true,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => 'GET',
		));
		$response = curl_exec($curl);
		curl_close($curl);
		$response = json_decode($response);
		$temperature = (isset($response->current))?$response->current:0;
}
getWeather();
/**
 * Add your custom code below this comment.
 */


function newsblock_child_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Header Top Bar', 'textdomain' ),
        'id'            => 'newsblock_top_header_widget',
        'description'   => __( 'Widgets in this area will be shown under your single posts, before comments.', 'textdomain' ),
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => '',
    ) );
}
add_action( 'widgets_init', 'newsblock_child_widgets_init' );

function albila_sendResponse($data=array()){
   header('Content-Type: application/json');
   echo json_encode($data);
   exit();
 }

function getCategoryRestPostCount($category_id){
	global $wpdb;
	global $sitepress;
	$rest_count_sql = " SELECT p.ID FROM wp_posts AS p";
	$rest_count_sql .=" JOIN wp_icl_translations trs ON p.ID = trs.element_id AND trs.element_type = CONCAT('post_', p.post_type)";
	$rest_count_sql .=" LEFT JOIN wp_postmeta AS pm ON(p.ID = pm.post_id)";
	$rest_count_sql .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
	$rest_count_sql .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
	$rest_count_sql .=" LEFT JOIN wp_terms t ON t.term_id = tax.term_id";
	$rest_count_sql .=" WHERE (pm.meta_key = 'csco_post_video_url' OR pm.meta_key != 'csco_post_video_url') AND pm.meta_value ='' AND p.post_status = 'publish' AND p.post_type = 'post' AND ( ( trs.language_code = '".$sitepress->get_current_language()."' AND p.post_type = 'post' ) ) AND t.term_id={$category_id} GROUP BY pm.post_id";
	$rest_posts_count = $wpdb->get_results($rest_count_sql);
    return count($rest_posts_count);
}

add_filter('um_profile_field_filter_hook__date','my_custom_sanitize_fields', 9999, 2 );
function my_custom_sanitize_fields(  $value, $data ){
	if( $data['metakey'] == 'post_date' ){
		$value = date("m/d/Y", strtotime($value));
	}
	return $value;
}

function load_rest_posts(){
	global $wpdb;
	$response = '';
	$last_id = $_POST['last_id'];
	$limit = $_POST['limit'];
	$category_id = $_POST['category_id'];
	$current_post_count = $_POST['current_post_count'];
	$rowcount = getCategoryRestPostCount($category_id);

	$cat_sql = "SELECT p.ID,p.post_date,p.post_title,p.post_content,pm.meta_value as vidoe_url,t.name as category_name FROM wp_posts AS p";
	$cat_sql .=" JOIN wp_icl_translations trs ON p.ID = trs.element_id AND trs.element_type = CONCAT('post_', p.post_type)";
	$cat_sql .=" LEFT JOIN wp_postmeta AS pm ON(p.ID = pm.post_id)";
	$cat_sql .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
	$cat_sql .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
	$cat_sql .=" LEFT JOIN wp_terms t ON t.term_id = tax.term_id";
	$cat_sql .=" WHERE (pm.meta_key = 'csco_post_video_url' or pm.meta_key != 'csco_post_video_url') AND  pm.meta_value ='' AND p.post_status = 'publish' AND p.post_type = 'post' AND ( ( trs.language_code = '".ICL_LANGUAGE_CODE."' AND p.post_type = 'post' ) ) AND t.term_id={$category_id} AND p.ID<{$last_id}";
	$cat_sql .=" GROUP BY pm.post_id ORDER BY p.ID DESC LIMIT {$limit}";
	$recent_posts = $wpdb->get_results($cat_sql);
	if(!empty($recent_posts)){
		foreach($recent_posts as $key=>$post){
			if($post->vidoe_url!=''){
				unset($recent_posts[$key]);
			}
		}
	}

	if(!empty($recent_posts)){
		foreach($recent_posts as $key=>$post){
			$last_id = $post->ID;
			$post_image = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
			$post_content = wp_strip_all_tags($post->post_content);
			if($post->vidoe_url==''){
				$response.= '<div class="col-sm-3 discover_more_items">';
					$response.= '<div class="cs-entry__outer" style="width: 100%;">';
					$response.= '<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-original" data-scheme="inverse">';
					$response.= '<div class="cs-overlay-background">';
					$response.= '<a href="'.get_permalink($post->ID).'"><img class="card-img-top" src="'.$post_image.'" alt="Card image cap"></a>';
					$response.= '</div>';
					$response.= '<div class="cs-overlay-content">';
					$response.= '<span><a href="'.get_permalink($post->ID).'">'. __('Read More','sbs_author_blog').'</a></span>';
					$response.= '<div class="cs-entry__post-meta"><div class="cs-meta-reading-time"><span class="cs-meta-icon"><i class="cs-icon cs-icon-clock"></i></span>';
					$response.= '0 minute read</div></div></div></div>';
					$response.= '<div class="card-body cs-entry__inner cs-entry__content">';
					$response.= '<div><h6 class="card-title"><a href="'.get_category_link(get_the_category($post->ID)[0]->cat_ID).'"><span class="cat">'.get_the_category($post->ID)[0]->cat_name.'</span></a></h6></div>';
					$response.= '<div><a href="'.get_permalink($post->ID).'"><h4 class="card-title">'.$post->post_title.'</h4></a></div>';
					$response.= '<div class="date-form"><h4 class="card-title date">'.date('F d, Y',strtotime($post->post_date)).'</h4></div>';
					$response.= '<div><p class="card-text">'.mb_substr($post_content,0,110,'utf-8').'</p></div>';
					$response.= '</div>';
					$response.= '</div>';
				$response.= '</div>';
			}
		}
	}
  //$response = $post->loadMorePost($_POST);
  $is_load_more = ($current_post_count>=$rowcount)?false:true;
  albila_sendResponse(['posts'=>$response,'last_id'=>$last_id,'is_load_more'=>$is_load_more]);
	//albila_sendResponse(['posts'=>$_POST,'current_post_count'=>$current_post_count]);
}

add_action('wp_ajax_load_rest_posts', 'load_rest_posts');
add_action('wp_ajax_nopriv_load_rest_posts', 'load_rest_posts');

function gt_get_post_view() {
    $count = get_post_meta( get_the_ID(), 'post_views_count', true );
    return "$count views";
}
function gt_set_post_view() {
    $key = 'post_views_count';
    $post_id = get_the_ID();
    $count = (int) get_post_meta( $post_id, $key, true );
    $count++;
    update_post_meta( $post_id, $key, $count );
}
function gt_posts_column_views( $columns ) {
    $columns['post_views'] = 'Views';
    return $columns;
}
function gt_posts_custom_column_views( $column ) {
    if ( $column === 'post_views') {
        echo gt_get_post_view();
    }
}
add_filter( 'manage_posts_columns', 'gt_posts_column_views' );
add_action( 'manage_posts_custom_column', 'gt_posts_custom_column_views' );

function phi_theme_support() {
    remove_theme_support( 'widgets-block-editor' );
}
add_action( 'after_setup_theme', 'phi_theme_support' );
