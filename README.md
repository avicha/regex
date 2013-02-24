regex
=====

封装了一些正则表达式的常用处理方法。
##安装
<pre>
    npm install yi-regex
</pre>
##引入
```javascript
Regex = require('yi-regex');
```
##使用
* match(regex,string)

    regex:正则表达式

    string:需要匹配的字符串

    return：Array匹配结果

```javascript
result = Regex.match(/id=(\d+)/, 'http://item.taobao.com/item.htm?spm=2013.1.w1057672648.1.zlrrXo&id=21482588062');
```
* matchAll(regex,string)

    regex:正则表达式

    string:需要匹配的字符串

    return：Array匹配结果

```javascript
result = Regex.matchAll(/\w+=[^&]*/g, 'http://item.taobao.com/item.htm?spm=2013.1.w1057672648.1.zlrrXo&id=21482588062');
```
* contain(string,substring)

    string:字符串

    substring:子字符串

    return：Boolean 字符串是否包含子串

```javascript
result = Regex.contain('http://item.taobao.com/item.htm?spm=2013.1.w1057672648.1.zlrrXo&id=21482588062', 'item.taobao.com/item.htm');
```
