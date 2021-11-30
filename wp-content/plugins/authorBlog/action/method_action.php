<?php
function sbs_category_fields_new( $taxonomy ) {
  wp_nonce_field('category_meta_new', 'category_meta_new_nonce');
  $html = '';
  ob_start();
  include plugin_dir_path(__FILE__).'view/youtube_playlist/add_youtube_playlist_field.php';
  $html .= ob_get_contents();
  ob_end_clean();
  echo $html;
}

function sbs_category_fields_edit( $term, $taxonomy ) {
  wp_nonce_field( 'category_meta_edit', 'category_meta_edit_nonce' ); // Create a Nonce so that we can verify the integrity of our data
  $youtube_play_list_id = get_term_meta($term->term_id, 'youtube_play_list_id', true);
  $html = '';
  ob_start();
  include plugin_dir_path(__FILE__).'view/youtube_playlist/edit_youtube_playlist_field.php';
  $html .= ob_get_contents();
  ob_end_clean();
  echo $html;
}

function sbs_save_category_fields($term_id) {
    if (!isset($_POST['youtube_play_list_id'])) {
        return;
    }
    update_term_meta($term_id,'youtube_play_list_id',sanitize_text_field($_POST['youtube_play_list_id']));
}

?>
