const app = require('express')();
const PORT = 3001;


app.get('/aa', (req, res) => {
    res.json({greet : '안녕하세요'});
})

app.listen(PORT, () => {
    console.log('server running. port : ', PORT);
});