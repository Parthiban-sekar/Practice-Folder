const { Console } = require("console");
const sp = require("fs");

// const quote = "what you did that you will get ";

// sp.writeFile("awsome.txt",quote,(err)=>{
// console.log("Created successfully");
// })

// const quote1 = "life is beautifull";

// for(let i=0; i<=10; i++){
//     sp.writeFile(`./backup/my11circle${i}.txt`,quote1,(err)=>{
//         console.log(`task 1 successfull my11circle${i}.txt `);
//     })
// }

// const quote2 = "diamond cuts diamond";

// const[, , noOfFiles] = process.argv; 

// for(let i=0; i<noOfFiles; i++){
//     sp.writeFile(`./backup/wormVirus${i}.pdf`,quote2,(err)=>{
//         console.log(`task 1 successfull wormVirus${i}.pdf `);
//     })
// }

// sp.readFile ("./test.txt23","utf-8",(err,data)=>{
// if(err){
//     console.log("Error in this",err)
// }
// console.log(data)
// })

const quote4 = "\n make this day special "

// sp.appendFile("awsome.txt",quote4,(err)=>{
// console.log("Created successfully");
// })\



sp.readdir("./backup","utf-8",(err,files)=>{
    console.log("file names :", files)
files.forEach(filename=>{
    sp.unlink(`./backup/${filename}`,(err)=>{
        console.log("deleted successfully", filename)
    })
})

})