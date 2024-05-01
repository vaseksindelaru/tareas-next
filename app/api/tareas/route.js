import {config} from '../../../db/mysql'
import mysql from'mysql2/promise';
import {NextResponse} from 'next/server'

const conn =  await mysql.createConnection(config);
export function GET(){
    return NextResponse.json({message: 'listando tarea'})
}
export async function POST(request){
    const {tema,subtema,descripcion}  = await request.json()
   const notas1 = await conn.query("INSERT INTO notas SET ?",
   {tema:tema,subtema:subtema,descripcion:descripcion});
   console.log(notas1)
    return NextResponse.json({message: 'creando tarea'})
}