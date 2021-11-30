<div class="col-sm-3 discover_more_items">
<div class="cs-entry__outer">

  <div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-original" data-scheme="inverse">
    <a href="<?php echo get_permalink($post->ID);?>" class="newanchor">
    <div class="cs-overlay-background">
      <img class="card-img-top" src="<?php echo $post_image;?>" alt="Card image cap">
                </div>
                <div class="cs-overlay-content">
    <span><?php echo __('Read More','sbs_author_blog'); ?></span>
      <div class="cs-entry__post-meta"><div class="cs-meta-reading-time"><span class="cs-meta-icon"><i class="cs-icon cs-icon-clock"></i></span>1 minute read</div></div></div>
      </a>
      </div>

  <div class="cs-entry__inner cs-entry__content">
  <div class="cs-entry__post-meta">
    <div class="cs-meta-category">
      <ul class="post-categories">
        <li><a href="<?php echo get_category_link($category_id); ?>"><span><?php echo get_cat_name($category_id); ?></span></a></li>
      </ul>
    </div>
  </div>
  <div><h2 class="cs-entry__title "><a href="<?php echo get_permalink($post->ID);?>"><?php echo $post->post_title; ?></a></h2></div>
  <div class="cs-entry__excerpt"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></div>
  <!-- <div class="video-url"><p><strong><a href="<?php echo $post->vidoe_url; ?>"><?php echo $post->vidoe_url; ?></a></strong></p></div> -->
  <div class="cs-entry__post-meta"><div class="cs-meta-date"><?php echo date('m/d/Y',strtotime($post->post_date)); ?></div></div>
  </div>
  </div>
</div>
