// 保护知识产权
if (document.domain != 'localhost') {

    $(document).bind({
        copy: function(e) { //copy事件 
            console.log('BIND COPY');
            var copyRRight = "";
            // 如果在首页无法找到copyRRight的话
            if (window.location.protocol + '//' + window.location.host + '/' != window.document.location.href) {
                copyRRight = $(".copyRRight")[0]['innerText'];
            } else {
                copyRRight = "文章作者:SaltedMdFiveSh\r\n\r\n作者链接:https://silver-birch-wawa.github.io/\r\n\r\n许可协议: '署名-非商用-相同方式共享 4.0' 转载请保留原文链接及作者。"
                    //copyRRight="Author:SaltedMdFiveSh\r\n\r\nAuthor Link:https://silver-birch-wawa.github.io/\r\n\r\n Agreement: 'Attribution-non-commercial-shared in the same way 4.0'\r\n\r\nReprinted please retain the original link and author."
            }
            var cpTxt = copyRRight;
            var clipboardData = window.clipboardData; //for IE  
            if (!clipboardData) { // for chrome  
                clipboardData = e.originalEvent.clipboardData;
            }
            console.log("copy success. copyRRight is " + cpTxt);

            //替换
            var selection = window.getSelection().toString();
            if (selection.length < 15) {
                clipboardData.setData('Text', selection);
                return false;
            }
            if (e.clipboardData) {
                e.clipboardData.setData('text/plain', selection + copyRRight);
            } else if (window.clipboardData) {
                //ie浏览器
                window.clipboardData.setData('text/plain', selection + copyRRight);
            }
            clipboardData.setData('Text', selection + '\r\n\r\n' + copyRRight);
            return false; //否则设不生效  
        }
    });
}