// Focus & Set Version
$('.console-input').focus();
var ver = "3.5";
$('#ver').html(ver);

// Force Lowercase Input
$('.console-input').keyup(function() {
  //this.value = this.value.toLowerCase();
});

// Force Cursor to End
$('.console-input').keydown(function() {
  this.value = this.value;
});
$('.console-input').click(function() {
  this.value = this.value;
});

// Output to Console
function output(print) {
  var cmd = $('.console-input').val();
  if(cmd==""){cmd="<span style='opacity:0;'>...</span>";}
  $("#outputs").append("<span class='output-cmd-pre'>User ></span><span class='output-cmd'>" + cmd + "</span>");

  $.each(print, function(index, value) {
    cmd = "Site";
    cmd += " >";
    if (value == "") {
      value = "&nbsp;";
      cmd = "&nbsp;";
    }
    $("#outputs").append("<span class='output-text-pre'>" + cmd + "</span><span class='output-text'>" + value + "</span>");
  });

  $('.console-input').val("");
  //$('.console-input').focus();
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 300);
}

// Break Value
var newLine = "<br/> &nbsp;";

// User Commands
var cmds = {

  "/reset": function() {
    window.location.replace(location.href);
  },

  "/say": function(a) {
    output([a]);
  },

  "/ping": function() {
    output(['Pong!']);
  },

  "/pong": function() {
    output(['Use /ping']);
  },

  "/alert": function(a) {
    alert(a);
    output([]);
  },

  "/js": function(str) {
    var print = [];
    print.push("JS > Input Run");
    try {
      (new Function(str))();
      print.push("JS > Code Executed Successfully");
    } catch(err) {
      print.push("JS > Code Error: " + err.message);
    }
    output(print);
  },

  "/clear": function() {
    $("#outputs").html("");
  },

  "/help": function() {

    var print = ["Commands:", ""];
    print = $.merge(print, Object.keys(cmds));

    output(print);
  },

  "/about": function() {

    var print = [
      "About Me:",
      "",
      "Hi I'm Oussama!",
      "I'm a software engineering student. I work remotely as a full stack web developer in anadvertising agency called L'Agence - Boite à outils",
      "",
      "I'm a lot away from being a sterotype that's why I decided to create this console as an inertactive resume to talk about me."
    ];

    output(print);
  },


  "/contact": function() {

    var print = [
      "Contact Me:",
      "",
      "Email: <span>oussama.hamidi@esprit.tn</span>",
      "Website: <span>thebored.me</span>",
      "Github: <span>github.com/OussamaHAMIDI</span>"
    ];

    output(print);
  },

};

// Output Branding
$('.console-input').val("Loading...");
$.get("https://gist.githubusercontent.com/OussamaHAMIDI/34112a0f79c84291ceb44d8b736f2727/raw/410b4dbc06b670036c88af6d49ecebe9e0b699dd/console_name", function(data) {
  output(data.replace(/ /g, '&nbsp;').split("\n"));
});

// Get User Command
$('.console-input').on('keypress', function(event) {
  if (event.which === 13) {
    var str = $(this).val();
    var data = str.split(' '); data.shift(); data = data.join(' ');
    var cmd = str.split(' ')[0];

    if (typeof cmds[cmd] == 'function') {
      if(cmds[cmd].length > 0) {
        cmds[cmd](data);
      } else {
        cmds[cmd]();
      }
    // } else if ( (str.slice(0, str.indexOf('(')) === 'function' && str.slice(-1) === '}') || typeof eval(str.slice(0, str.indexOf('('))) === 'function') {
    //   var print = [];
    //   print.push("JS Direct Code Input Run");
    //   if(str.slice(0, str.indexOf('(')) === 'function') { str = str.replace('function(){', '').slice(0, -1); }
    //   try {
    //     (new Function(str))();
    //   } catch(err) {
    //     print.push("JS Direct Code Error: " + err.message);
    //   }
    //   output(print);
    } else {
      output(["Command not found: '" + cmd + "'", "Use '/help' for list of commands."]);
    }
    $(this).val("");
  }
});

// Particles BG
particlesJS('particles-js', {
  'particles': {
    'number': {
      'value': 50
    },
    'color': {
      'value': '#ffffff'
    },
    'shape': {
      'type': 'triangle',
      'polygon': {
        'nb_sides': 5
      }
    },
    'opacity': {
      'value': 0.06,
      'random': false
    },
    'size': {
      'value': 11,
      'random': true
    },
    'line_linked': {
      'enable': true,
      'distance': 150,
      'color': '#ffffff',
      'opacity': 0.4,
      'width': 1
    },
    'move': {
      'enable': true,
      'speed': 4,
      'direction': 'none',
      'random': false,
      'straight': false,
      'out_mode': 'out',
      'bounce': false
    }
  },
  'interactivity': {
    'detect_on': 'canvas',
    'events': {
      'onhover': {
        'enable': false
      },
      'onclick': {
        'enable': true,
        'mode': 'push'
      },
      'resize': true
    },
    'modes': {
      'push': {
        'particles_nb': 4
      }
    }
  },
  'retina_detect': true
}, function() {

});
