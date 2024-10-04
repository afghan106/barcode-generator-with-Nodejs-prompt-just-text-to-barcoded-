import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";



inquirer
  .prompt([
    /* Pass your questions in here */
    {name:"URL",
message:"enter your link that you are intendent to encript"}
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = answers.URL;
    var qr_svg = qr.image(url);
    var image=0;
    qr_svg.pipe(fs.createWriteStream(url.substring(0,20)+".png"));

    
  })
