<?php global $sbs_current_lang; ?>
<div class="col-sm-3 sbs-item-card">
  <div class="card" style="width: 100%;">
    <?php
    if($attributes['loader'] === 'false' || $loader === 'false'){
      ?>
      <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/opinion'; ?>"><span class="card_stickyOpinion"><?php echo  __('Opinion','sbs_author_blog'); ?></span></a>
      <?php
    }
    else{
      ?>
      <span class="card_stickyOpinion"><?php echo  __('Opinion','sbs_author_blog'); ?></span>
      <?php
    }
    ?>

      <img class="card-img-top" src="<?php echo $post->user_image_url;?>" alt="Card image cap">



  <div class="card-body">
  <small>
    <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>"><?php echo $post->display_name; ?></a>
  </small>
  <span class="card_OpinionWriter"><?php echo __('Opinion Writer','sbs_author_blog'); ?></span>
  <?php
  if($attributes['loader'] === 'false' || $loader === 'false'){
    ?>
    <a href="<?php echo $post->category_link;?>"><h6 class="card-category"><?php echo $post->category_name; ?></h6></a>
    <?php
  }
  ?>
  <?php
  if($attributes['loader'] === 'true' || $loader === 'true'){
    $class = 'author-bio';
    $content = get_user_meta($post->user_id,'description',true);
  }
  else{
    $class = 'post-content';
    $content = wp_strip_all_tags($post->post_content);
    ?>
    <a href="<?php echo $post->post_link;?>"><h4 class="card-title post-title"><?php echo $post->post_title; ?></h4></a>
    <?php
  }
  if(!empty(trim($content))){
  ?>
  <p class="card-text <?php echo $class; ?>"><?php echo mb_substr($content,0,110,'utf-8'); ?></p>
  <?php
  }
  if($attributes['loader'] === 'false' || $loader === 'false'){
    ?>
    <span class="sbs-post-date"><?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?></span>
    <a href="<?php echo $post->post_link;?>" class="view-btn btn btn-primary tttttttt"><?php echo __('Read Article','sbs_author_blog'); ?></a>
    <?php
  }
  else{
    ?>
    <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>" class="view-btn btn btn-primary"><?php echo __('Read Article','sbs_author_blog'); ?></a>
    <?php
  }
  ?>
  </div>
  </div>
</div>
