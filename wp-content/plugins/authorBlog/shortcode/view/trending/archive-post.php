<div class="row sbs_author_blog trendingNewsSingleP">
  <?php echo $template; ?>
</div>
<?php
if($attributes['loader'] === 'true' && $rowcount > count($posts)){
  ?>
    <button is_loader = "<?php echo $attributes['loader']; ?>" post-last-id="<?php echo implode(",", $post_id_array); ?>" card-image = 'post_image_url' post-limit="<?php echo $attributes['limit']; ?>" post-category="<?php echo $attributes['category_id']; ?>" id="trending_post_loader"><?php echo __('Load More','sbs_author_blog'); ?></button>
  <?php
}
?>
