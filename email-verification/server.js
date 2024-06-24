require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const app = express()
const port = 3001 // Ensure this port is not conflicting with your React app

app.use(bodyParser.json())

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post('/send-verification-email', (req, res) => {
  const { email } = req.body

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email Verification',
    text: 'Please verify your email by clicking the link: http://your-website.com/verify-email',
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error)
      return res.status(500).send(error.toString())
    }
    console.log('Email sent:', info.response)
    res.status(200).send('Verification email sent: ' + info.response)
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

console.log('EMAIL_USER:', process.env.EMAIL_USER)
console.log('EMAIL_PASS:', process.env.EMAIL_PASS)
