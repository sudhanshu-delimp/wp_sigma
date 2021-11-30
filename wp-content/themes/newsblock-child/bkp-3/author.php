<?php
get_header();
global $sitepress;
$theauthor = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
$user_detail = getUserDetail('slug',$theauthor->user_nicename);
$user_role = ($theauthor->roles[0] == 'opinion_writer')?ucwords(str_replace('_', ' ', $theauthor->roles[0])):'Author';
?>
	<div id="primary">
	<div class="opt-header-info ">
		<div class="cs-entry__header-info"><h1 class="cs-entry__title"><span><?php echo __($user_role,'sbs_author_blog'); ?></span></h1></div>
		<div class="yoast-breadcrumbs"><span><span><a href="<?php echo get_site_url(); ?>"><span class="langEndisMr"><?php echo __('Home','sbs_author_blog'); ?></span><span class="langArdisMr"><?php echo __('Opinion','sbs_author_blog'); ?></span></a><span class="cs-separator"></span> <span class="breadcrumb_last" aria-current="page"><?php echo __('Profile','sbs_author_blog'); ?></span></span></span></div>

	</div>
	<div class="sgl-user-profile-contain">
    <div class="sgl-user-profile">
      <div class="back-op-btn"><a href="<?php echo get_site_url().'/opinion/?lang='.$sitepress->get_current_language(); ?>"><?php echo __('Back to all opinion writers','sbs_author_blog'); ?></a> </div>
       <div class="sgl-user-inner">
    	<div class="user-left">
			<div class="user-left-col"><img src="<?php echo $user_detail->user_image; ?>" alt=""></div>
			<div class="user-ryt-col">
				<h2><?php echo $user_detail->display_name; ?></h2>
				<span class="card_OpinionWriter"><?php echo __($user_role,'sbs_author_blog'); ?></span>
				<p><?php echo $user_detail->description; ?></p>
			</div>
		</div>


		   <div class="user-ryt">
				<?php
				if(!empty(trim($user_detail->address))){
					?>
					<div><span><i class="fa fa-map-marker" aria-hidden="true"></i><?php echo $user_detail->address; ?></span></div>
					<?php
				}
				?>
				<?php
				if(!empty(trim($user_detail->address))){
					?>
					<div><span><i class="fa fa-envelope" aria-hidden="true"></i><?php echo $user_detail->user_email; ?></span></div>
					<?php
				}
				?>
				<?php
				if(!empty(trim($user_detail->twitter_link))){
				?>
				<div><span><a target="_blank" href="<?php echo $user_detail->twitter_link; ?>"><i class="fa fa-twitter" aria-hidden="true"></i>@<?php echo basename($user_detail->twitter_link); ?></a></span></div>
				<?php
				}
				if(!empty(trim($user_detail->instagram_link))){
				?>
				<div><span><a target="_blank" href="<?php echo $user_detail->instagram_link; ?>"><i class="fa fa-instagram" aria-hidden="true"></i>
				@<?php echo basename($user_detail->instagram_link); ?></a></span></div>
				<?php
				}
				?>
			</div>
		</div>

    </div>
	</div>



    <div class="latest-author"><?php echo do_shortcode("[show_author_blog user_id='{$user_detail->ID}' loader=true limit='8']");?></div>
	</div><!-- #primary -->


<?php get_footer(); ?>
