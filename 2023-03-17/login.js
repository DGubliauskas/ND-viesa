import express from 'express';
import { engine } from 'express-handlebars';
import fs from 'node:fs/promises';


const app = express()
const port = 3000

app.use(express.urlencoded({
    extended: true
}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', async (req, res) => {
    // let data = await fs.readFile('./database.json', 'utf-8');
    // data = JSON.parse(data);

    // data = data.map(post => `
    //     <div>
    //         <img src="${post.photo}" alt="${post.title}" />
    //         <h3>${post.title}</h4>
    //         <p>${post.excerpt}</p>
    //     </div>
    // `);

    // let html = '<h1>Naujausi įrašai</h1>' + data.join('');

    // res.send(html);

    let data = await fs.readFile('./database.json', 'utf-8');
    data = JSON.parse(data);

    //Šablono iššaukimui naudojamas render() metodas
    res.render('home', { posts: data });
});