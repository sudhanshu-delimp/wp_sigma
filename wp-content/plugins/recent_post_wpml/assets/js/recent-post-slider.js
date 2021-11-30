
jQuery(document).ready(function(jQuery){
jQuery(".slider-wrapper .loading").remove();
jQuery(".slider-container").show();
var sTimerLength = 900;
var sTimer = sTimerLength;
var slideCount, slideWidth, sliderUlWidth;

 slideCount = jQuery('#slider ul > li').length;
 slideWidth = jQuery('#slider').width();
 sliderUlWidth = slideCount * slideWidth;
 jQuery('#slider ul > li').css({ width: slideWidth });
 jQuery('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
 jQuery('.rtl #slider ul').css({ width: sliderUlWidth, marginRight: - slideWidth });
 jQuery('#slider ul > li:last-child').prependTo('#slider ul');

 function moveLeft()
 {
  jQuery('#slider ul').animate(
  {
   left: + slideWidth
  }, 2000,

  function()
  { //bring the last li to the beginning of the ul

   jQuery('#slider ul > li:last-child').prependTo('#slider ul');

   //reset the ul's 'left' property as empty string
   jQuery('#slider ul').css('left', '');
  });
  sTimer = sTimerLength;
 };

 function moveRight()
 {
  jQuery('#slider ul').animate(
  {
   left: - slideWidth
  }, 2000,
  function()

  { //bring the first li to the end of the ul
   jQuery('#slider ul > li:first-child').appendTo('#slider ul');
   //reset the ul's 'left' property as empty string
   jQuery('#slider ul').css('left', '');
  });

  sTimer = sTimerLength;
 };

 /*============button controls========*/
 jQuery('.prev').click(function()
 {
  moveLeft();
 });
 jQuery('.next').click(function()
 {
  moveRight();
 });
 setInterval(function()
 {
  if( --sTimer == 0 )
  {
   moveRight();
  }
 }, 1 );

 jQuery(document).resize(function()
{
 slideCount = jQuery('#slider ul > li').length;
 slideWidth = jQuery('#slider').width();
 sliderUlWidth = slideCount * slideWidth;
 jQuery('#slider ul > li').css({ width: slideWidth });
 jQuery('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
});
});
