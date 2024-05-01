

import {NextResponse} from 'next/server'
export function GET(){
    return NextResponse.json({message: 'listando tarea'})
}
export async function POST(request){
    const {tema,subtema,descripcion}  = await request.json()
    console.log(data)
    return NextResponse.json({message: 'creando tarea'})
}