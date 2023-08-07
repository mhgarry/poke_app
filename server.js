const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9091;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
    res.json({ message: 'Server test' });
    }
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    }
);
