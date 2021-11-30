<div class="row sbs-paid-post">
<div class="col-sm-4">
  <?php
   $custom_attach = get_post_meta( $post->ID, 'wp_custom_paid_logo_attachment', true );
   if(!empty($custom_attach['url'])){
     ?>
     <img src="<?php echo $custom_attach['url']; ?>" alt="paid-logo-image">
     <?php
   }
   ?>
  <!-- <img src="https://dev.albilad.site/wp-content/uploads/2021/09/Black.png" alt="paid-logo-image"> -->
</div>
<div class="col-sm-4 article-image">
  <?php
  if(!empty($post->post_image_url)){
    ?>
    <a href="<?php echo $post->post_link;?>"><img class="card-img-top" src="<?php echo $post->post_image_url;?>" alt="Card image cap"></a>
    <?php
  }
  ?>
</div>
<div class="col-sm-4 article-card">
  <?php
  if(!empty($post->categories)){
    ?>
    <ul class="article-category-ul">
    <?php
    foreach($post->categories as $category){  ?>
    <li class="article-category-li">
      <?php echo $category->cat_name;?>
    </li>
    <?php
    }
  }
  ?>
  </ul>
  <a href="<?php echo $post->post_link;?>">
  <div class="article-title">
    <?php echo $post->post_title; ?>
  </div>
  <div class="article-date">
    <?php echo sbs_getDateTime($post->post_date,'m/d/Y'); ?>
  </div>
  <div class="article-content">
    <?php
    $post_content = wp_strip_all_tags($post->post_content);
    echo mb_substr($post_content,0,200,'utf-8').'...';
    ?>
  </div>
  </a>
</div>
</div>
