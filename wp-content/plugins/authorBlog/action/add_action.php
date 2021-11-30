<?php
add_action('category_add_form_fields','sbs_category_fields_new', 10 );
add_action('category_edit_form_fields','sbs_category_fields_edit', 10,2);

add_action('edited_category', 'sbs_save_category_fields', 10, 2);
add_action('create_category', 'sbs_save_category_fields', 10, 2);
?>
