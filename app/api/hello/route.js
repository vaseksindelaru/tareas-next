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



export async function GET(){
  const result = await conn.query("SELECT NOW()")
    
    console.log(result)
 return NextResponse.json({message: 'Hello World'})}