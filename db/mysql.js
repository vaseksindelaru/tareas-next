import mysql from 'mysql2/promise';

    export const config = {
      host     : 'localhost',
      user     : 'root',
      port:3306,
      password : '21blackjack',
      database : 'sql1'}

    // export const conn = await mysql.createConnection(config); 