const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateID(data, photoPath) {
  return new Promise((resolve) => {
    const doc = new PDFDocument();
    const fileName = `outputs/${Date.now()}_identity.pdf`;
    const writeStream = fs.createWriteStream(fileName);

    doc.pipe(writeStream);

    // Heading
    doc.font('Times-Bold').fontSize(13).text('Locomotive workshop, Northern Railway, Charbagh, Lucknow', { align: 'center' });

    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(11);
    doc.text(`B.Tech/Diploma VT Unique ID No: ${data.vtNo}`);
    doc.text('Provisional Identity Slip/VT/2025 (For entry & Exit in Loco Workshop Only)');
    doc.moveDown(0.5);
    doc.text(`#Concerned Shop/Section: ${data.section}`);

    doc.moveDown(1);
    doc.font('Times-Bold').text(`Name of Candidate: `, { continued: true });
    doc.font('Times-Roman').text(data.name);
    doc.text(`Father's Name: ${data.fatherName}`);

    doc.moveDown(1);
    doc.text(`#Valid from: ${data.validFrom} to ${data.validTo}`);
    doc.text(`Year, Branch & Institution: ${data.branch}`);
    doc.text(`Address of Candidate with Contact No.: ${data.address}`);

    doc.moveDown(1);
    doc.text(`#Batch No. & Project Code: ${data.projectDetails}`);
    doc.moveDown(1);
    doc.text(`Signature of Candidate`, { align: 'left' });

    // Photo
    doc.image(photoPath, 420, 150, { fit: [100, 100] });
    doc.text(`For Director\nSTC/CB/LKO`, 420, 270);

    doc.end();

    writeStream.on('finish', () => {
      resolve(fileName);
    });
  });
}

module.exports = generateID;
