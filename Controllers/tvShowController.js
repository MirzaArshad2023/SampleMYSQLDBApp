"use strict";
const Models = require("../models");
// finds all tvShows in DB, then sends array as response

const extracttvShowsAndCreateDataBase = (res)=>{
    fetch('https://api.sampleapis.com/cartoons/cartoons2D')
    .then((response)=> response.json())
    .then((json)=>{
        //creating the database now.

        Models.tvShow.destroy({ where: {}, truncate: true, cascade: true })
        Models.tvShow.bulkCreate(json).then(() => {
            console.log("data has been inserted into the database");
          });
        res.json(json)
    } )
}

const gettvShows = (res) => {
    Models.tvShow.findAll({}).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}
// uses JSON from request body to create new tvShow in DB
const createtvShow = (data, res) => {
    Models.tvShow.create(data).then(data => {
        res.send({ result: 200, data: data });
    }).catch(err => {
        console.log(err);
        res.send({ result: 500, error: err.message });
    })
}

// uses JSON from request body to update tvShow ID from params
const updatetvShow = (req, res) => {
    Models.tvShow.update(req.body, {
        where: { id: req.params.id },
        returning: true
    })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// deletes tvShow matching ID from params
const deletetvShow = (req, res) => {
    Models.tvShow.destroy({ where: { id: req.params.id } })
        .then(data => {
            res.send({ result: 200, data: data });
        }).catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
module.exports = {
    gettvShows, createtvShow, updatetvShow, deletetvShow, extracttvShowsAndCreateDataBase
}