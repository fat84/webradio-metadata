// Copyright (c) 2017 Alexandre Storelli
// This file is licensed under the Affero General Public License version 3 or later.
// See the LICENSE file.

var get = require("./get.js");
var htmlToStr = require("./htmlToStr.js");

module.exports = function(exturl, callback) {
	get(exturl, function(err, result, corsEnabled) {

		if (err) {
			return callback(err, null, null);
		}

		var b0 = "<span class=\"show-title\">En ce moment</span>";
		var i0 = result.indexOf(b0);
		var r1 = result.slice(i0+b0.length); //.replace(/\n/g, '');

		var b9 = "<img src=\"";
		var i9 = r1.indexOf(b9);
		var r9 = r1.slice(i9+b9.length);
		var b91 = "\"";
		var i91 = r1.indexOf(b91);
		var cover = r9.slice(0, i91);

		var b1 = "<span class=\"title\">";
		var i1 = r9.indexOf(b1);
		var r2 = r9.slice(i1+b1.length);
		var b2 = "</span>";
		var i2 = r2.indexOf(b2);
		var meta1 = r2.slice(0, i2); //.trim(); // talk title

		var r3 = r2.slice(i2);
		var b3 = "<span class=\"btn-widget\">";
		var i3 = r3.indexOf(b3);
		var r4 = r3.slice(i3+b3.length);
		var b4 = "<i class";
		var i4 = r4.indexOf(b4);
		var meta2 = r4.slice(0, i4); // speakers

		return callback(null, { artist:htmlToStr(meta2), title:htmlToStr(meta1), cover: cover }, corsEnabled);
	});
}
