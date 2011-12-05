getSiteOption = ->
  siteOption = ''
  params = document.URL.split '&'
  for param in params
    if param.indexOf('q=') > -1 and param.substr 0, 2
      query = decodeURIComponent param
      match = /^(q=.*)?site:(.+)$/.exec(query)
      if match and match.length > 1
        s = match.pop()
        if s.indexOf('+') > -1
          len = s.indexOf('+')
          siteOption = s.substr(0, len)
        else
          siteOption = s
        break; 
  return siteOption


main = ->
  siteOption = getSiteOption()
  if siteOption
    elm = document.createElement 'LINK'
    elm.rel = 'shortcut icon'
    elm.href = 'http://'+siteOption+'/favicon.ico'
    elm.type = 'image/x-icon'
    document.head.appendChild(elm)


if window.top == window.self
  window.onload = main()
