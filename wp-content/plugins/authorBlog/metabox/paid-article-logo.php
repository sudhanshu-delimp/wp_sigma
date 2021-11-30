<?php
$custom_attach = get_post_meta( get_the_ID(), 'wp_custom_paid_logo_attachment', true );
?>
<style media="screen">
div#custom-paid-post-logo {
  display: flex;
  flex-direction: column;
}
</style>
<div id="custom-paid-post-logo">
  <?php
  if(!empty($custom_attach)){
    ?>
    <img src="<?php echo $custom_attach['url']; ?>" style="width: 100px;height: 100px;" alt="">
    <?php
  }
  ?>
  <label for=""><strong>Only jpg,jpeg,svg,gif and png file formats are allowed.</strong></label>
  <input type="file" name="paid_article_logo" value="">
</div>
