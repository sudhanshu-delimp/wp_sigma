<?php global $sbs_current_lang; ?>
<div class="col-sm-3  sbs-item-card">
  <div class="card" style="width: 100%;">
	  <span class="card_stickyOpinion"><?php echo __('OPINION','sbs_author_blog'); ?></span>
  <img class="card-img-top" src="<?php echo $post->user_image_url;?>" alt="Card image cap">

  <div class="card-body">
  <small>
    <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>"><?php echo $post->display_name; ?></a>
  </small>
  <span class="card_OpinionWriter"><?php echo __('Opinion Writer','sbs_author_blog'); ?></span>
  <h4 class="card-title"><?php echo  __($post->user_role,'sbs_author_blog'); ?></h4>
  <h6 class="card-category"><?php echo get_the_category($post->ID)[0]->cat_name; ?></h6>
  <?php
  if($attributes['loader'] === 'true'){
    $class = 'author-bio';
    $content = get_user_meta($post->post_author,'description',true);
  }
  else{
    $class = 'post-content';
    $content = wp_strip_all_tags($post->post_content);
    ?>
    <a href="<?php echo get_permalink($post->ID);?>"><h4 class="card-title post-title"><?php echo $post->post_title; ?></h4></a>
    <?php
  }
  if(!empty(trim($content))){
    ?>
    <p class="card-text <?php echo $class; ?>"><?php echo mb_substr($content,0,110,'utf-8'); ?></p>
    <?php
  }
  ?>
  <span class="sbs-post-date"><?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?></span>
  <a href="<?php echo get_permalink($post->ID);?>" class="view-btn btn btn-primary"><?php echo __('View Article','sbs_author_blog'); ?></a>
  </div>
  </div>
</div>
