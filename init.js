const mongoose = require('mongoose')

main().then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats= [
    {
    from: 'shubham',
    to: 'radhesh ',
    msg: 'Hello radhesh send a notes of cpp',
    created_at: new Date()
},
{
    from: 'shubham',
    to: 'sanskar ',
    msg: 'Hello sanskar send a notes of cpp',
    created_at: new Date()
    
},
{
    from: 'shubham',
    to: 'pravin ',
    msg: 'Hello praivn send a notes of cpp',
    created_at: new Date()
},
{
    from: 'rohit',
    to: 'rakhesh ',
    msg: 'Hello rakhesh send a notes of cpp',
    created_at: new Date()
},
{
    from: 'shubham',
    to: 'sanket ',
    msg: 'Hello sanket send a notes of cpp',
    created_at: new Date()
},
]

allChats.insertMany(allChats);


