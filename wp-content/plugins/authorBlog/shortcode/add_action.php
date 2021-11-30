<?php
add_action('sbs_enqueue_scripts', 'sbs_author_blog_script', 100 );

add_action('wp_ajax_load_recent_posts', 'load_recent_posts');
add_action('wp_ajax_nopriv_load_recent_posts', 'load_recent_posts');

add_action('wp_ajax_load_trending_posts', 'load_trending_posts');
add_action('wp_ajax_nopriv_load_trending_posts', 'load_trending_posts');

add_action('wp_ajax_load_recent_opinions', 'load_recent_opinions');
add_action('wp_ajax_nopriv_load_recent_opinions', 'load_recent_opinions');

add_action('wp_ajax_load_author_posts', 'load_author_posts');
add_action('wp_ajax_nopriv_load_author_posts', 'load_author_posts');

add_action('wp_ajax_search_author_posts', 'search_author_posts');
add_action('wp_ajax_nopriv_search_author_posts', 'search_author_posts');

add_action('wp_ajax_load_recent_authors', 'load_recent_authors');
add_action('wp_ajax_nopriv_load_recent_authors', 'load_recent_authors');
?>
