<?php
class sbsRecentPostClass{

  public function get_article_count($post_type='post', $post_status='publish', $category_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $count_query = "SELECT count(p.ID) FROM {$wpdb->prefix}posts AS p";
    /*joins*/
    if(!empty($sbs_current_lang)){
      $count_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    if($category_id > 0){
      $count_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $count_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $count_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    /*where*/
    $count_query .=" WHERE p.post_type='{$post_type}' AND";
    if($category_id > 0){
      $count_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $count_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = '{$post_type}' ) ) AND";
    }
    $count_query .=" p.post_status='{$post_status}'";

    $rowcount = $wpdb->get_var($count_query);
    return $rowcount;
  }

  public function get_articles($start=0, $limit=5, $post_type='post', $post_status='publish', $category_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $paid_posts = [];
    $article_query = "SELECT p.ID,p.post_author,p.post_title,p.post_content,p.post_date,u.display_name,u.user_nicename FROM {$wpdb->prefix}posts AS p";
    /*joins*/
    if(!empty($sbs_current_lang)){
      $article_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $article_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    if($category_id > 0){
      $article_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $article_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $article_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    /*where*/
    $article_query .=" WHERE p.post_type='{$post_type}' AND";
    if($category_id > 0){
      $article_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $article_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = '{$post_type}' ) ) AND";
    }
    $article_query .=" p.post_status='{$post_status}'";
    $article_query .=" ORDER BY p.ID DESC LIMIT {$start},{$limit}";
    $paid_posts = $wpdb->get_results($article_query);
    if(!empty($paid_posts)){
      foreach($paid_posts as $key=>$post){
       $paid_posts[$key]->categories = get_the_category($post->ID);
       $paid_posts[$key]->post_link = get_permalink($post->ID);
       $paid_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
      }
    }
    return $paid_posts;
  }

