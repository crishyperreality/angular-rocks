const db = require('../config/connectionDB');
const util = require('util');

class IndexController {
    
    viewList(req,res){
        let sql = `SELECT * FROM band WHERE visible`;
        db.query(sql, (err, results)=>{
            if(err)throw err;
            res.status(200).json(results)
        })
    }

    viewBand(req,res){
    
        let bandid = req.params.band_id;
        console.log(bandid)
        let sql = `SELECT * FROM band WHERE band_id=${bandid}`;
        db.query(sql, (err, result)=>{
            console.log('pasa')
            if(err)throw err;
            res.status(200).json(result[0])
        })
    }

    deleteBand (req,res){
        let bandID = req.body.band_id;
        let sql = `UPDATE band SET visible = 0 WHERE band_id = ${bandID}`
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json(result)
        })
    }

    addBand(req,res){
        let { name, info, image, video } = req.body;
        let sql = `INSERT INTO band (name, info, image, video) VALUES ('${name}', '${info}', '${image}', '${video}')`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json(result)
        })
    }

    editBand(req,res){
        let { band_id, name, info, image, video } = req.body;
        let sql = `UPDATE band SET name = '${name}', info = '${info}', image = '${image}', video = '${video}' WHERE band_id = ${band_id}`;
        db.query(sql, (err, result)=>{
            if(err)throw err;
            res.status(200).json(result)
        })
    }
}

module.exports = new IndexController;