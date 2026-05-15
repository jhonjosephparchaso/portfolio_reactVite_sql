const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio_db'
})

db.connect((error) => {
    if (error) {
        console.log('Database connection failed:', error)
        return
    }

    console.log('Connected to MySQL database')
})

app.get('/api/profile', (req, res) => {
    const sql = 'SELECT * FROM profile_info LIMIT 1'

    db.query(sql, (error, result) => {
    if (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch profile'
        })
    }

        res.json({
        success: true,
        data: result[0]
        })
    })
})

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
})