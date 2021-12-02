<?php
/*
* Plugin Name: Author Blog
* Description: Shows blogs with it author name and image and rest other information.
* Version: 3.0
* Author: Sudhanshu
* Author URI: #
Text Domain: sbs_author_blog
*/
global $sbs_current_lang;
$sbs_current_lang = 'en';
include_once plugin_dir_path(__FILE__).'helper.php';
include_once plugin_dir_path(__FILE__).'shortcode/shortcode.php';
include_once plugin_dir_path(__FILE__).'sidebar/sidebar.php';
include_once plugin_dir_path(__FILE__).'action/add_action.php';
include_once plugin_dir_path(__FILE__).'action/method_action.php';
register_activation_hook( __FILE__, 'sbs_myplugin_activate' );
function sbs_myplugin_activate(){
  add_role(
         'opinion_writer',
         __('Opinion Writer', 'add-opinion-writer-role'),
         array(
           'read'  => true,
           'delete_posts'  => true,
           'delete_published_posts' => true,
           'edit_posts'   => true,
           'publish_posts' => true,
           'upload_files'  => true,
           'edit_pages'  => true,
           'edit_published_pages'  =>  true,
           'publish_pages'  => true,
           'delete_published_pages' => false, // This user will NOT be able to  delete published pages.
         )
    );
  // $new_page_title = 'User Profile';
  // $new_page_content = 'This is the page content';
  // $new_page_template = 'sbs-user-profile.php';
  //
  // $page_check = get_page_by_title($new_page_title);
  // $new_page = array(
  //     'post_type' => 'page',
  //     'post_title' => $new_page_title,
  //     'post_content' => $new_page_content,
  //     'post_status' => 'publish',
  //     'post_author' => 1,
  // );
  // if(!isset($page_check->ID)){
  //     $new_page_id = wp_insert_post($new_page);
  //     if(!empty($new_page_template)){
  //         update_post_meta($new_page_id, '_wp_page_template', $new_page_template);
  //     }
  // }
}

add_filter('page_template','sbs_page_template');
function sbs_page_template( $page_template ){
    if ( get_page_template_slug() == 'sbs-user-profile.php' ) {
        $page_template = dirname( __FILE__ ) . '/sbs-user-profile.php';
    }
    return $page_template;
}

add_filter( 'theme_page_templates', 'sbs_page_template_add_template_to_select', 10, 4 );
function sbs_page_template_add_template_to_select( $post_templates, $wp_theme, $post, $post_type ) {
    // Add custom template named template-custom.php to select dropdown
    $post_templates['sbs-user-profile.php'] = __('sbs user profile');
    return $post_templates;
}

function getUserDetail($key,$value){
  $userDetail = [];
  $userDetail = get_user_by($key, $value);
  $userDetail = $userDetail->data;
  if(!empty($userDetail)){
      $userDetail->user_image = get_avatar_url($userDetail->ID, array('size' => 100));
      $userDetail->description = get_user_meta($userDetail->ID,'description',true);
      $userDetail->address = get_user_meta($userDetail->ID,'address',true);
      $userDetail->instagram_link = get_user_meta($userDetail->ID,'instagram_link',true);
      $userDetail->twitter_link = get_user_meta($userDetail->ID,'twitter_link',true);
  }
  return $userDetail;
}

function fb_add_custom_user_profile_fields( $user ) {
?>
    <h3><?php _e('Extra Profile Information', 'your_textdomain'); ?></h3>
    <table class="form-table">
    <tr>
    <th>
    <label for="address"><?php _e('Address', 'your_textdomain'); ?>
    </label></th>
    <td>
    <input type="text" name="address" id="address" value="<?php echo esc_attr( get_the_author_meta( 'address', $user->ID ) ); ?>" class="regular-text" /><br />
    <span class="description"><?php _e('Please enter your address.', 'your_textdomain'); ?></span>
    </td>
    </tr>
    <tr>
    <th>
    <label for="twitter_link"><?php _e('Twitter Link', 'your_textdomain'); ?>
    </label></th>
    <td>
    <input type="url" name="twitter_link" id="twitter_link" value="<?php echo esc_attr( get_the_author_meta( 'twitter_link', $user->ID ) ); ?>" class="regular-text" /><br />
    <span class="description"><?php _e('Please enter your twitter account link.', 'your_textdomain'); ?></span>
    </td>
    </tr>
    <tr>
    <th>
    <label for="instagram_link"><?php _e('Instagram Link', 'your_textdomain'); ?>
    </label></th>
    <td>
    <input type="url" name="instagram_link" id="instagram_link" value="<?php echo esc_attr( get_the_author_meta( 'instagram_link', $user->ID ) ); ?>" class="regular-text" /><br />
    <span class="description"><?php _e('Please enter your instagram account link.', 'your_textdomain'); ?></span>
    </td>
    </tr>
	</table>
<?php }
function fb_save_custom_user_profile_fields( $user_id ) {

	if ( !current_user_can( 'edit_user', $user_id ) )
		return FALSE;
  //update_usermeta( $user_id, 'designation', $_POST['designation'] );
	update_usermeta( $user_id, 'address', $_POST['address'] );
  update_usermeta( $user_id, 'twitter_link', $_POST['twitter_link'] );
  update_usermeta( $user_id, 'instagram_link', $_POST['instagram_link'] );
}

