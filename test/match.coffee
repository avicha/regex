Regex = require '../index'
result = Regex.match /id=(\d+)/,'http://item.taobao.com/item.htm?spm=2013.1.w1057672648.1.zlrrXo&id=21482588062'
console.log result