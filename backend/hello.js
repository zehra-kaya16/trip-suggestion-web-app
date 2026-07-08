require('dotenv').config(); // .env dosyasını yükler
const mysql = require('mysql2');
const OpenAI = require('openai');
const http = require('http');

// OpenAI API yapılandırması
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // OpenAI API anahtarı .env dosyasından alınır
});

// MySQL bağlantısı
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "2121",
    database: "test_db"
});

con.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.message);
    } else {
        console.log('Connected to the database!');
    }
});

// HTTP sunucusu oluşturma
const requestListener = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', async () => {
        try {
            if (req.url === '/generate_suggestion' && req.method === 'POST') {
                const payload = JSON.parse(body);

                if (!payload.age || !payload.type || !payload.size || !payload.sport || !payload.budget) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: "All fields are required." }));
                    return;
                }

                const prompt = `
                    Bir kullanıcı için seyahat önerisi yap:
                    Yaş: ${payload.age}
                    Tercih edilen seyahat türü: ${payload.type}
                    Seyahat eden kişi sayısı: ${payload.size}
                    Sevdiği sporlar: ${payload.sport}
                    Bütçesi: ${payload.budget} TL.
                    Kullanıcıya özel seyahat önerileri neler olabilir?
                `;

                try {
                    const response = await openai.chat.completions.create({
                        model: "gpt-3.5-turbo",
                        messages: [{ role: "user", content: prompt }],
                        max_tokens: 200,
                    });

                    const suggestion = response.choices[0].message.content;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ suggestion }));
                } catch (error) {
                    console.error("OpenAI API Error:", error.message);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: "Failed to generate suggestion from OpenAI API." }));
                }
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("Endpoint Not Found");
            }
        } catch (error) {
            console.error("Unexpected Error:", error.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Internal Server Error" }));
        }
    });
};

// Sunucuyu başlat
const server = http.createServer(requestListener);
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3000');
});
