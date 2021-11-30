var removeSpinner = function(){
  jQuery(".fa-spinner").remove();
}

jQuery(document).on('click','#rest_post_loader', function(){
  var data = {};
  data['action'] = 'load_rest_posts';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['category_id'] = jQuery(this).attr('post-cat-id');
  data['current_post_count'] = parseInt(jQuery('.discover_more_items').length)+parseInt(data['limit']);
  var button_element = jQuery(this);
  var previous_element = button_element.prev();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      previous_element.append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      previous_element.append(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
      }
    }
  });
});

jQuery(document).ready(function(){
  var screen_width = screen.width;
  var slide_count = 0;
  if(screen_width <= '600'){
    slide_count = 1;
  }
  else if(screen_width > '600' && screen_width <= '1019'){
    slide_count = 2;
  }
  else{
     slide_count = 3;
  }
  
  jQuery('.carousel-2').slick({
    slidesToShow: slide_count,
    slidesToScroll: 1,
  dots:true,
   centerPadding:'50px',  
  // centerMode: true,
  responsive: [{

      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        infinite: true
       }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
  });
});


// Gravity form select first option disable
    jQuery("#input_1_4 option:first-child").attr('value', "");
    jQuery("#input_1_4").attr('required', "required");
    
    // script for recent post slider header arabic language
    jQuery(document).ready(function(){
    setTimeout(function(){
    jQuery("body.rtl .slick-initialized .slick-slide").hide();
    }, 100);
    setTimeout(function(){
    jQuery("body.rtl .slick-initialized .slick-slide").show();
    }, 200);
    });

jQuery(window).resize(function() {
    setTimeout(function(){
    jQuery("body.rtl .slick-initialized .slick-slide").hide();
    }, 05);
    setTimeout(function(){
    jQuery("body.rtl .slick-initialized .slick-slide").show();
    }, 05);
});


jQuery(document).ready(function() {
  jQuery(".get_touch .ginput_container_fileupload").append("<h1 class='file-before'>Upload a supporting image, video or file</h1>");
  jQuery('.get_touch .ginput_container_fileupload input[type="file"]').change(function(e) {
    var fileName = e.target.files[0].name;
      jQuery(".get_touch .ginput_container_fileupload h1").text(fileName);
       
  });
  
  
});