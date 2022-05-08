var http = require('http');
var mysql = require('mysql');

http.createServer(function (req, res) {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        port: 3308
    });
    let resultTable = `    <table style="border: 1px solid black;">
    <thead>
        <tr>
            <th style="border: 1px solid black;">
                id
            </th>
            <th style="border: 1px solid black;">
                nama 
            </th>
            <th style="border: 1px solid black;">
                alamat
            </th>
            <th style="border: 1px solid black;">
                usia
            </th>
            <th style="border: 1px solid black;">
                email
            </th>
        </tr>
    </thead>`;
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        connection.query('SELECT * FROM user.user', function (error, results, fields) {
            if (error) throw error;
            // connected!
            //console.log(results);

            results.forEach(rowData => {
                resultTable += `
            <tr>
                <td style="border: 1px solid black;">${rowData['id']}</td>
                <td style="border: 1px solid black;">${rowData['nama']}</td>
                <td style="border: 1px solid black;">${rowData['alamat']}</td>
                <td style="border: 1px solid black;">${rowData['usia']}</td>
                <td style="border: 1px solid black;">${rowData['email']}</td>
            </tr>`
                console.log(rowData['nama'])
                
    resultTable+=`</table>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`Hello World! by RBT </br>${resultTable}`);
            });
        });



        console.log('connected as id ' + connection.threadId);
    });
}).listen(8081);