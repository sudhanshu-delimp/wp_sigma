<div class="row sbs_author_blog">
  <?php echo $template; ?>
</div>
<?php
if($attributes['loader'] === 'true' && $rowcount > count($posts)){
  ?>
    <button post-last-id="<?php echo $last_id; ?>" card-image = 'post_image_url' post-limit="<?php echo $attributes['limit']; ?>" post-category="<?php echo $attributes['category_id']; ?>" id="recent_post_loader"><?php echo __('Load More','sbs_author_blog'); ?></button>
  <?php
}
?>
