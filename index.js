// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';

// inquirer.prompt([
//     {
//         name: 'Link to your website',
//         message: 'URL?',
//         type: 'input'
//     }])
//     .then(function (answers) {
//         const qr_svg = qr.image(answers['Link to your website']);
//         qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
//         const qr_text = qr.imageSync(answers.url,);
//         fs.writeFile("URL.txt",qr_text,(err) => {
//             if (err) throw err;
//             console.log("this file has being saved")
//         })
//         console.log('QR code generated and saved as i_love_qr.svg');
//     });



import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {
        name: 'url',
        message: 'Enter the link to your website:',
        type: 'input'
    }])
    .then(function (answers) {
        const qr_svg = qr.image(answers.url, { type: 'svg' });
        qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));

        const qr_text = qr.imageSync(answers.url, { type: 'svg' });
        fs.writeFile("URL.txt", qr_text, (err) => {
            if (err) throw err;
            console.log("The QR code has been generated and saved.");
        });

        console.log('QR code generated and saved as i_love_qr.png');
    });

