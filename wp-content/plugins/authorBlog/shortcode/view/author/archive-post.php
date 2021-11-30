<?php
if(count($posts) > 0){
?>
<div class="latest-opt-conatin">
	<div class="latest-opt-left">
	<div><h1><?php echo __('Latest Articles','sbs_author_blog'); ?></h1></div>
	<div class="search-opt"><input type="text" placeholder="Search.." user-id="<?php echo $attributes['user_id']; ?>"  post-limit="<?php echo $attributes['limit']; ?>" name="author_articles_search" id="author_articles_search"></div>
	</div>
	<div class="latest-opt-ryt recent-post">
	<div class="row sbs_author_blog lft-side">
		<?php echo $template; ?>
		<?php
	 if($attributes['loader'] === 'true' && $rowcount > count($posts)){
		?>
			<button post-last-id="<?php echo $last_id; ?>" user-id="<?php echo $attributes['user_id']; ?>" post-limit="<?php echo $attributes['limit']; ?>" id="author_post_loader"><?php echo __('Load More','sbs_author_blog'); ?></button>
		<?php
	}
	?>
	</div>
	<div class="opinion-sidebar">
		<div class="categoryBottom_Right">
<?php

if ( is_active_sidebar( 'sidebar-main' ) ) : ?>
<div id="header-widget-area" class="chw-widget-area widget-area" role="complementary">
<?php dynamic_sidebar( 'sidebar-main' ); ?>
</div>

<?php endif; ?>

</div>
		</div>
	</div>
</div>
<?php
}
?>
