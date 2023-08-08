const AWS = require('aws-sdk')
const AWS3 = require('@aws-sdk/client-s3')
require('dotenv').config();

// Amazon Web Services Variables
const region = process.env.REACT_APP_REGION
const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY

//Config Amazon
AWS.config.update({ region, credentials: { accessKeyId, secretAccessKey } })

const s3Instance = new AWS3.S3({ region, credentials: { accessKeyId, secretAccessKey } })

module.exports = {
    AWS,
    s3Instance
}