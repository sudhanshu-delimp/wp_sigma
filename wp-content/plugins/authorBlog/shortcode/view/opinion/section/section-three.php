<div class="col-sm-3 opinion_section_three  sbs-item-card">
  <div class="card" style="width: 100%;">
     <!-- add new layout  -->
      <div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-original" data-scheme="inverse">
        <a href="<?php echo get_permalink($post->ID);?>" class="newanchor">
          <div class="cs-overlay-background">
            <img class="card-img-top" src="<?php echo $post->post_image_url;?>" alt="Card image cap">
          </div>
          <div class="cs-overlay-content">
            <span>اقرأ أكثر</span>
            <!-- <div class="cs-entry__post-meta"><div class="cs-meta-reading-time"><span class="cs-meta-icon"><i class="cs-icon cs-icon-clock"></i></span>1 <//?php echo __('minute read','sbs_author_blog'); ?></div></div> -->
          </div>
        </a>
      </div>
  <!--  old layout backup
    <div class="sbs_image_hover">
        <img class="card-img-top" src="<?php //echo $post->post_image_url;?>" alt="Card image cap">
        <a href="<?php //echo get_permalink($post->ID);?>"><?php //echo __('Read More','sbs_author_blog'); ?></a>
    </div>
     -->
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
