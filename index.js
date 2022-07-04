const express = require ('express');
const PORT = process.env.PORT || 4000
const app = express();
const grp = [
    {img :'https://usercontent2.hubstatic.com/13901601_f520.jpg',
    name:'hollywoodstar',
    mail:'hollywood@mail',
    number:'4578952412'
    },
    {img :'https://i.pinimg.com/originals/e6/45/35/e64535f8a1edc3bd315349eaa817255e.jpg',
    name:'surya',
    mail:'hero@mail',
    number:'7845156327'
    },
    {img :'https://images.desimartini.com/media/uploads/2017-5/gopichand-biography-wiki-biodata.jpg',
    name:'gopichand',
    mail:'gopimawa@mail',
    number:'7531598254'
    }
];

app.get('/',(req,res)=>{
res.send('Hello World !!!')
});
app.get('/data/',(req,res)=>{
    console.log('Hello World')
    res.json(grp)
});

app.listen(PORT)

