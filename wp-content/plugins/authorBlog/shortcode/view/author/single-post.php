<?php global $sbs_current_lang; ?>
<div class="col-sm-3 sbs-item-card">
  <div class="card" style="width: 100%;">
      <a href="<?php echo get_site_url().'/'.$sbs_current_lang.'/opinion'; ?>"><span class="card_stickyOpinion"><?php echo  __($post->user_role,'sbs_author_blog'); ?></span></a>

      <!-- <a href="<?php //echo get_permalink($post->ID);?>" class="btn btn-primary"><img class="card-img-top" src="<?php //echo $post->post_image_url;?>" alt="Card image cap"></a> -->

        <div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-original" data-scheme="inverse">
          <a href="<?php echo get_permalink($post->ID);?>" class="newanchor">
              <div class="cs-overlay-background">
                <img class="card-img-top" src="<?php echo $post->post_image_url;?>" alt="Card image cap">
              </div>
              <div class="cs-overlay-content">
                <span>اقرأ أكثر</span>
                <!-- <div class="cs-entry__post-meta"><div class="cs-meta-reading-time"><span class="cs-meta-icon"><i class="cs-icon cs-icon-clock"></i></span>1 <?php //echo __('minute read','sbs_author_blog'); ?></div></div> -->
              </div>
          </a>
			  </div>

    <div class="card-body">
      <h4 class="card-title"><a href="<?php echo $post->post_link;?>"><?php echo $post->post_title; ?></a></h4>
      <h6 class="card-category"><a href="<?php echo $post->category_link;?>"><?php echo $post->category_name; ?></a></h6>
      <?php $post_content = wp_strip_all_tags($post->post_content);
      if(!empty(trim($post_content))){
        ?>
        <p class="card-text"><?php echo mb_substr($post_content,0,50,'utf-8'); ?></p>
        <?php
      }
      ?>
      <p><small><?php echo sbs_getDateTime($post->post_date,'m/d/Y');?></small></p>
    </div>
  </div>
</div>
