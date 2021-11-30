<div class="col-sm-3 opinion_section_one  sbs-item-card">
  <div class="card" style="width: 100%;">
    <div class="sbs_image_hover">
        <a href="<?php echo get_permalink($post->ID);?>"><img class="card-img-top" src="<?php echo $post->post_image_url;?>" alt="Card image cap"></a>
    </div>
  <div class="card-body">
    <?php $post_category = get_the_category($post->ID); ?>
  <span class="card-category"><a href="<?php echo esc_url( get_category_link($post_category[0]->cat_ID) ); ?>"><?php echo $post_category[0]->cat_name; ?></a></span>
  <a href="<?php echo get_permalink($post->ID);?>"><h4 class="card-title"><?php echo $post->post_title; ?></h4></a>

  <?php $post_content = wp_strip_all_tags($post->post_content); ?>
  <span class="sbs-post-date"><small>
    <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>"><?php echo $post->display_name; ?></a>
  </small> <?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?></span>
  <p class="card-text"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></p>
  </div>
  </div>
</div>
