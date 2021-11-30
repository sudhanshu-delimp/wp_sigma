<div id="custom-meta-breaking-news-point" style="display:none;">
  <small id="waiting_point">wait while we are laoding the points..</small>
<?php
$breaking_news_points = get_post_meta(get_the_ID(),'breaking_news_point',true);
$breaking_news_points = json_decode($breaking_news_points);
?>
<input type="hidden" name="my_hidden_flag" value="true" />
<table class="sbs_custom_post_meta_fields">
    <thead>
      <tr>
          <th>Point</th>
          <th>Url</th>
          <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="" style="display:none;">
          <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" disabled /></td>
          <td><input type="url" name="breaking_news_point[url][]" value="" disabled /></td>
          <td><a href="#" class="add_new_media">Add</a> | <a href="#" class="page-title-action remove">Remove</a></td>
      </tr>
      <?php
      if(!empty($breaking_news_points)){
        foreach($breaking_news_points as $key=>$news_points){
          ?>
          <tr class="point_row edit_breaking_news_point" style="display:none">
              <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="<?php echo $news_points->title;?>" /></td>
              <td><input type="url" name="breaking_news_point[url][]" value="<?php echo $news_points->url;?>" /></td>
              <td><a href="#" class="add_new_media">Add</a> <?php if($key>0){ ?> | <a href="#" class="page-title-action remove">Remove</a> <?php } ?></td>
          </tr>
          <?php
        }
      }
      else{
        ?>
        <tr class="point_row edit_breaking_news_point" style="display:none">
            <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" /></td>
            <td><input type="url" name="breaking_news_point[url][]" value="" /></td>
            <td><a href="#" class="add_new_media">Add</a></td>
        </tr>
        <tr class="point_row edit_breaking_news_point" style="display:none">
            <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" /></td>
            <td><input type="url" name="breaking_news_point[url][]" value="" /></td>
            <td><a href="#" class="add_new_media">Add</a></td>
        </tr>
        <tr class="point_row edit_breaking_news_point" style="display:none">
            <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" /></td>
            <td><input type="url" name="breaking_news_point[url][]" value="" /></td>
            <td><a href="#" class="add_new_media">Add</a></td>
        </tr>
        <tr class="point_row edit_breaking_news_point" style="display:none">
            <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" /></td>
            <td><input type="url" name="breaking_news_point[url][]" value="" /></td>
            <td><a href="#" class="add_new_media">Add</a></td>
        </tr>
        <tr class="point_row edit_breaking_news_point" style="display:none">
            <td><input type="text" minlength="20" name="breaking_news_point[title][]" value="" /></td>
            <td><input type="url" name="breaking_news_point[url][]" value="" /></td>
            <td><a href="#" class="add_new_media">Add</a></td>
        </tr>
        <?php
      }
      ?>
    </tbody>
</table>
</div>
<script>
(function($){
  var row_count = 5;
  var index_val = 0;
  $(document).on('click','.add_new_media', function(){
    $('.sbs_custom_post_meta_fields tbody tr:nth-child(1)').clone().appendTo($('.sbs_custom_post_meta_fields')).show().addClass("point_row").find('input').val('').removeAttr('disabled');
    row_count = jQuery(".point_row input[type=text]").length;
    getLenghtOfAllPoints();
  });
  $(document).on('click','.sbs_custom_post_meta_fields .remove', function(){
    if(row_count > 5){
      $(this).parent().parent().remove();
    }
    row_count = jQuery(".point_row input[type=text]").length;
    getLenghtOfAllPoints();
  });

  var action = 0;
  jQuery(document).on('click','.components-checkbox-control__input', function(){
    var selected_category = jQuery(this).parent().parent().find('label').text();
    if(selected_category === 'breaking news' || selected_category === 'أخبار عاجلة'){
      if(jQuery(this).prop('checked') == true){
        $("#custom-meta-breaking-news-point").show();
        $("#waiting_point").remove();
        $(".edit_breaking_news_point").show();
        action = 1;
        getLenghtOfAllPoints();
      }
      else{
        $("#custom-meta-breaking-news-point").hide();
        action = 0;
        jQuery(".editor-post-publish-button__button").removeAttr('disabled');
      }
    }
  })

  $(document).on('keyup','.point_row input',function(){
    if(action == 1){
      getLenghtOfAllPoints();
    }
  });

  var getLenghtOfAllPoints = function(){
  var k = 0;
  jQuery(".point_row input[type=text]").each(function(index,value){
      var text_value = jQuery.trim(jQuery(value).val());
      index_val = text_value.length;
      if(text_value.length < 25 || text_value.length == 0){
        jQuery(".editor-post-publish-button__button").attr("disabled","disabled");
      }
      else{
        k++;
        jQuery(".editor-post-publish-button__button").removeAttr('disabled');
      }
    });
    if(k < row_count){
      jQuery(".editor-post-publish-button__button").attr("disabled","disabled");
    }
    else{
      jQuery(".editor-post-publish-button__button").removeAttr('disabled');
    }
  //console.log(row_count + "k: "+ k);
  }
  var detectCategory = function(){
    jQuery(".editor-post-taxonomies__hierarchical-terms-list .components-checkbox-control__input").each(function(index,value){
    var selected_category = jQuery(value).parent().parent().find('label').text();
    if(selected_category === 'breaking news' || selected_category === 'أخبار عاجلة'){
      if(jQuery(value).prop('checked') == true){
        action = 1;
        $("#custom-meta-breaking-news-point").show();
        $("#waiting_point").remove();
        $(".edit_breaking_news_point").show();
        getLenghtOfAllPoints();
      }
    }
    });
  }
  setTimeout(function(){
    detectCategory();
  }, 6000);
})(jQuery)
</script>
