const express = require(`express`)
const bodyParser = require(`body-parser`)
const path = require(`path`)
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

const mongoose = require(`mongoose`)
mongoose.connect("mongodb://localhost/bankDB")
 const Schema = mongoose.Schema
 const transSchema = new Schema({
     amount: Number,
     category: String,
     vendor: String,
 })

const Transaction = mongoose.model(`Transaction`, transSchema)

app.get(`/transactions`, function(req, res){
    Transaction.find({}).exec(function(err, transactions){
        res.send(transactions)
    })
})

app.post(`/transaction`, function(req, res){
    let transaction = new Transaction(req.body)
transaction.save()
res.send(transaction)
})

port = 7899
app.listen(port, function(){
    console.log(`Running on port ${port}`)
})
