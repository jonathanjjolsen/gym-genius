const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');
// Amazon Imports below 
const AwsClient = require('./utils/client');
const { ListBucketsCommand, PutObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const multer = require('multer');
const fs = require('fs');


const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

//Multer helper for uploading files
const upload = multer({ dest: 'temp/' });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// GET route to list buckets (as before)
app.get('/buckets', async (req, res) => {
    try {
        const command = new ListBucketsCommand({});
        const response = await AwsClient.s3Instance.send(command);
        res.send(response.Buckets);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

//Post Route to upload the Avatar photo
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded');
        }

        const fileContent = fs.readFileSync(req.file.path);
        const params = {
            Bucket: 'gym-genius',
            Key: req.file.originalname,
            Body: fileContent
        };

        const command = new PutObjectCommand(params);
        await AwsClient.s3Instance.send(command);

        fs.unlinkSync(req.file.path);

        res.send('File uploaded successfully!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error uploading the file');
    }
});


//Delete Route to delete the Avatar photo
app.delete('/delete/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;

        if (!filename) {
            return res.status(400).send('Filename not provided');
        }

        const params = {
            Bucket: 'gym-genius',
            Key: filename
        };

        const deleteCommand = new DeleteObjectCommand(params);
        await AwsClient.s3Instance.send(deleteCommand);

        res.send(`File ${filename} deleted successfully!`);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error deleting the file');
    }
});

const startServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}

startServer(typeDefs, resolvers);