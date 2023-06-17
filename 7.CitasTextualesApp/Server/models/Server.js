const express = require('express');
const cors = require('cors');
require('dotenv').config()
class Server {
      constructor () {
            this.app = express();
            this.paths = {
                  quotesPath : '/quotes'
            }

            this.PORT = process.env.PORT || 3000;

            this.middlewars();
            this.routes();
      }

      middlewars () {
            this.app.use(express.static('dist'));
            this.app.use(cors());
      }

      routes () {
            this.app.use(this.paths.quotesPath,require('../routes/quotes'));
      }

      start(){
            this.app.listen(this.PORT,()=>{
                  console.log ("Server running on port number", this.PORT);
            })
      }
}

module.exports = Server