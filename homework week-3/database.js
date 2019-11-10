const fs = require("fs")


const save = function(filename, data) {
     fs.writeFileSync(filename, JSON.stringify(data))
 }

 const load = function(filename, handler) {
     fs.readFile(filename, "utf8", (err, file) => {
         if (err) {
             console.log("thereis a read error", err)
             handler(err)
             return
         }
         handler(null, JSON.parse(file));
     })
 }

 module.exports = { save, load }