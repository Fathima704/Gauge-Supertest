/* globals gauge*/

"use strict";

var supertest = require('supertest');
var request  = supertest('https://jsonplaceholder.typicode.com');

var assert = require("assert");

// --------------------------
// Gauge step implementations
// --------------------------

gauge.step("Fetch blob with id <table>", function(table, done) {

	table.rows.forEach(function (row) {

  			var rowID = table.rows[0].cells[0]
  			var body = table.rows[0].cells[3]

  			request
    			.get('/posts/'+rowID)
    			.end(function (err, res) {
          try{
          assert.equal(body,res.body.body,"Bleh")  
        }catch(e){
        	done(e);
        }
        }
        );
});
});

gauge.step("Blob post with user id <id> has a corresponding unique title <title>", function(id,title,done) {
        request
          .get('/posts/'+id)
          .end(function (err, res) {
          try{
          assert.equal(title,res.body.title,"Incorrect data is returned")  
          done();
        }catch(e){
          done(e);
        }
        }
        );
});