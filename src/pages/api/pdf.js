import pdf from 'html-pdf';
import fs from 'fs';

export default async function handler (req, res) {
    const html = '<html><body><h1>Hello There</h1></body></html>';
    const options = { format: 'Letter' };

    pdf.create(html, options).toStream((err, stream) => {
        if (err) {
            res.status(500).send('Error generating PDF');
        }
        else {
            res.setHeader('Content-Type', 'application/pdf');
            stream.pipe(res);
        }
    });
}