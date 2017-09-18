const fs = require('fs')
const req = require('request')
module.exports = {
    pwd : function(dir){
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');        
    },
    ls : function(dir){
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          })
    },
    echo : function(str){
        process.stdout.write(str);
        process.stdout.write('\nprompt > ');        
    },
    cat : function(file){
        // ask about the extra credit during review!!!
        fs.readFile('./' + file, 'utf8', function(err, data){
            if (err) throw err;
            process.stdout.write(data) 
            process.stdout.write('\nprompt > ');                    
        });
        
    },

    head : function(file){
        fs.readFile('./' + file, 'utf8', function(err, data){
            if (err) throw err;
            process.stdout.write(data.split('\n').slice(0,5).join('\n')) 
            process.stdout.write('\nprompt > ');                    
        });
    },

    tail : function(file){
        fs.readFile('./' + file, 'utf8', function(err, data){
            if (err) throw err;
            process.stdout.write(data.split('\n').slice(-5).join('\n')) 
            process.stdout.write('\nprompt > ');                    
        });
    },

    curl : function(url){
        req(url, function (err, response, body) {
          if (err) throw err;            
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
          process.stdout.write( body); 
          process.stdout.write('\nprompt > ');                              
        });
    },
}