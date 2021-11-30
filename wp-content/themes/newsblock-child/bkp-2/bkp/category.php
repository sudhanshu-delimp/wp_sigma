<?php get_header();
global $wpdb;
global $sitepress;
?>

<div id="primary" class="cs-content-area">
	<?php $category = get_category( get_query_var( 'cat' ) );?>
	<div class="cs-entry__header cs-entry__header-simple cs-video-wrap video-head">
		<div class="cs-entry__header-inner">

			<div class="cs-entry__header-info">
				<h1 class="cs-entry__title"><?php echo $category->cat_name;?></h1></div>


		</div>
	</div>
	<div class="cs-breadcrumbs" id="breadcrumbs"><span><span><a href="<?php echo get_site_url(); ?>"><span class="langEndisMr">Home</span> <span class="langArdisMr">الصفحة الرئيسية</span></a> <span class="cs-separator"></span><span class="breadcrumb_last" aria-current="page"><?php echo $category->cat_name;?></span></span></span></span></div>

	<?php
	$last_id = 0;
	$cat_sql = "SELECT p.ID,p.post_date,p.post_title,p.post_content,pm.meta_value as vidoe_url,t.name as category_name FROM wp_posts AS p";
	$cat_sql .=" JOIN wp_icl_translations trs ON p.ID = trs.element_id AND trs.element_type = CONCAT('post_', p.post_type)";
	$cat_sql .=" LEFT JOIN wp_postmeta AS pm ON(p.ID = pm.post_id)";
	$cat_sql .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
	$cat_sql .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
	$cat_sql .=" LEFT JOIN wp_terms t ON t.term_id = tax.term_id";
	$cat_sql .=" WHERE (pm.meta_key = 'csco_post_video_url' OR pm.meta_key != 'csco_post_video_url') AND pm.meta_value ='' AND p.post_status = 'publish' AND p.post_type = 'post' AND t.term_id={$category->cat_ID} AND ( ( trs.language_code = '".$sitepress->get_current_language()."' AND p.post_type = 'post' ) )";
	$cat_sql .=" GROUP BY pm.post_id ORDER BY p.ID DESC LIMIT 7";
	$recent_posts = $wpdb->get_results($cat_sql);
	// if(!empty($recent_posts)){
	// 	foreach($recent_posts as $key=>$post){
	// 		if($post->vidoe_url!=''){
	// 			unset($recent_posts[$key]);
	// 		}
	// 	}
	// }
	//echo '<h5>First: '.$cat_sql.'</h5>';
	?>
	<?php
	if(!empty($recent_posts)){
		?>
		<div class="category-container feature-post-conatin">
		<?php
		foreach($recent_posts as $key=>$post){
			$last_id = $post->ID;
			$post_image = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
			$post_content = wp_strip_all_tags($post->post_content);
			$post_category = get_the_category($post->ID);
			if($post->vidoe_url==''){
				?>
				<div class="col-sm-3 discover_more_items">
					<div class="card" style="width: 100%;">

				<div class="cs-entry__inner cs-entry__thumbnail cs-entry__overlay cs-overlay-ratio cs-ratio-original" data-scheme="inverse">
				<a href="<?php echo get_permalink($post->ID);?>" class="newanchor">
				<div class="cs-overlay-background">
					<img class="card-img-top" src="<?php echo $post_image;?>" alt="Card image cap">
					</div>
				<div class="cs-overlay-content">
				<span><?php echo __('Read More','sbs_author_blog'); ?></span>
					<div class="cs-entry__post-meta"><div class="cs-meta-reading-time"><span class="cs-meta-icon"><i class="cs-icon cs-icon-clock"></i></span>1 minute read</div></div>				
				</div>
				</a>
				</div>

					<div class="cs-entry__inner cs-entry__content">

						<div class="cs-entry__post-meta"><div class="cs-meta-category">
						<?php
						if(count($post_category) > 0){
							?>
							<ul class="post-categories">
								<?php
								foreach($post_category as $p_cat){
									?>
									<li><a href="<?php echo get_category_link($p_cat->cat_ID); ?>"><span class="cat"><?php echo $p_cat->cat_name; ?></span></a></li>
									<?php
								}
								?>
							</ul>
							<?php
						}
						?>
						</div></div>
						<div><h2 class="cs-entry__title "><a href="<?php echo get_permalink($post->ID);?>"><?php echo $post->post_title; ?></a></h2></div>
						<div class="cs-entry__excerpt"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></div>
						<div class="cs-entry__post-meta"><div class="cs-meta-date"><?php echo date('m/d/Y',strtotime($post->post_date)); ?></div></div>

	   </div>
					</div>
				</div>
				<?php
			}
		}
		?>
		</div>
		<?php
	}
	?>



	<div class="cat-video">
	<?php
	$video_sql = "SELECT p.ID,p.post_date,p.post_title,p.post_content,pm.meta_value as vidoe_url,t.name as category_name FROM wp_posts AS p";
	$video_sql .=" JOIN wp_icl_translations trs ON p.ID = trs.element_id AND trs.element_type = CONCAT('post_', p.post_type)";
	$video_sql .=" LEFT JOIN wp_postmeta AS pm ON(p.ID = pm.post_id)";
	$video_sql .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
	$video_sql .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
	$video_sql .=" LEFT JOIN wp_terms t ON t.term_id = tax.term_id";
	$video_sql .=" WHERE (pm.meta_key = 'csco_post_video_url') AND pm.meta_value !='' AND p.post_status = 'publish' AND p.post_type = 'post' AND t.term_id={$category->cat_ID} AND ( ( trs.language_code = '".$sitepress->get_current_language()."' AND p.post_type = 'post' ) )";
	$video_sql .=" GROUP BY pm.post_id ORDER BY p.ID DESC";
	$video_posts = $wpdb->get_results($video_sql);
	//echo '<h5>Video: '.$video_sql.'</h5>';
	// if(!empty($video_posts)){
	// 	foreach($video_posts as $key=>$post){
	// 		if($post->vidoe_url==''){
	// 			unset($video_posts[$key]);
	// 		}
	// 	}
	// }
	if(!empty($video_posts)){
		?>
       <div class="slide-code">
       	<?php echo do_shortcode('[rpsw_recent_slider limit="5" show_date="false" show_category_name="false" show_content="false" bullet="false" arrows="true" autoplay="true" autoplay="8000" speed="2000" show_author="false" show_read_more="false"]'); ?>
       </div>

		<div class="video-inner">
		<h1 class="sub-head video-head"><?php echo __('Latest Video','sbs_author_blog'); ?></h1>
		<div class="carousel-2">
		<?php
		foreach($video_posts as $key=>$post){
		$post_image = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
		$post_content = wp_strip_all_tags($post->post_content);
		if($post->vidoe_url!=''){
			?>
			<div class="col-sm-3">
			<div class="card" style="width: 100%;">
			<a href="<?php echo get_permalink($post->ID);?>"><img class="card-img-top" src="<?php echo $post_image;?>" alt="Card image cap"></a>
			<div class="card-body">
			<div class="post-cat cs-meta-category"><ul class="post-categories">
                        <li><a href="<?php echo get_category_link(get_the_category($post->ID)[0]->cat_ID); ?>"><span><?php echo get_the_category($post->ID)[0]->cat_name; ?></span></a></li></ul></div>
			<div class="post-ctnt"><div><p><strong><a href="<?php echo $post->vidoe_url; ?>"><?php echo $post->vidoe_url; ?></a></strong></p>
			<h2 class="card-title cs-entry__title"><a href="<?php echo get_permalink($post->ID);?>"><?php echo $post->post_title; ?></a></h2></div>
			<h4 class="card-title date cs-entry__post-meta"><?php echo date('m/d/Y',strtotime($post->post_date)); ?></h4></div>
			</div>
			</div>
			</div>
			<?php
		}
		}
		?>
		</div>
	    </div>
		<?php
	}
	?>
   </div>

	<?php
	$rowcount = getCategoryRestPostCount($category->cat_ID);
	$limit = 20;
	$cat_sql = "SELECT p.ID,p.post_date,p.post_title,p.post_content,pm.meta_value as vidoe_url,t.name as category_name FROM wp_posts AS p";
	$cat_sql .=" JOIN wp_icl_translations trs ON p.ID = trs.element_id AND trs.element_type = CONCAT('post_', p.post_type)";
	$cat_sql .=" LEFT JOIN wp_postmeta AS pm ON(p.ID = pm.post_id)";
	$cat_sql .=" LEFT JOIN wp_term_relationships rel ON rel.object_id = p.ID";
	$cat_sql .=" LEFT JOIN wp_term_taxonomy tax ON tax.term_taxonomy_id = rel.term_taxonomy_id";
	$cat_sql .=" LEFT JOIN wp_terms t ON t.term_id = tax.term_id";
	$cat_sql .=" WHERE (pm.meta_key = 'csco_post_video_url' OR pm.meta_key != 'csco_post_video_url') AND pm.meta_value ='' AND p.post_status = 'publish' AND p.post_type = 'post' AND ( ( trs.language_code = '".$sitepress->get_current_language()."' AND p.post_type = 'post' ) ) AND t.term_id={$category->cat_ID} AND p.ID<{$last_id}";
	$cat_sql .=" GROUP BY pm.post_id  ORDER BY p.ID DESC LIMIT {$limit}";
	$recent_posts = $wpdb->get_results($cat_sql);
	//echo '<h5>Second : '.$cat_sql.'</h5>';
	// if(!empty($recent_posts)){
	// 	foreach($recent_posts as $key=>$post){
	// 		if($post->vidoe_url!=''){
	// 			unset($recent_posts[$key]);
	// 		}
	// 	}
	// }
	if(!empty($recent_posts)){
		?>
		 <div class="cnvs-block-row cnvs-block-row-1632815721397 cnvs-block-row-columns-1 head-bod">
	             <div class="cnvs-block-row-inner">
		         <div class="cnvs-block-column cnvs-block-column-1632815721372">
	             <div class="cnvs-block-column-inner">
		         <div>
		         <h2 id="%d9%84%d8%a7-%d8%aa%d9%81%d9%88%d8%aa" class="cnvs-block-section-heading cnvs-block-section-heading-1632815721363 is-style-cnvs-block-section-heading-1 halignleft"><span class="cnvs-section-title"><?php echo __('Discover More','sbs_author_blog'); ?></span></h2>
		        </div></div></div></div>

	  </div>
		<div class="category-container recent-post-contain">
			<div class="col-sm-6 lft-side-contain">
			<div class="discover_more">
			<?php
			foreach($recent_posts as $key=>$post){
				$last_id = $post->ID;
				$post_image = wp_get_attachment_url(get_post_thumbnail_id($post->ID));
				$post_content = wp_strip_all_tags($post->post_content);
				if($post->vidoe_url==''){
					?>

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
						<div class="cs-entry__post-meta"><div class="cs-meta-category"><ul class="post-categories">
                        <li><a href="<?php echo get_category_link(get_the_category($post->ID)[0]->cat_ID); ?>"><span class="cat"><?php echo get_the_category($post->ID)[0]->cat_name; ?></span></a></li></ul></div></div>
						<div><h2 class="cs-entry__title "><a href="<?php echo get_permalink($post->ID);?>"><?php echo $post->post_title; ?></a></h2></div>
						<div class="cs-entry__excerpt"><?php echo mb_substr($post_content,0,110,'utf-8'); ?></div>
						<!-- <div class="video-url"><p><strong><a href="<?php echo $post->vidoe_url; ?>"><?php echo $post->vidoe_url; ?></a></strong></p></div> -->
						<div class="cs-entry__post-meta"><div class="cs-meta-date"><?php echo date('m/d/Y',strtotime($post->post_date)); ?></div></div>
						</div>
						</div>
					</div>
					<?php
				}
			}
			?>
			</div>
			<?php
			if($rowcount > count($recent_posts)){
			  ?>
			    <button post-last-id="<?php echo $last_id; ?>" post-cat-id="<?php echo $category->cat_ID; ?>" post-limit="<?php echo $limit; ?>" id="rest_post_loader"><?php echo __('Load More','sbs_author_blog'); ?></button>
			  <?php
			}
			?>
			</div>
			<div class="col-sm-6 ryt-side">
			<div class="categoryBottom_Right">
<?php

if ( is_active_sidebar( 'sidebar-main' ) ) : ?>
<div id="header-widget-area" class="chw-widget-area widget-area" role="complementary">
<?php dynamic_sidebar( 'sidebar-main' ); ?>
</div>
<?php endif; ?>

</div>
		</div>
		<?php
	}
	?>
	</div>
</div>
<?php get_footer(); ?>
