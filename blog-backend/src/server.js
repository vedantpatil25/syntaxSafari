import express from 'express';

//********fake database till we use mongodb*************
let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    comments: [],
}, {
    name: 'learn-node',
    upvotes: 0,
    comments: [],
}, {
    name: 'mongodb',
    upvotes: 0,
    comments: [],
}]

//definig the app
const app = express();

// middleware
app.use(express.json());


//creating an upvote endpoint (making a put req)
app.put('/api/articles/:name/upvote', (req, res) => {

    //extracting the name from url using pararms hook which returns object of url parameters
    const {name} = req.params;

    //finding the corresponding article from the database to upvote , increament its count
    const article = articlesInfo.find(a => a.name === name);

    //if article exist then increasing upvotes
    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has updated upvotes: ${article.upvotes} upvotes`);
    } 
    else {
        res.send('That article doesn\'t exist');
    }

});



//post request for adding comments to the specific article
app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articlesInfo.find(a => a.name === name);

    if (article) {
        article.comments.push({ postedBy, text });
        res.send(article.comments);
    } else {
        res.send('That article doesn\'t exist! ');
    }
});

//server is listening
app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});