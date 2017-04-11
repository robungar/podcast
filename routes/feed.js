var express = require('express');
var router = express.Router();
var superagent = require('superagent');

/* GET users listing. */
router.get('/', function(req, res, next) {
	

	var url = req.query.url
	if(url == null){
		res.json({
				confirmation: 'fail',
				message: 'Missing feed url'
		})
		return
	}
	superagent
	.get(url)
	.query(null)
	.end(function(err, response){
		if(err){
			res.json({
				confirmation: 'fail',
				message: err
			})
			return
		}
		res.send(response.text)
		
	})
});

module.exports = router;
