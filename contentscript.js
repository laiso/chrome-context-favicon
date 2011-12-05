(function() {
  var getSiteOption, main;
  getSiteOption = function() {
    var len, match, param, params, query, s, siteOption, _i, _len;
    siteOption = '';
    params = document.URL.split('&');
    for (_i = 0, _len = params.length; _i < _len; _i++) {
      param = params[_i];
      if (param.indexOf('q=') > -1 && param.substr(0, 2)) {
        query = decodeURIComponent(param);
        match = /^(q=.*)?site:(.+)$/.exec(query);
        if (match && match.length > 1) {
          s = match.pop();
          if (s.indexOf('+') > -1) {
            len = s.indexOf('+');
            siteOption = s.substr(0, len);
          } else {
            siteOption = s;
          }
          break;
        }
      }
    }
    return siteOption;
  };
  main = function() {
    var elm, siteOption;
    siteOption = getSiteOption();
    if (siteOption) {
      elm = document.createElement('LINK');
      elm.rel = 'shortcut icon';
      elm.href = 'http://' + siteOption + '/favicon.ico';
      elm.type = 'image/x-icon';
      return document.head.appendChild(elm);
    }
  };
  if (window.top === window.self) {
    window.onload = main();
  }
}).call(this);
