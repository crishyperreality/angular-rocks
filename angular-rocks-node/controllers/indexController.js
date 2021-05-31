const db = require('../config/connectionDB');

class IndexController {
    
    viewList(req,res){
        let sql = `SELECT * FROM band`;
        db.query(sql, (err, results)=>{
            if(err)throw err;
            res.status(200).json(results)
        })
    }

}

module.exports = new IndexController;