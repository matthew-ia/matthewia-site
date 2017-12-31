$('#message').attr('data-collapsed', 'true');
var msgHeight = $('#message').innerHeight();
var msgWidth = $('#message').innerWidth();

$('#message').click(function() {
  var isCollapsed = $(this).attr('data-collapsed');
  console.log("<<<<<<<<<< " + isCollapsed);
  if (isCollapsed === 'true') {
    expandMessage($(this));
    console.log("called expandMessage()");
  } else collapseMessage($(this));
  // This is other way
  if (!$(this).hasClass('expanded-msg')) {
    $(this).addClass('expanded-msg');
  } else {
    $(this).removeClass('expanded-msg');
  }

});


// Dynamically expand message without hardcoded height x width in stylesheet

function expandMessage(msg) {
  // Get current height of message box
  //var currHeight = parseFloat(msg.css('height'));
  //var currWidth = parseFloat(msg.css('width'));
  console.log("currHeight, currWidth: " + msgHeight + ", " + msgWidth);
  // Disable css transitions for message box
  var transition = msg.css('transition');
  msg.css('transition', '');

  // First frame
  requestAnimationFrame(function() {
    console.log("First frame?");
    // Set height style to current dynamic height
    msg.css('height', msgHeight + 'px');
    msg.css('width', msgWidth + 'px');
    msg.css('transition', transition);
    $('#message span').hide();
    console.log("height x width: " + msg.css('height') + ", " + msg.css('width'));
    // Next frame
    // Increase heights and widths based on current
    requestAnimationFrame(function() {
      console.log("Second frame?");
      var newHeight = msgHeight * 5.5;
      var newWidth = msgWidth * 1.8;
      console.log("new values: " + newHeight + ", " + newWidth);
      msg.css('height', newHeight + 'px');
      msg.css('width', newWidth + 'px');
      console.log("height x width: " + msg.css('height') + ", " + msg.css('width'));
    });
  });

  msg.attr('data-collapsed', 'false');
}

function collapseMessage(msg) {
  //var currHeight = msg.scrollHeight;
  //var currWidth = msg.scrollWidth;

  requestAnimationFrame(function() {
    msg.css('height', msgHeight);
    msg.css('width', msgWidth);
    $('#message span').show();


  });

  msg.attr('data-collapsed', 'true');
}
