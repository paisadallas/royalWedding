const {SendEmail} = require('./sendEmail.js');
const functions = require("firebase-functions")

const user = new SendEmail()

exports.sendEmailForm = user.sendingEmail()


