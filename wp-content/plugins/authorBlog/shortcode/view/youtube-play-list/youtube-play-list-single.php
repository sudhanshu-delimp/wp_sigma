<a href="https://www.youtube.com/embed/<?php echo $item->snippet->resourceId->videoId; ?>" disabled="disabled" class="video modal-toggle sbs-youtube-playlist-card">
  <button type="button" class="btn btn-play">
  <span class="glyphicon glyphicon-play" aria-label="Play"><i class="fas fa-play"></i></span>
  </button>
  <img src="<?php echo $item->snippet->thumbnails->medium->url; ?>" class="img-responsive">
</a>
