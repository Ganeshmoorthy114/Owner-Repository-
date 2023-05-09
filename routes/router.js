  const express = require('express');
  const router = express.Router();
  const Subdata = require('../data/model')
  const Headerdata = require('../data/done')

router.get('/subdata/getall', async (req, res) => {
 
    try {
      const subdata = await Subdata.find();
      console.log(subdata);
      return res.status(200).json(subdata);
    }
    catch (error) {
      console.log(error);
    }
  })

  router.get('/headerdata/getall', async (req, res) => {
    try {

      const headerdata = await Headerdata.find();
    return  res.status(200).json(headerdata);
    }
    catch (error) {
      console.log(error);
    }
  })

  router.get('/student/getbyid/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const data = await Student.findById(id);
      res.status(200).json(data);
    }
    catch (error) {
      console.log(error);
    }
  })
  // cardName: req.body.cardName,
  // Id: req.body.Id,
  // Status: req.body.Status,
  // orderId: req.body.orderId,
  // nestedData: req.body.nestData,

  //HeaderData
  router.post('/headerdata/add', async (req, res) => {
    try {
      const headerdata = new Headerdata({
        cardName: req.body.cardName,
        Status: req.body.Status,
        orderId: req.body.orderId,
        Id:req.body.Id,
        nestedData: req.body.nestedData
      });
      const result = await headerdata.save();
      res.status(200).json(result);
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  // subData
  router.post('/subdata/add', async (req, res) => {
    try {
      const subdata = new Subdata({
        name: req.body.name,
        StartDate: new Date("2023-04-07"),
        EndDate: new Date("2023-04-06"),
        select1: req.body.select1,
        select2: req.body.select2,
        cardId: req.body.cardId

      });

      const result = await subdata.save();
      res.status(200).json(result);
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  })

  router.delete('/student/delete/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const result = await Student.findByIdAndDelete(id);
      res.status(200).json({ messge: "deleted succesfully" })
    }
    catch (err) {
      console.log(err);
    }
  })
  // name: req.body.name,
  // StartDate: new Date("2023-04-07"),
  // EndDate: new Date("2023-04-06"),
  // select1: req.body.select1,
  // select2: req.body.select2,
  // cardId: req.body.cardId
  router.put('/Subdata/update/:id', async (req, res) => {
    try {
      const _id = req.params.id;
      console.log(_id);
      const data = req.body;
      console.log(data);
      const options = { new: true };
      const result = await Subdata.findByIdAndUpdate(_id,data,options);
      console.log(result);
      res.status(200).json(result);
    }
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  })


  module.exports = router;