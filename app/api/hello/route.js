import {NextResponse} from 'next/server'
import {config} from '../../../db/mysql'

import mysql from 'mysql2/promise';

    /*const config = {
      host     :'localhost',
      user     :'root',
      port:3306,
      password :'21blackjack',
      database :'sql1'}*/

const conn =  await mysql.createConnection(config); 



export async function GET() {
  try {
      const [rows] = await conn.query("SELECT NOW()");
      const now = rows[0]['NOW()'];
      console.log(now);
      return NextResponse.json({ message: now });
  } catch (error) {
      console.error("Error:", error);
      return NextResponse.error({ message: "Error al obtener la fecha actual" });
  }
}