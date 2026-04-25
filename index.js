const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const chat = require('./models/chat');

app.set("views" , path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "Public")))


main().then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chat1 = new chat({
    from: 'shubham',
    to: 'radhesh ',
    msg: 'Hello radhesh send a notes of cpp',
    created_at: new Date()
});

chat1.save()
.then((res) => 
    console.log(res))
.catch(err => 
    console.log(err));


app.get('/', (req, res) => {   
    res.send('this port is working')
}); 

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

app.get('/chats', async (req, res) => {
    let chats = await chat.find()
    console.log(chats);
    res.render("index.ejs", {chats})
});
