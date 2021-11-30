<?php
include_once plugin_dir_path(__FILE__).'add_shortcode.php';
include_once plugin_dir_path(__FILE__).'method_shortcode.php';
add_action('widgets_init','sbs_custom_sidebar');
function sbs_custom_sidebar() {
    register_sidebar(
        array (
            'name' => __( 'Promotion Sidebar One', 'sbs_author_blog' ),
            'id' => 'sbs_promotion_sidebar_one',
            'description' => __( 'sbs_promotion_sidebar_one', 'sbs_author_blog' ),
            'before_widget' => '<div class="widget-content sbs-promotion">',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array (
            'name' => __( 'Promotion Sidebar Two', 'sbs_author_blog' ),
            'id' => 'sbs_promotion_sidebar_two',
            'description' => __( 'sbs_promotion_sidebar_two', 'sbs_author_blog' ),
            'before_widget' => '<div class="widget-content sbs-promotion">',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array (
            'name' => __( 'Promotion Sidebar Three', 'sbs_author_blog' ),
            'id' => 'sbs_promotion_sidebar_three',
            'description' => __( 'sbs_promotion_sidebar_three', 'sbs_author_blog' ),
            'before_widget' => '<div class="widget-content sbs-promotion">',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );

    register_sidebar(
        array (
            'name' => __( 'Promotion Sidebar Four', 'sbs_author_blog' ),
            'id' => 'sbs_promotion_sidebar_four',
            'description' => __( 'sbs_promotion_sidebar_four', 'sbs_author_blog' ),
            'before_widget' => '<div class="widget-content sbs-promotion">',
            'after_widget' => "</div>",
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        )
    );
}
?>
