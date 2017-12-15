let express = require('express');
let app = express();
let path = require('path');

//设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname, 'build')));

//接口

// 解决浏览器刷新问题
app.use('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
    console.log('running at port 3000');
});