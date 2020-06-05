const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const userRouter = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');


const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(userRouter);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
})

  
app.listen(3000);
