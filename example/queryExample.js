var db = require("../lib");

var test = db("local");

test.recreate("TestTable")
  .then(function(data) {
    return test.table("TestTable").create({UserId:"1", FileId:"2"});
  })
  .then(function(data) {
    return test.table("TestTable").create({UserId:"1", FileId:"3"});
  })
  .then(function(data) {

    return test.table("TestTable")
      .query()
      .where("UserId").equals(1)
      .where("FileId").between(3, 4)
      .exec();
  })
  .then(function(data) {
    console.log("query data",data);
  })
  .catch(function(err) {
    console.log(err, err.stack);
  });

