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
        // var body = "blah";

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

gauge.step("Fetch blob with <userId> with <id>", function(userId,id,done) {
        request
          .get('/posts/'+id)
          .end(function (err, res) {
          try{
            console.log("response id =========",res.body.id)
            console.log("data id =========",id)

          assert.equal(id,res.body.id,"Incorrect data is returned")  
          done();
        }catch(e){
          done(e);
        }
        }
        );
});