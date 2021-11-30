<?php global $sbs_current_lang; ?>
<div class="col-sm-3 trening-post-card  sbs-item-card">
  <div class="card" style="width: 100%;">
    <div class="sbs_image_hover">
       <a class="wraper-anchor" href="<?php echo get_permalink($post->ID);?>">
        <img class="card-img-top" src="<?php echo $post->post_image_url;?>" alt="Card image cap">
        <?php
        if($loader === 'true'){
          ?>
          <a href="<?php echo get_permalink($post->ID);?>"><?php echo __('Read More','sbs_author_blog'); ?></a>
          <?php
        }
        else{
          ?>
          <a class="trending-numbers" href="<?php echo get_permalink($post->ID);?>"><?php echo ($key+1); ?></a>
          <?php
        }
        ?>
        </a>
    </div>
  <div class="card-body">
  <!-- <small>
    <a href="<?php //echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>"><?php //echo $post->display_name; ?></a>
  </small> -->
  <a href="<?php echo get_permalink($post->ID);?>"><span class="card-title"><?php echo $post->post_title; ?></span></a>
  <?php $post_category = get_the_category($post->ID); ?>
  <!-- <a href="<?php echo esc_url( get_category_link($post_category[0]->cat_ID) ); ?>"><h6 class="card-title"><?php echo $post_category[0]->cat_name; ?></h6></a> -->
  <?php $post_content = wp_strip_all_tags($post->post_content);
  if(!empty(trim($post_content))){
    ?>
    <!-- <p class="card-text"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></p> -->
    <?php
  }
  ?>
  <div class="cs-entry__post-meta"><span class="cs-meta-date"><?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?></span> <span> المشاهدات : <?php echo $post->meta_value; ?></span></div>
  <!-- <a href="<?php echo get_permalink($post->ID);?>" class="view-btn btn btn-primary"><?php echo __('View Article','sbs_author_blog'); ?></a> -->
  </div>
  </div>
</div>
