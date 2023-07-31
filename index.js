import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([
    {
        name: 'Link to your website',
        message: 'URL?',
        type: 'input'
    }])
    .then(function (answers) {
        const qr_svg = qr.image(answers['Link to your website'], { type: 'svg' });
        qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));
        console.log('QR code generated and saved as i_love_qr.svg');
    });




