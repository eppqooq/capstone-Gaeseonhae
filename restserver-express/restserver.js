const rest = require('express')();
const PORT = 3001;


rest.get('/aa', (req, res) => {
    res.json({greet : '안녕하세요'});
})

rest.listen(PORT, () => {
    console.log('server running. port : ', PORT);
});