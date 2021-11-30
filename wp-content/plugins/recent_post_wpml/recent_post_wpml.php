
<?php

/**
*	Plugin Name: Recent Post Slider Wpml
* 	Plugin URI: https://delimp.com/
*	Description: This is the custom widgets plugins.
* 	Author: Delimp Dev
* 	Author URI: https://delimp.com/
*	Version:  1.3.0
*/
 defined('ABSPATH') || die("you Can't Access file Directory");

 register_activation_hook(__FILE__,'recent_post_slider_wpml_register_activation_hook');
	 function recent_post_slider_wpml_register_activation_hook(){
	 	echo "Plugin activated.";
 }
 register_deactivation_hook(__FILE__,'recent_post_slider_wpml_register_deactivation_hook');
 	function recent_post_slider_wpml_register_deactivation_hook(){
 		echo "Plugin deactivated.";
 	}
?>

<?php
function recent_post_slider_wpml(){
	do_action('ak_custom_register_scripts');
    $args = [
   'posts_per_page'         => 5,
   'post_type'              => 'post',
   'update_post_meta_cache' => false,
   'update_post_term_cache' => false,
];
$post_query = new \WP_Query( $args );
?>
<div class="slider-wrapper">
  <div class="loading">
    <?php echo __('loading....','sbs_slider_blog'); ?>
  </div>
	<div class="breking slider-container">
		<h3><?php echo __('Breaking News','sbs_slider_blog'); ?></h3>
	</div>
	<div id="slider" class="slider-container">
    <a href="#" class="control next"><img src="<?php echo plugins_url() . "/recent_post_wpml/assets/images/arrow_right.png" ?>" alt="arrow"></a>
    <a href="#" class="control prev"><img src="<?php echo plugins_url() . "/recent_post_wpml/assets/images/arrow_right.png" ?>" alt="arrow"></a>
	<ul>
		<?php
		if ( $post_query->have_posts() ) :
		  while ( $post_query->have_posts() ) :
		     $post_query->the_post();
		     ?>
		     <li><a href="<?php echo esc_url( get_the_permalink() ); ?>"><h4><?php the_title(); ?></h4></a></li>
		  <?php
		  endwhile;
		endif;
		wp_reset_postdata();
		?>
	</ul>
</div>
</div>

<?php

}
add_shortcode('wpml_recent_post_slider_list','recent_post_slider_wpml');

function wpml_recent_post_style(){
	wp_enqueue_style('recent_post_slider_style',plugins_url('/assets/css/recent-post-slider.css', __FILE__));
  	wp_enqueue_script('recent_post_slider_script',plugins_url('/assets/js/recent-post-slider.js', __FILE__ ), array('jquery'), rand());
}
add_action('ak_custom_register_scripts','wpml_recent_post_style');
