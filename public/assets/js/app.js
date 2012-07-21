(function() {

  $(function() {
    var OahuInitCallback, get_activity, get_friends, _oahu_config,
      _this = this;
    $('.carousel').carousel();
    get_friends = function() {};
    get_activity = function() {};
    OahuInitCallback = function(e) {
      $('.oahu_username').html(Oahu.account.name);
      get_activity();
      return get_friends();
    };
    $("[data-oahu-display]").each(function(i, e) {
      var s, t,
        _this = this;
      t = $(this);
      s = t.data('oahu-display');
      if (s === "connected") {
        Oahu.bind('facebook:connect:success', function(e) {
          return t.show();
        });
        return Oahu.bind('oahu:connect:logout:success', function(e) {
          return t.hide();
        });
      } else {
        Oahu.bind('facebook:connect:success', function(e) {
          return t.hide();
        });
        return Oahu.bind('oahu:connect:logout:success', function(e) {
          return t.show();
        });
      }
    });
    _oahu_config = {
      appId: "f8deb1b9b259571b5e8c9250",
      verbose: true,
      debug: true,
      ga: {
        code: "UA-489370-52"
      }
    };
    (function(d, t) {
      var s, se;
      se = d.createElement(t);
      se.type = "text/javascript";
      s = d.getElementsByTagName(t)[0];
      se.async = 1;
      se.src = "//platform.twitter.com/widgets.js";
      return s.parentNode.insertBefore(se, s);
    })(document, 'script');
    return Oahu.init(_oahu_config, OahuInitCallback);
  });

}).call(this);
