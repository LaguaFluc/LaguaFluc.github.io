// 保护知识产权
if (document.domain != 'localhost') {
    //复制事件发生时触发
    $(document).bind({
        copy: function(e) { //copy事件 
            console.log('BIND COPY');
            //版权声明
            copyright = "文章作者:laguarage\r\n\r\n作者链接:https://laguafluc.github.io/\r\n\r\n许可协议: '署名-非商用-相同方式共享 4.0' 转载请保留原文链接及作者。"
                //IE浏览器的粘贴板数据
            var clipboardData = window.clipboardData; //for IE  

            if (!clipboardData) { // for chrome  
                //谷歌浏览器的粘贴板数据
                clipboardData = e.originalEvent.clipboardData;
            }
            //选择的字符串
            var selection = window.getSelection().toString();
            //字符串长度小于15则允许复制
            if (selection.length < 15) {
                clipboardData.setData('Text', selection);
                return false;
            }
            //若有粘贴板数据
            if (e.clipboardData) {
                //粘贴板数据将会变成 选择字符串 + 版权声明字符串
                e.clipboardData.setData('text/plain', selection + copyright);
                //ie浏览器情况的替换
            } else if (window.clipboardData) {
                window.clipboardData.setData('text/plain', selection + copyright);
            }
            clipboardData.setData('Text', selection + '\r\n\r\n' + copyright);
            return false;
        }
    });
}