// ==UserScript==
// @name    Create bookmark in linkding
// @match   http*://*
// @run-at  context-menu
// ==/UserScript==

var bookmarkUrl = window.location;
var applicationUrl = '<path to your linkding installation>/bookmarks/new';

applicationUrl += '?url=' + encodeURIComponent(bookmarkUrl);
applicationUrl += '&amp;auto_close';

window.open(applicationUrl);