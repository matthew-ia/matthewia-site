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
$('#message').on('click', function() {
  expandMessage();
});


function expandMessage() {
  if ($('#message').attr('data-collapsed') === 'false'
    || $('#expandedMessage').attr('display') === 'hidden') return;
  if (!$('#message').hasClass('expanded-msg')) {
    console.log("am adding class");
    $('#message').addClass('expanded-msg');
    $('#collapsedMessage').hide();
    $('#expandedMessage').fadeIn(500);
    $('#message').attr('data-collapsed', 'false');
    $('#message').off('click');
  }
}

$('#close-msg').on({
  click: function() {
    console.log("am closing");
    $('#message').removeClass('expanded-msg');
    $('#expandedMessage').hide();
    $('#collapsedMessage').show();
    $('#message').attr('data-collapsed', 'true');
  },
  mouseleave: function() {
    $('#message').on('click', function() {expandMessage();});
  }  
});
