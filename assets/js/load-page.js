var myVideo = document.getElementById('exampleVideo');

  $(".video").on('click',function () {
      if (myVideo.paused) {
        $("#video-play").hide();
        myVideo.play();
        console.log('Video Playing');
      } else {
        myVideo.pause();
        $("#video-play").show();
        console.log('Video Paused');
      }
    });

$(document).ready(function() {
    $("#divId").css('opacity', '0');
});

document.getElementById('exampleVideo').addEventListener('ended',myHandler,false);

function myHandler(e) {
  $("#divId").css({"opacity": "0.9", "transition": "all 2s ease-in-out" ,  "z-index": "9999"});
}
