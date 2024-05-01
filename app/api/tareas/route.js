import {config} from '../../../db/mysql'
import mysql from'mysql2/promise';
import {NextResponse} from 'next/server'

const conn =  await mysql.createConnection(config);
export async function GET(){
const notasGet = await conn.query ('SELECT * FROM notas')
    return NextResponse.json(notasGet)
}
export async function POST(request){
    const {tema,subtema,descripcion}  = await request.json()
   const notasPost = await conn.query("INSERT INTO notas SET ?",
   {tema:tema,subtema:subtema,descripcion:descripcion});
  console.log(notasPost)
    return NextResponse.json({tema,subtema,descripcion,id: notasPost.insertId})
}