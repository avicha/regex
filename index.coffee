#正则表达式的一些方法
Regex = {}
Regex.match = (regex, str) ->
    str.match regex
Regex.matchAll = (regex, str)->
    r = new RegExp regex
    res = []
    next = null
    while (next = r.exec str)
        if next.length == 1
            res.push next[0]
        else
            if next.length == 2
                res.push next[1]
            else
                res.push next.slice 1
    res
Regex.contain = (str, substring)-> 
    !!~str.indexOf substring
module.exports = Regex