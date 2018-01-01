// Display screen size
// for debugging only
// credit: https://stackoverflow.com/questions/7935722/display-live-width-and-height-values-on-changing-window-resize
/*var myWidth = 0, myHeight = 0;
if( typeof( window.innerWidth ) == 'number' ) {
    myWidth = window.innerWidth; myHeight = window.innerHeight;
} else if( document.documentElement && ( document.documentElement.clientWidth ||document.documentElement.clientHeight ) ) {
    myWidth = document.documentElement.clientWidth; myHeight = document.documentElement.clientHeight;
} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    myWidth = document.body.clientWidth; myHeight = document.body.clientHeight;
}

window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    // your size calculation code here
    document.getElementById("dimensions").innerHTML = myWidth + "x" + myHeight;
};*/

$(window).resize(function() {
    $('#dimensions').html($(window).width() + "x" + $(window).height());
}).resize();

// Setup
$('#expandedMessage').hide();
$('#message').attr('data-collapsed', 'true');

$('#message').click(function() {
  expandMessage();
});

$('#back-btn').click(function() {
  collapseMessage();
  setTimeout(function(){
    $('#message').click(function() {expandMessage();});
  }, 1);
});

function expandMessage() {
  if ($('#message').attr('data-collapsed') === 'false'
    || $('#expandedMessage').attr('display') === 'hidden') return;
  if (!$('#message').hasClass('expanded-msg')) {
    console.log("am adding class");
    $('#message').addClass('expanded-msg');
    $('#collapsedMessage').hide();
    setTimeout(function(){
      $('#expandedMessage').fadeIn(500);
    }, 100);

    $('#message').attr('data-collapsed', 'false');
    $('#message').off('click');
  }
}

$('#send-msg').click(function() {
  collapseMessage();
  // Send the message
  setTimeout(function(){
    $('#message').on('click', function() {expandMessage();});
  }, 1);
});

function collapseMessage() {
  console.log("am closing");
  $('#message').removeClass('expanded-msg');
  $('#expandedMessage').hide();
  $('#collapsedMessage').show();
  $('#message').attr('data-collapsed', 'true');
}
