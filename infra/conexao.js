import mysql from 'mysql'


const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '121314',
    database: 'dbtodolist'
})

conexao.connect()

export default conexao