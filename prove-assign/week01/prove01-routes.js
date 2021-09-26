const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Prove01 | Greeting</title></head>')
        res.write('<body><h3>This is my Prove01 assignment</h3>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Prove01 | Users</title></head>')
        res.write('<body><h3>Users List</h3><ul>')
        res.write('<li>knight</li><li>wizard</li><li>hunter</li><li>assassin</li>')
        res.write('</ul></body')
        res.write('</html>')
        return res.end()
    }

    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', d => {
            body.push(d)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
        res.statusCode = 302
        res.setHeader('Location', '/users')
        res.end()
    }
}

module.exports = requestHandler

