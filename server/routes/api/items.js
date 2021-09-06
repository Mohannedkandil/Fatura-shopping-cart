const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// GET posts
router.get('/', async (req, res) => {
    const items = await loadItemsCollection();
    res.send(await items.find({}).toArray());// to return all the items and return it as an array  
});


// Add posts
router.post('/', async (req, res) => {
    const items = await loadItemsCollection();
    await items.insertOne({
        image: req.body.image,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        createdAt: new Date()
    });
    res.status(201).send(); // 201 - indicates that there's something created
})

// update item

router.put('/:id', async (req, res) => {
    const items = await loadItemsCollection();
    items.updateOne({
        _id: new mongodb.ObjectId(req.params.id),
    },
        {
            $set: { title: req.body.title, description: req.body.description, price: req.body.price },
        }, { new: true });
    res.status(201).send('Value saved');
    console.log('The value updated');
});

// Delete posts
router.delete('/:id', async (req, res) => {
    const items = await loadItemsCollection();
    await items.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.status(200).send();
})
require('dotenv').config();
// Connect to the items collection
async function loadItemsCollection() {
    var uri = `mongodb+srv://kandil:123@cluster0.peybj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = await mongodb.MongoClient.connect
        (uri, {
            useNewUrlParser: true // to prevent some warnings
        });
    return client.db('fatura').collection('items');

}

async function updateItem(id) {
    const items = await loadItemsCollection();
    const item = await items.findByIdAndUpdate(id, {
        $set: {
            title: 'Mohanad',
            //description: 'fun',
            //price: '10$'
        }
    }, { new: true });
    console.log(item);

}

module.exports = router;