const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
//MIADLEWERE
app.use(express.json());
app.use(cors())


const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@robiul.13vbdvd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const adDeviceCollection = client
    .db("Digital-Networking-Wifi")
    .collection("addDevice");
  const adsAccountCollection = client
    .db("Digital-Networking-Wifi")
    .collection("adsAccountt");
  const customerAccountCollection = client
    .db("Digital-Networking-Wifi")
    .collection("adsAccountt");
  const MpaymentCollection = client
    .db("Digital-Networking")
    .collection("Mpaymentt");
  const employeePaymentCollection = client
    .db("Digital-Networking")
    .collection("employeePayment");


    const allLogoCollection = client.db("Digital-Networking").collection("logoInfoo");
    const allLinksCollection = client.db("Digital-Networking").collection("linkInfoo");


    /////////////////////////////////////////////////
  // employee payment ////////////////////

  app.post("/employeePayment", async (req, res) => {
    const filter = req.body;
    const result = await employeePaymentCollection.insertOne(filter);
    res.send(result);
  });
  

  app.get("/employeePayment", async (req, res) => {
    const result = await employeePaymentCollection.find().toArray();
    res.send(result);
  });

  app.get("/employeePayment", async (req, res) => {
    const email = req.query.email;
    const query = { employeeEmail: email };
    const result = await employeePaymentCollection.find(query).toArray();
    res.send(result);
  });

  app.get("/employeePayment/:email", async (req, res) => {
    const email = req.params.email;
    const filter = { employeeEmail: email };
    const result = await employeePaymentCollection.findOne(filter);
    res.send(result);
  });

  app.get("/employeePayment/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await employeePaymentCollection.findOne(filter);
    res.send(result);
  });

  app.delete("/employeePayment/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await employeePaymentCollection.deleteOne(filter);
    res.send(result);
  });

  app.patch("/employeePayment/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const body = req.body;
    const updatenew = {
      $set: {
        payAmount: body.payAmount,
        date: body.date,
        note: body.note,
        paymentMethod: body.paymentMethod,
      },
    };

    const result = await employeePaymentCollection.updateOne(filter, updatenew);
    res.send(result);
  });
    


  /////////////////////////////  add Device  ////////////////////
  app.post("/addDevice", async (req, res) => {
    const filter = req.body;
    const result = await adDeviceCollection.insertOne(filter);
    res.send(result);
  });
  app.get("/addDevice", async (req, res) => {
    const result = await adDeviceCollection.find().toArray();
    res.send(result);
  });


  app.get("/addDevice/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { mobNumber: id };
    const result = await adDeviceCollection.findOne(filter);
    res.send(result);
  });



  app.delete("/addDevice/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await adDeviceCollection.deleteOne(filter);
    res.send(result);
  });

  app.patch("/addDevice/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const body = req.body;
    const updatenew = {
      $set: {
        accountName : body.accountName ,
        name: body.name,
        mobNumber: body.mobNumber, 
        deviceName: body.deviceName, 
        macAddress: body.macAddress, 
        totalBill: body.totalBill,
      },
    };

    const result = await adDeviceCollection.updateOne(filter, updatenew);
    res.send(result);
  });



    ////////////////////////////////////////////////////////
    //                 wifi Account
    ////////////////////////////////////////////////////////

    app.post("/wifiAccount", async (req, res) => {
      const filter = req.body;
      const result = await adsAccountCollection.insertOne(filter);
      res.send(result);
    });

    app.get("/wifiAccount", async (req, res) => {
      const result = await adsAccountCollection.find().toArray();
      res.send(result);
    });

    app.get("/wifiAccount", async (req, res) => {
      const email = req.query.email;
      const query = { employeeEmail: email };
      const result = await adsAccountCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/wifiAccount/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { employeeEmail: email };
      const result = await adsAccountCollection.findOne(filter);
      res.send(result);
    });
    app.delete("/wifiAccount/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await adsAccountCollection.deleteOne(filter);
      res.send(result);
    });

    app.patch("/wifiAccount/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const body = req.body;
      const updatenew = {
        $set: {
          deviceName: body.deviceName,
          location: body.location,
          wifiname: body.wifiname, 
          password: body.password, 
          ipaddress: body.ipaddress, 
          macaddress: body.macaddress,
        },
      };

      const result = await adsAccountCollection.updateOne(filter, updatenew);
      res.send(result);
    });



     ////////////////////////////////////////////////////////
    //                 customers add Account
    ////////////////////////////////////////////////////////

    app.post("/customersAccount", async (req, res) => {
      const filter = req.body;
      const result = await customerAccountCollection.insertOne(filter);
      res.send(result);
    });

    app.get("/customersAccount", async (req, res) => {
      const result = await customerAccountCollection.find().toArray();
      res.send(result);
    });

    app.get("/customersAccount", async (req, res) => {
      const email = req.query.email;
      const query = { employeeEmail: email };
      const result = await customerAccountCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/customersAccount/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { employeeEmail: email };
      const result = await customerAccountCollection.findOne(filter);
      res.send(result);
    });
    app.delete("/customersAccount/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await customerAccountCollection.deleteOne(filter);
      res.send(result);
    });

    app.patch("/customersAccount/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const body = req.body;
      const updatenew = {
        $set: {
          customerName: body.customerName,
          mobNumber: body.mobNumber,
          totalDevices: body.totalDevices, 
          totalDue: body.totalDue, 
          status: body.status, 
        },
      };

      const result = await customerAccountCollection.updateOne(filter, updatenew);
      res.send(result);
    });
   

     

    ///////////////////////////////////////////////////////////////////
    //                       Mpayment
    ////////////////////////////////////////////////////////////////////
    app.post("/Mpayment", async (req, res) => {
      const filter = req.body;
      const result = await MpaymentCollection.insertOne(filter);
      res.send(result);
    });

    app.get("/Mpayment", async (req, res) => {
      const result = await MpaymentCollection.find().toArray();
      res.send(result);
    });

    app.get("/Mpayment/:email", async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
      const result = await MpaymentCollection.findOne(filter);
      res.send(result);
    });

    app.patch("/Mpayment/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const body = req.body;
      const updatenew = {
        $set: {
          amount: body.amount,
          date: body.date,
          note: body.note,
          paymentMethod: body.method,
        },
      };

      const result = await MpaymentCollection.updateOne(filter, updatenew);
      res.send(result);
    });


///////////////////////////////////////////////////////////////////////////
    //                         links social data
    ///////////////////////////////////////////////////////////////////////////

    app.get("/links", async (req, res) => {
      const result = await allLinksCollection.find().toArray();
      res.send(result);
    });

    app.post("/links", async (req, res) => {
      const user = req.body;
      const result = await allLinksCollection.insertOne(user);
      res.send(result);
    });


    ///////////////////////////////////////////////////////////////////////////
    //                         logo social data
    ///////////////////////////////////////////////////////////////////////////

    app.get("/logos", async (req, res) => {
      const result = await allLogoCollection.find().toArray();
      res.send(result);
    });

    app.post("/logos", async (req, res) => {
      const user = req.body;
      const result = await allLogoCollection.insertOne(user);
      res.send(result);
    });



    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("hello wifi");
});

app.listen(port, () => {
  console.log(`Wifi app listening on port ${port}`);
});


