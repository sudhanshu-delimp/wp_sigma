<?php echo $template; ?>
<?php
if($rowcount > count($posts)){
?>
  <button post-last-id="<?php echo $last_id; ?>" user-id="<?php echo $attributes['user_id']; ?>" post-limit="<?php echo $attributes['limit']; ?>" id="author_post_loader"><?php echo __('Load More','sbs_author_blog'); ?></button>
<?php
}
?>
