var express = require('express'); // Web Framework
var app = express();
var cors = require('cors');
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://Karl:discord@cluster0.c2iuu.mongodb.net/test";
const dbName = "discordBot";
const client = new MongoClient(uri, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});

async function run() {
	app.use(cors());

   await client.connect();
   console.log("connected to mongodb");
   await listDatabases(client);
 } /*finally {
   await client.close();
 }*/

var server= app.listen(8081,function(){
  var host = server.address().address
  var port= server.address().port

  console.log("applistening at http://%s:%s", host, port);
});




app.get('', async function (req, res){
  res.send("<h1>To use this REST you can use commands<br> /listdatabases <br> /retrieve <br> These are pretty self explanitory but Retrieve will return all of the discord bot entries</h1>");
});

app.get('/listdatabases', async function (req, res){
  databasesList = await client.db().admin().listDatabases()
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  res.send(databasesList);
});

app.get('/retrieveJabbafeet', async function (req, res){
    const db = client.db(dbName);
    const col = db.collection("discordBot");

    try{
    retrieveM().then;
    console.log("Retrieving ////");
    async function retrieveM(client){
       console.log("in Retrieve//");
       const cursor = col.find();
       //.batchSize(NUMBER_OF_DOCUMENTS_IN_BATCH);
       const findResult = await col.find({
         username: "Jago",
       });

       await cursor.forEach(console.dir);

       var collectionInfo = db.collection("discordBot");
       //here we will find Discordbot entries
       collectionInfo.find({}).toArray(function(err, discordBot){
         res.status(200).json({'myCollection' : discordBot})
       })

     }
     res.json(dbresult);
   }catch(e){
       console.error(e);
     }
});

app.get('/retrieve', async function (req, res){
	
    const db = client.db(dbName);
    const col = db.collection("discordBot");

    try{
    retrieveM().then;
    console.log("Retrieving ////");
    async function retrieveM(client){
       console.log("in Retrieve//");
       const cursor = col.find();
       //.batchSize(NUMBER_OF_DOCUMENTS_IN_BATCH);
       const findResult = await col.find({
         username: "Jabbafeet",
       });

       await cursor.forEach(console.dir);

       var collectionInfo = db.collection("discordBot");
       //here we will find Discordbot entries
       collectionInfo.find({}).toArray(function(err, discordBot){
         res.status(200).json({'myCollection' : discordBot})
       })

     }
     res.json(dbresult);
   }catch(e){
       console.error(e);
     }
});

async function listDatabases(client){
    //MongoClient.open();
    //await client.connect();
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

run().catch(console.dir);
