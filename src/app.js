const express = require('express');
const db = require('../models');

const port = 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get('/', async (req, res) => {
    const data = await db.User.findAll({
        include : [{
            model : db.Post ,
            //attributes : ['title']
            // where : {
            //     title : 'POST 1'
            // }
            include : [{
                required: true,
                model : db.Tag,
                as : "some"
            },
             {
                required: true,
                model : db.Tag,
                as : "test"
            }]
        }, {
            model : db.Device  
        },],
        // order : [['id', 'DESC']] //attributes: [[ db.sequelize.fn('COUNT', 'id'), 'Total_Count']]
    });

    res.send(data)
})

app.listen(port, () => console.log("Server is running"))