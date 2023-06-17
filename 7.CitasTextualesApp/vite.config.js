import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath ( import.meta.url );
const __dirname = path.dirname ( __filename );
// // https://vitejs.dev/config/
//
export default defineConfig ( {
      server : {
            proxy : {
                  '/quotes' : 'http://localhost:3000'
            }
      } ,
      plugins : [ react () ] ,
      resolve : {
            alias : {
                  'bootstrap' : path.resolve ( __dirname , 'node_modules/bootstrap' ) ,
            }
      }
} )