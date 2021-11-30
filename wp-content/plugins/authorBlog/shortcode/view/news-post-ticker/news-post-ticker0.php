<div class="bn-breaking-news" id="newsTicker2">
  <div class="bn-label <?php echo $news_header_class; ?>" style="display:block;"><?php echo __($news_type,'sbs_news_blog'); ?></div>
  <div class="bn-news">
    <ul  class="<?php echo $news_container_class; ?>" >
      <?php //var_dump($my_posts); die;
      if(!empty($my_posts)){
        foreach ($my_posts as $p){
          $post_title = wp_strip_all_tags($p->post_title);
          $breaking_news_points = get_post_meta($p->ID,'breaking_news_point',true);
          $breaking_news_points = json_decode($breaking_news_points);

          if(!empty($breaking_news_points) && $news_type == 'Breaking News'){
            foreach ($breaking_news_points as $news_points){
              $breaking_news_title =  wp_strip_all_tags($news_points->title);
              ?>
      <li><div class="dot"></div><a href="<?php echo $news_points->url; ?>"><?php echo mb_substr($breaking_news_title,0,200,'utf-8'); ?></a></li>
      <?php
            }
          } else { ?>
      <li><div class="dot"></div><a href="<?php echo get_permalink($p->ID); ?>"><?php echo mb_substr($post_title,0,200,'utf-8'); ?></a></li>
      <?php
        } }
      }
      ?>
    </ul>
  </div>
  <div class="bn-controls">
    <button><span class="bn-arrow bn-prev"></span></button>
    <button><span class="bn-arrow bn-next"></span></button>
  </div>
</div>
