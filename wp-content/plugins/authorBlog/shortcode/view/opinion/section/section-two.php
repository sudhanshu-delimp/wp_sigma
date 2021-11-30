<div class="col-sm-3 opinion_section_two  sbs-item-card">
  <div class="card" style="width: 100%;">
  <div class="card-body">

    <?php $post_category = get_the_category($post->ID); ?>
    <a href="<?php echo esc_url( get_category_link($post_category[0]->cat_ID) ); ?>"><h6 class="card-title"><?php echo $post_category[0]->cat_name; ?></h6></a>
  <a href="<?php echo get_permalink($post->ID);?>"><h4 class="card-title"><?php echo $post->post_title; ?></h4></a>
  <?php $post_content = wp_strip_all_tags($post->post_content); ?>
  <p class="card-text"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></p>
   <span class="sbs-post-date"><small>
      <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/author/'.$post->user_nicename; ?>"><?php echo $post->display_name; ?></a>
    </small> <?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?></span>
  </div>
  </div>
</div>
