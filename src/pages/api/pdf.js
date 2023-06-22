// import pdf from 'html-pdf';
// import fs from 'fs';

// export default async function handler (req, res) {


//     const html = "<html><body><h1>Hello there</h1></body></html>";

//     const options = { format: 'Letter' };

//     pdf.create(html, options).toStream((err, stream) => {
//         if (err) {
//             res.status(500).send(err);
//             console.log('err');
//             console.log(err)
//         }
//         else {
//             res.setHeader('Content-Type', 'application/pdf');
//             stream.pipe(res);
//         }
//     });
// }

// UP TO HERE WAS MADE USING HTML-PDF, WORKED LOCALLY, NOT SO MUCH IN PRODUCTION

import jsPDF from "jspdf";
// import { text } from '../../components/Resume.jsx'

export default async function handler(req, res) {
    const doc = new jsPDF();

    var text = '';

    text += 'Kenobi';

    doc.setFontSize(16);
    doc.text(text, 10, 10);

    const pdfBuffer = doc.output('arraybuffer');

    res.setHeader('Content-Type', 'application/pdf');
    res.send(Buffer.from(pdfBuffer));

}