  public function get_user_post($start=0, $limit=5 ,$user_id,$last_id = 0,$search_value=''){
    global $wpdb;
    global $sbs_current_lang;
    $latest_posts = [];
    $latest_post_query = "SELECT p.ID,p.post_author,p.post_title,p.post_content,p.post_date,u.display_name,u.user_nicename FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $latest_post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    $latest_post_query .=" WHERE p.post_type='post' AND p.post_status='publish' AND p.post_author = {$user_id} AND";
    if($search_value!=''){
      $latest_post_query .= "(p.post_title LIKE '%{$search_value}%' OR p.post_content LIKE '%{$search_value}%') AND";
    }
    if($last_id > 0){
      if(!empty($sbs_current_lang)){
        $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
      }
      $latest_post_query .="   p.ID < {$last_id} ORDER BY p.ID DESC LIMIT {$limit}";
    }
    else{
      if(!empty($sbs_current_lang)){
        $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) )";
      }
      $latest_post_query .="  ORDER BY p.ID DESC LIMIT {$start},{$limit}";
    }
    $latest_posts = $wpdb->get_results($latest_post_query);
    if(!empty($latest_posts)){
      foreach($latest_posts as $key=>$post){
       $post_category = get_the_category($post->ID)[0];
       $user_detail = get_user_by('slug',$post->user_nicename);

       $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_posts[$key]->category_name = $post_category->cat_name;
       $latest_posts[$key]->category_link = get_category_link($post_category->cat_ID);
       $latest_posts[$key]->post_link = get_permalink($post->ID);
       $latest_posts[$key]->category_name = get_the_category($post->ID)[0]->cat_name;
       $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
       $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
       //$latest_posts[$key]->post_image_url = get_the_post_thumbnail_url($post->ID, ['height'=>100,'width'=>100]);
      }
    }
    //print_this($latest_post_query,1);
    return $latest_posts;
    //return $latest_post_query;
  }


  public function get_latest_post_author($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $latest_posts = [];
    $latest_post_query = "SELECT max(p.ID) as post_id,u.ID AS user_id,u.display_name,u.user_nicename FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $latest_post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    $latest_post_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(p.post_author = um.user_id && um.meta_key = 'wp_capabilities')";
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE um.meta_value LIKE '%opinion_writer%' AND p.post_type='{$type}' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if($last_id > 0){
      //$latest_post_query .=" p.post_status='publish' AND p.ID < {$last_id} AND ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) and u.ID NOT IN (1,2) GROUP BY p.post_author LIMIT {$limit}";
    }
    else{
      if(!empty($sbs_current_lang)){
        $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
      }
      $latest_post_query .=" p.post_status='publish'  GROUP BY p.post_author LIMIT {$limit}";
    }
    $latest_posts = $wpdb->get_results($latest_post_query);
    if(!empty($latest_posts)){
      foreach($latest_posts as $key=>$post){
      if($category_id > 0){
        $post_category = get_cat_name( $category_id );
      }else{
        $post_category = get_the_category($post->post_id)[0];
        $post_category = $post_category->cat_name;
        $category_id = $post_category->cat_ID;
      }
       $user_detail = get_user_by('slug',$post->user_nicename);
       $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_posts[$key]->category_name = $post_category;
       $latest_posts[$key]->post_link = get_permalink($post->post_id);
       $latest_posts[$key]->post_title = get_the_title($post->post_id);
       $latest_posts[$key]->post_content = get_post_field('post_content', $post->post_id);
       $latest_posts[$key]->post_date = get_post_field('post_date', $post->post_id);
       $latest_posts[$key]->post_author =  get_post_field('post_author', $post->post_id);
       $latest_posts[$key]->category_link = get_category_link($category_id);
       $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
       $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->post_id), 'single-post-thumbnail')[0];
      }
    }
    // sbs_print_this($latest_posts,1);
    return $latest_posts;
  }
  public function get_opinionPost($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $latest_posts = [];
    $latest_post_query = "SELECT p.ID,p.post_author,p.post_title,p.post_content,p.post_date,u.display_name,u.user_nicename FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $latest_post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    $latest_post_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(p.post_author = um.user_id && um.meta_key = 'wp_capabilities')";
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE um.meta_value LIKE '%opinion_writer%' AND p.post_type='{$type}' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    if($last_id > 0){
      $latest_post_query .=" p.post_status='publish' AND p.ID < {$last_id} ORDER BY p.ID DESC LIMIT {$limit}";
    }
    else{
      $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$start},{$limit}";
    }
    $latest_posts = $wpdb->get_results($latest_post_query);
    if(!empty($latest_posts)){
      foreach($latest_posts as $key=>$post){
        $user_detail = get_user_by('slug',$post->user_nicename);

       $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_posts[$key]->category_name = get_the_category($post->ID)[0]->cat_name;
       $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
       $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
      }
    }
    //sbs_print_this($latest_post_query,1);
    return $latest_posts;
  }

  public function get_authors($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $latest_users = [];
    $latest_users_query = "SELECT u.ID AS user_id,u.user_nicename,u.display_name FROM {$wpdb->prefix}users AS u";
    //$latest_users_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(u.ID = um.user_id && um.meta_key = 'wp_user_level') WHERE um.meta_value IN (10,2)";
    $latest_users_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(u.ID = um.user_id && um.meta_key = 'wp_capabilities') WHERE um.meta_value LIKE '%opinion_writer%'";
    if($last_id > 0){
      $latest_users_query .=" AND u.ID < {$last_id} ORDER BY u.ID DESC LIMIT {$limit}";
    }
    else{
      $latest_users_query .=" ORDER BY u.ID DESC LIMIT {$start},{$limit}";
    }
    $latest_users = $wpdb->get_results($latest_users_query);
    if(!empty($latest_users)){
      foreach($latest_users as $key=>$user){
        $user_detail = get_user_by('slug',$user->user_nicename);

       $latest_users[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_users[$key]->user_designation = get_user_meta($user->user_id,'designation',true);
       $latest_users[$key]->user_image_url = get_avatar_url($user->user_id, array('size' => 100));
      }
    }
    return $latest_users;
  }

  public function get_post($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $latest_posts = [];
    $latest_post_query = "SELECT p.ID,p.post_author,p.post_title,p.post_content,p.post_date,u.display_name,u.user_nicename FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $latest_post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE p.post_type='{$type}' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    if($last_id > 0){
      $latest_post_query .=" p.post_status='publish' AND p.ID < {$last_id} ORDER BY p.ID DESC LIMIT {$limit}";
    }
    else{
      $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$start},{$limit}";
    }
    $latest_posts = $wpdb->get_results($latest_post_query);
    if(!empty($latest_posts)){
      foreach($latest_posts as $key=>$post){
        $user_detail = get_user_by('slug',$post->user_nicename);

       $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_posts[$key]->category_name = get_the_category($post->ID)[0]->cat_name;
       $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
       $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
      }
    }
    //sbs_print_this($latest_posts,1);
    return $latest_posts;
  }

  public function get_trending_post($start=0, $limit=5 ,$type = 'post', $category_id = 0, $last_id = []){
    global $wpdb;
    global $sbs_current_lang;
    $latest_posts = [];
    $latest_post_query = "SELECT p.ID,p.post_author,p.post_title,p.post_content,p.post_date,u.display_name,u.user_nicename,pm.meta_value FROM {$wpdb->prefix}postmeta AS pm";
    $latest_post_query .=" LEFT JOIN {$wpdb->prefix}posts AS p ON(pm.post_id=p.ID)";
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $latest_post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE p.post_type='{$type}' AND pm.meta_key LIKE '%post_views_count%' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    if(count($last_id) > 0){
      $latest_post_query .=" p.post_status='publish' AND p.ID NOT IN (".implode(",",$last_id).") ORDER BY cast(meta_value as unsigned)  DESC LIMIT {$limit}";
    }
    else{
      $latest_post_query .=" p.post_status='publish' ORDER BY cast(meta_value as unsigned)  DESC LIMIT {$start},{$limit}";
    }
    $latest_posts = $wpdb->get_results($latest_post_query);
    if(!empty($latest_posts)){
      foreach($latest_posts as $key=>$post){
       $user_detail = get_user_by('slug',$post->user_nicename);
       $latest_posts[$key]->user_role = ($user_detail->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $user_detail->roles[0])):'Author';
       $latest_posts[$key]->category_name = get_the_category($post->ID)[0]->cat_name;
       $latest_posts[$key]->user_image_url = get_avatar_url($post->post_author, array('size' => 100));
       $latest_posts[$key]->post_image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail')[0];
      }
    }
    //sbs_print_this($latest_post_query,1);
    return $latest_posts;
  }

  public function get_authors_count(){
    global $wpdb;
    global $sbs_current_lang;
    $post_query = "SELECT COUNT(u.ID) FROM {$wpdb->prefix}users AS u";
    //$post_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(u.ID = um.user_id && um.meta_key = 'wp_user_level') WHERE um.meta_value IN (10,2)";
    $post_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(u.ID = um.user_id && um.meta_key = 'wp_capabilities') WHERE um.meta_value LIKE '%opinion_writer%'";
    $rowcount = $wpdb->get_var($post_query);
    return $rowcount;
  }

  public function get_post_count($type='post',$category_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $post_query = "SELECT COUNT(p.ID) FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    if($category_id > 0){
      $post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $post_query .=" WHERE p.post_type='{$type}' AND";
    if($category_id > 0){
      $post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $post_query .=" p.post_status='publish'";
    $rowcount = $wpdb->get_var($post_query);
    return $rowcount;
  }

  public function get_opinion_post_count($type='post',$category_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $post_query = "SELECT COUNT(p.ID) FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $post_query .= " LEFT JOIN {$wpdb->prefix}users AS u ON(p.post_author=u.ID)";
    $post_query .=" LEFT JOIN {$wpdb->prefix}usermeta AS um ON(p.post_author = um.user_id && um.meta_key = 'wp_capabilities')";
    if($category_id > 0){
      $post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $post_query .=" WHERE p.post_type='{$type}' AND um.meta_value LIKE '%opinion_writer%' AND";
    if($category_id > 0){
      $post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $post_query .=" p.post_status='publish'";
    $rowcount = $wpdb->get_var($post_query);
    return $rowcount;
  }

  public function get_trending_post_count($type='post',$category_id = 0){
    global $wpdb;
    global $sbs_current_lang;
    $post_query = "SELECT COUNT(pm.post_id) FROM {$wpdb->prefix}postmeta AS p";
    $post_query .=" LEFT JOIN {$wpdb->prefix}posts AS p ON(pm.post_id=p.ID)";
    if(!empty($sbs_current_lang)){
      $post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    if($category_id > 0){
      $post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $post_query .=" WHERE p.post_type='{$type}' AND pm.meta_key LIKE '%post_views_count%' AND";
    if($category_id > 0){
      $post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
      $post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $post_query .=" p.post_status='publish'";
    $rowcount = $wpdb->get_var($post_query);
    return $rowcount;
  }

  public function get_user_post_count($user_id,$search_value = ''){
    global $wpdb;
    global $sbs_current_lang;
    $post_query = "SELECT COUNT(p.ID) FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
      $post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    $post_query .=" WHERE p.post_type='post' AND p.post_status='publish' AND";
    if($search_value!=''){
      $post_query .= "(p.post_title LIKE '%{$search_value}%' OR p.post_content LIKE '%{$search_value}%') AND";
    }
    if(!empty($sbs_current_lang)){
      $post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $post_query .=" p.post_author={$user_id}";
    $rowcount = $wpdb->get_var($post_query);
    return $rowcount;
  }

  public function loadMorePost($request=[]){
    $start = 0;
    $last_id = $request['last_id'];
    $limit = $request['limit'];
    $card_image = $request['card_image'];
    $type =  (isset($request['type']))?trim($request['type']):'post';
    $category_id =  (isset($request['category_id']))?trim($request['category_id']):0;
    $posts  = $this->get_post($start, $limit, $type, $category_id, $last_id);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        if($card_image == 'post_image_url'){
          include plugin_dir_path(__FILE__).'../view/post/single-post.php';
        }
        else{
            include plugin_dir_path(__FILE__).'../view/single-post.php';
        }
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    return ['template'=>$template,'last_id'=>$last_id];
  }

  public function loadMoreTrendingPost($request=[]){
    $start = 0;
    $last_id = $request['last_id'];
    $limit = $request['limit'];
    $card_image = $request['card_image'];
    $type =  (isset($request['type']))?trim($request['type']):'post';
    $category_id =  (isset($request['category_id']))?trim($request['category_id']):0;
    $loader =  (isset($request['loader']))?trim($request['loader']):'false';
    $post_id_array = explode(",",$last_id);
    $posts  = $this->get_trending_post($start, $limit, $type, $category_id, $post_id_array);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $post_id_array[] = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/trending/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    $last_id = implode(",",$post_id_array);
    return ['template'=>$template,'last_id'=>$last_id];
  }

  public function loadMoreAuthors($request=[]){
    $start = 0;
    $last_id = $request['last_id'];
    $limit = $request['limit'];
    $card_image = $request['card_image'];
    $type =  (isset($request['type']))?trim($request['type']):'post';
    $loader =  (isset($request['loader']))?trim($request['loader']):'false';
    $category_id =  (isset($request['category_id']))?trim($request['category_id']):0;
    $posts  = $this->get_authors($start, $limit, $type, $category_id, $last_id);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->user_id;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/author-list/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    return ['template'=>$template,'last_id'=>$last_id];
  }

  public function loadAuthorMorePost($request=[]){
    $start = 0;
    $last_id = $request['last_id'];
    $limit = $request['limit'];
    $user_id = $request['user_id'];
    $posts  = $this->get_user_post($start, $limit,$user_id,$last_id);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/author/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    return ['template'=>$template,'last_id'=>$last_id];
  }

  public function previewPosts($attributes=[]){
    global $sbs_current_lang;
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $type =  (isset($attributes['type']))?trim($attributes['type']):'post';
    $category_id =  (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $posts  = $this->get_post($start, $limit, $type, $category_id);
    $rowcount = $this->get_post_count($type,$category_id);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }

  public function previewLatestPostAuthor($attributes=[]){
    global $sbs_current_lang;
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $type =  (isset($attributes['type']))?trim($attributes['type']):'post';
    $category_id =  (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $module_type =  (isset($attributes['module_type']))?trim($attributes['module_type']):'one';
    switch($module_type){
      case 'one':{
        $single_post_path = plugin_dir_path(__FILE__).'../view/author-list/single-post.php';
      }break;
      case 'two':{
        $single_post_path = plugin_dir_path(__FILE__).'../view/author-list/type/single-post-'.trim($module_type).'.php';
      }break;
    }
    // $posts  = $this->get_latest_post_author($start, $limit, $type, $category_id);
    // $rowcount = $this->get_post_count($type,$category_id);
    if($attributes['loader'] === 'true'){
      $posts  = $this->get_authors($start, $limit, $type, $category_id);
      $rowcount = $this->get_authors_count();
    }
    else{
      $posts  = $this->get_latest_post_author($start, $limit, $type, $category_id);
      $rowcount = $this->get_authors_count($type,$category_id);
    }
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->user_id;
        ob_start();
        include $single_post_path;
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/author-list/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }

  public function previewAuthorPosts($attributes=[]){
    global $sbs_current_lang;
    $start = 0;
    $last_id = 0;
    $from = (!empty($attributes['from']))?trim($attributes['from']):'';
    $limit = $attributes['limit'];
    $user_id = $attributes['user_id'];
    $search_value = (!empty($attributes['search_value']))?trim($attributes['search_value']):'';
    $posts  = $this->get_user_post($start, $limit, $user_id, $last_id, $search_value);
    $rowcount = $this->get_user_post_count($user_id,$search_value);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/author/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    if($from == 'search_bar'){
      if($template!=''){
        ob_start();
        include plugin_dir_path(__FILE__).'../view/author/search-section-post.php';
        $search_bar .= ob_get_contents();
        ob_end_clean();
        return $search_bar;
      }
      else{
        return '<p>Sorry, there is no data to display</p>';
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/author/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
    //return $posts;
  }

  public function previewPostType($attributes=[]){
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $type = (isset($attributes['type']))?trim($attributes['type']):'post';
    $category_id = (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $posts  = $this->get_post($start, $limit, $type, $category_id);
    $rowcount = $this->get_post_count($type,$category_id);
    $template = '';
    $out_put_string = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/post/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/post/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }

  public function previewOpinionPost($attributes=[]){
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $init_post_count = $attributes['init_post_count'];
    $type = (isset($attributes['type']))?trim($attributes['type']):'post';
    $category_id = (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $posts  = $this->get_opinionPost($start, $init_post_count, $type, $category_id);
    $rowcount = $this->get_opinion_post_count($type,$category_id);
    $template = '';
    $out_put_string = '';
    if(!empty($posts)){
      foreach($posts as $key=>$post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/opinion/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/opinion/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }

  public function loadMoreOpinionPost($request=[]){
    $start = 0;
    $last_id = $request['last_id'];
    $limit = $request['limit'];
    $card_image = $request['card_image'];
    $type =  (isset($request['type']))?trim($request['type']):'post';
    $number_of_post = (isset($request['number_of_post']))?trim($request['number_of_post']):0;
    $category_id =  (isset($request['category_id']))?trim($request['category_id']):0;
    $posts  = $this->get_opinionPost($start, $limit, $type, $category_id, $last_id);
    $template = '';
    $key = ($number_of_post);
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/opinion/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
        $key++;
      }
    }
    return ['template'=>$template,'last_id'=>$last_id];
  }

  public function previewTrendingPostType($attributes=[]){
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $type = (isset($attributes['type']))?trim($attributes['type']):'post';
    $category_id = (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $loader =  (isset($attributes['loader']))?trim($attributes['loader']):'false';
    $posts  = $this->get_trending_post($start, $limit, $type, $category_id);
    $rowcount = $this->get_trending_post_count($type,$category_id);
    $template = '';
    $out_put_string = '';
    $post_id_array = [];
    if(!empty($posts)){
      foreach($posts as $key=>$post){
        //$last_id = $post->ID;
        $post_id_array[]=$post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/trending/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/trending/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }

  public function getNewsHeadlines($attributes){
    global $wpdb;
    global $sbs_current_lang;
    $today_date = sbs_getDateTime('','Y-m-d');
    $direction = ($sbs_current_lang == 'en') ? 'right' : 'left';
    if($_SERVER['HTTP_HOST'] === 'localhost'){
      $category_id = ($sbs_current_lang == 'en') ? 17 : 15; //breaking news
    }
    else{
      $category_id = ($sbs_current_lang == 'en') ? 39388 : 39389; //breaking news
    }
    $limit = 10;
    $type = 'post';
    $today = getdate();
    $news_type = 'Breaking News';
    $news_header_class = 'news_header_class';
    $news_container_class = '';
    $latest_posts = [];
    $latest_post_query = '';
    $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
        $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE p.post_type='{$type}' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
        $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $latest_post_query .="  p.post_date LIKE '%{$today_date}%' AND p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
    $latest_posts = $wpdb->get_results($latest_post_query);

    if(count($latest_posts) == 0){
      $latest_post_query = '';
      if($_SERVER['HTTP_HOST'] === 'localhost'){
        $category_id = ($sbs_current_lang == 'en') ? 18 : 16;  // loacl news
      }
      else{
        $category_id = ($sbs_current_lang == 'en') ? 3 : 3;  // loacl news
      }
      $news_type = 'News';
      $news_header_class = '';
      $news_container_class = 'news_container_class';

      $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
      if(!empty($sbs_current_lang)){
          $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
      }
      if($category_id > 0){
        $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
        $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
        $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
      }
      $latest_post_query .=" WHERE p.post_type='{$type}' AND";
      if($category_id > 0){
        $latest_post_query .=" trm.term_id={$category_id} AND";
      }
      if(!empty($sbs_current_lang)){
          $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
      }
      $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
      $latest_posts = $wpdb->get_results($latest_post_query);
    }
      $template = '';
      ob_start();
      include plugin_dir_path(__FILE__).'../view/news-post.php';
      $template .= ob_get_contents();
      ob_end_clean();
      return $template;
  }

  public function getNewsHeadlinesTicker($attributes){
    global $wpdb;
    global $sbs_current_lang;
    $today_date = sbs_getDateTime('','Y-m-d');
    $direction = ($sbs_current_lang == 'en') ? 'right' : 'left';
    if($_SERVER['HTTP_HOST'] === 'localhost'){
      $category_id = ($sbs_current_lang == 'en') ? 16 : 17; //breaking news
    }
    else{
      $category_id = ($sbs_current_lang == 'en') ? 39388 : 39389; //breaking news
    }
    $limit = 10;
    $type = 'post';
    $today = getdate();
    $news_type = 'Breaking News';
    $news_header_class = 'news_header_class';
    $news_container_class = '';
    $latest_posts = [];
    $latest_post_query = '';
    $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
    if(!empty($sbs_current_lang)){
        $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
    }
    if($category_id > 0){
      $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
      $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
      $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
    }
    $latest_post_query .=" WHERE p.post_type='{$type}' AND";
    if($category_id > 0){
      $latest_post_query .=" trm.term_id={$category_id} AND";
    }
    if(!empty($sbs_current_lang)){
        $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
    }
    $latest_post_query .="  p.post_date LIKE '%{$today_date}%' AND p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
    $latest_posts = $wpdb->get_results($latest_post_query);

    if(count($latest_posts) == 0){
      $latest_post_query = '';
      if($_SERVER['HTTP_HOST'] === 'localhost'){
        $category_id = ($sbs_current_lang == 'en') ? 14 : 15;  // loacl news
      }
      else{
        $category_id = ($sbs_current_lang == 'en') ? 3 : 3;  // loacl news
      }
      $news_type = 'News';
      $news_header_class = '';
      $news_container_class = 'news_container_class';

      $latest_post_query = "SELECT p.ID,p.post_title FROM {$wpdb->prefix}posts AS p";
      if(!empty($sbs_current_lang)){
          $latest_post_query .=" JOIN wp_icl_translations t ON p.ID = t.element_id AND t.element_type = CONCAT('post_', p.post_type)";
      }
      if($category_id > 0){
        $latest_post_query .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
        $latest_post_query .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
        $latest_post_query .=" LEFT JOIN wp_terms trm ON trm.term_id = tax.term_id";
      }
      $latest_post_query .=" WHERE p.post_type='{$type}' AND";
      if($category_id > 0){
        $latest_post_query .=" trm.term_id={$category_id} AND";
      }
      if(!empty($sbs_current_lang)){
          $latest_post_query .=" ( ( t.language_code = '".$sbs_current_lang."' AND p.post_type = 'post' ) ) AND";
      }
      $latest_post_query .=" p.post_status='publish' ORDER BY p.ID DESC LIMIT {$limit}";
      $latest_posts = $wpdb->get_results($latest_post_query);
    }
      $template = '';
      ob_start();
      include plugin_dir_path(__FILE__).'../view/news-post-ticker/news-post-ticker.php';
      $template .= ob_get_contents();
      ob_end_clean();
      return $template;
  }

  public function previewPiadPosts($attributes){
    global $sbs_current_lang;
    $start = 0;
    $last_id = 0;
    $limit = $attributes['limit'];
    $post_type =  (isset($attributes['type']))?trim($attributes['type']):'post';
    $post_status =  (isset($attributes['status']))?trim($attributes['status']):'publish';
    $category_id =  (isset($attributes['category_id']))?trim($attributes['category_id']):0;
    $posts  = $this->get_articles($start, $limit, $post_type, $post_status, $category_id);
    $rowcount = $this->get_article_count($post_type, $post_status, $category_id);
    $template = '';
    if(!empty($posts)){
      foreach($posts as $post){
        $last_id = $post->ID;
        ob_start();
        include plugin_dir_path(__FILE__).'../view/articles/single-post.php';
        $template .= ob_get_contents();
        ob_end_clean();
      }
    }
    ob_start();
    include plugin_dir_path(__FILE__).'../view/articles/archive-post.php';
    $out_put_string .= ob_get_contents();
    ob_end_clean();
    return $out_put_string;
  }
}

?>
