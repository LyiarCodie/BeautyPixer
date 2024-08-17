import express from 'express';
import json from './placeholder.json' assert { type: "json" };

const port = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());

app.get("/placeholder", (req, res) => {
    res.send(json)
})

app.get("/api.beautypixer", async (req, res) => {
    try {
        const response = await fetch("http://localhost:3000/placeholder")
        const data = await response.json();

        res.send(data)
    }
    catch (err)
    {
        console.error('> [Error | /api.beautypixer] something goes wrong while fetching data');
        throw new Error(err)
    }
})



app.listen(port, () => console.log(`listening on http://127.0.0.1:${port}`));