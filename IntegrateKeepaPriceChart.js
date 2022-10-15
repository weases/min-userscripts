// ==UserScript==
// @name        Keepa
// @description Loads Keepa price tracker for Amazon domains. Copied from https://greasyfork.org/en/users/685853-skeptical-alien but fixed visualisation issues (chart cut off at bottom).
// @include     https://*.amazon.*/*/dp/*
// @include     https://*.amazon.*/dp/*
// @include     https://*.amazon.*/gp/product/*
// @run-at      document-start
// ==/UserScript==

var prod_code;
if (prod_code = window.location.pathname.match(/^\/gp\/product\/(.*)\/.*$/)) {
  prod_code = prod_code[1]
}
else if (prod_code = window.location.pathname.match(/^\/.*\/dp\/(.*)\/.*$/)) {
  prod_code = prod_code[1];
}
else if (prod_code = window.location.pathname.match(/^\/dp\/(.*)\/.*$/)) {
  prod_code = prod_code[1];
}
else if(prod_code = window.location.pathname.match(/^\/gp\/product\/(.*)\\?.*$/)) {
  prod_code = prod_code[1];
}
else if (prod_code = window.location.pathname.match(/^\/.*\/dp\/(.*)\\?.*$/)) {
  prod_code = prod_code[1];
}
else if (prod_code = window.location.pathname.match(/^\/dp\/(.*)\\?.*$/)) {
  prod_code = prod_code[1];
}

var numl=0;
switch(document.location.hostname.match('.*\.amazon\.(.*)$')[1]){
    case 'de':
      numl=3;
      break;
    case 'com':
      numl=1;
      break;
    case 'ca':
      numl=6;
      break;
    case 'mx':
      numl=11;
      break;
    case 'uk':
      numl=2;
      break;
    case 'fr':
      numl=4;
      break;
    case 'it':
      numl=8;
      break;
    case 'es':
      numl=9;
      break;
    case 'jp':
      numl=5;
      break;
    case 'in':
      numl=10;
      break;
}

// Tweaked from original script by some dude Jarrett
var referenceNode = document.querySelector('#hover-zoom-end');
var keepaHtmlTemplate = document.createElement('template');
keepaHtmlTemplate.innerHTML = '<div style="min-width: 935px; max-width: 2408px; display: flex; height: 411px; border: 0px none; margin: 10px 0px 0px;" id="keepaContainer"><iframe style="width: 100%; height: 100%; border: 0px none; overflow: hidden;" src="https://keepa.com/iframe_addon.html#'+numl+'-0-'+prod_code+'" scrolling="no" id="keepa"></iframe><div id="keepaClear" style="clear:both;"></div></div>'
referenceNode.parentNode.insertBefore(keepaHtmlTemplate.content, referenceNode.nextSibling);