const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.post('/', async (req, res) => {
    const coupons = await loadCouponsCollection();


})

async function loadCouponsCollection() {
    const client = await mongodb.MongoClient.connect
        ('mongodb+srv://kandil:123@cluster0.peybj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true // to prevent some warnings
        });
    return client.db('fatura').collection('coupons');
}



module.exports = router