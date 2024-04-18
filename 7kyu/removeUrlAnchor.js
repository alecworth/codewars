function removeUrlAnchor(url){
    if (url.lastIndexOf('#') == -1) {
      return url
    } else {
      return url.slice(0, (url.lastIndexOf('#')))
    }
}