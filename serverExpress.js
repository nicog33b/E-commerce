
const express=  require('express')
var cors = require('cors');
const app= express()
const port = 3000
app.use(cors());

const data={
    "articles": [
        {
            "name": "Pino de olor para el auto",
            "count": 2,
            "unitCost": 100,
            "currency": "UYU",
            "src": "img/tree1.jpg"
        },
		{
            "name": "Suzuki Celerio",
            "count": 1,
            "unitCost": 12500,
            "currency": "USD",
            "src": "img/prod3.jpg"
        }
    ]
}

app.get('/',(req, res)=>{
res.json(data)   
})

app.listen(port,()=>{
console.log('la aplicación esta en linea')
})