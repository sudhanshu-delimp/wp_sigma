<div class="acme-news-ticker" id="newsTicker2">
  <div class="acme-news-ticker-label <?php echo $news_header_class; ?>" style="display:block;"><?php echo __($news_type,'sbs_news_blog'); ?></div>
  <div class="acme-news-ticker-box">
    <ul  class="my-news-ticker <?php echo $news_container_class; ?>" >
      <?php
      //sbs_print_this($latest_posts);
      if(!empty($latest_posts)){
        foreach ($latest_posts as $p){
          $post_title = wp_strip_all_tags($p->post_title);
          $breaking_news_points = get_post_meta($p->ID,'breaking_news_point',true);
          $breaking_news_points = json_decode($breaking_news_points);
          if(!empty($breaking_news_points) && $news_type == 'Breaking News'){
            foreach ($breaking_news_points as $news_points){
              $breaking_news_title =  wp_strip_all_tags($news_points->title);
              if(trim($breaking_news_title)!=""){
              ?>
      <li><div class="dot"></div><a href="<?php echo $news_points->url; ?>"><?php echo mb_substr($breaking_news_title,0,200,'utf-8'); ?></a></li>
      <?php
    }
            }
          } else { ?>
      <li><div class="dot"></div><a href="<?php echo get_permalink($p->ID); ?>"><?php echo mb_substr($post_title,0,200,'utf-8'); ?></a></li>
      <?php
        } }
      }
      ?>
    </ul>
  </div>
  <div class="acme-news-ticker-controls acme-news-ticker-horizontal-controls">
        <button class="acme-news-ticker-pause"></button>
  </div>
</div>