add_action( 'show_user_profile', 'fb_add_custom_user_profile_fields' );
add_action( 'edit_user_profile', 'fb_add_custom_user_profile_fields' );
add_action( 'personal_options_update', 'fb_save_custom_user_profile_fields' );
add_action( 'edit_user_profile_update', 'fb_save_custom_user_profile_fields' );

function add_custom_meta_boxes() {
    // Define the custom attachment for posts
    add_meta_box(
        'wp_custom_attachment', // Unique ID
        'Breaking News Points', // Title
        'wp_custom_attachment', // Callback function
        'post', //post type
        'advanced', // Context
        'high'          // Priority
    );
    add_meta_box(
        'wp_custom_article_logo', // Unique ID
        'Piad Article Logo', // Title
        'wp_custom_article_logo', // Callback function
        'post', //post type
        'advanced', // Context
        'low'          // Priority
    );
} // end add_custom_meta_boxes
add_action('add_meta_boxes', 'add_custom_meta_boxes');

function wp_custom_attachment() {
    wp_nonce_field(plugin_basename(__FILE__), 'wp_custom_attachment_nonce');
		$video =  get_post_meta(get_the_ID(), 'wp_custom_aws_video', true);
    $html = '';
    ob_start();
    include plugin_dir_path(__FILE__).'metabox/news-points.php';
    $html .= ob_get_contents();
    ob_end_clean();
    echo $html;
}

function wp_custom_article_logo() {
    wp_nonce_field(plugin_basename(__FILE__), 'wp_custom_article_logo_nonce');
		$video =  get_post_meta(get_the_ID(), 'wp_custom_article_logo', true);
    $html = '';
    ob_start();
    include plugin_dir_path(__FILE__).'metabox/paid-article-logo.php';
    $html .= ob_get_contents();
    ob_end_clean();
    echo $html;
}

add_action('save_post', 'save_custom_meta_data');
function save_custom_meta_data($id) {
   if(isset($_POST['my_hidden_flag'])){
     if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
       return $id;
     }

     if('page' == $_POST['post_type']) {
       if(!current_user_can('edit_page', $id)) {
         return $id;
       }
     } else {
         if(!current_user_can('edit_page', $id)) {
             return $id;
         }
     }
     $points = [];
     if(!empty($_POST['breaking_news_point'])){
       $breaking_news_point = $_POST['breaking_news_point'];
       //print_r($breaking_news_point);

       foreach($breaking_news_point['title'] as $key=>$b_point){
         $point = [];
         $point['title'] = $b_point;
         $point['url'] = $breaking_news_point['url'][$key];
         array_push($points,$point);
       }
     }
     $points =  json_encode($points,JSON_UNESCAPED_UNICODE);
     //add_post_meta($id, 'breaking_news_point', $breaking_news_point);
     update_post_meta($id, 'breaking_news_point', $points);
   }

   /*save custom logo file*/
   if ( ! empty( $_FILES['paid_article_logo']['name'] ) ) {
		$supported_types = array( 'image/jpg','image/jpeg','image/svg','image/gif','image/png' );
		$arr_file_type = wp_check_filetype( basename( $_FILES['paid_article_logo']['name'] ) );
		$uploaded_type = $arr_file_type['type'];

		if ( in_array( $uploaded_type, $supported_types ) ) {
			$upload = wp_upload_bits($_FILES['paid_article_logo']['name'], null, file_get_contents($_FILES['paid_article_logo']['tmp_name']));
			if ( isset( $upload['error'] ) && $upload['error'] != 0 ) {
				wp_die( 'There was an error uploading your file. The error is: ' . $upload['error'] );
			} else {
				//add_post_meta( $id, 'wp_custom_paid_logo_attachment', $upload );
				update_post_meta( $id, 'wp_custom_paid_logo_attachment', $upload );
			}
		}
		else {
			wp_die( "The file type that you've uploaded is not a PDF." );
		}
	}
}

function update_edit_form() {
	echo ' enctype="multipart/form-data"';
}
add_action('post_edit_form_tag','update_edit_form' );
?>
