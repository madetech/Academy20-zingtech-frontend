const fs = require('fs')

class APIGateway {
  contructor() {
    
  }
  static get_employees() {
    // const fs = require('fs')
    // console.log(fs)
    // var data = JSON.parse(fs.readFile("./stub_data/1000_employees.json"));
    var data = require("./stub_data/1000_employees.json");
    return (data);
  }
}

export default APIGateway
