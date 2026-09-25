// Task 5: Send an email to yourself using nodemailer
const nodemailer = require('nodemailer');

async function sendEmail() {
  // Replace these with your actual email and password
  const senderEmail = 'your-email@gmail.com';
  // Use an App Password if you are using Gmail
  const senderPassword = 'your-app-password'; 
  const receiverEmail = 'your-email@gmail.com';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: senderEmail,
      pass: senderPassword
    }
  });

  const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent using Node.js and Nodemailer.'
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email:', error.message);
    console.log('\nNote: To actually send an email, please update the senderEmail and senderPassword variables with your real credentials. If using Gmail, you will need to generate an App Password.');
  }
}

sendEmail();
