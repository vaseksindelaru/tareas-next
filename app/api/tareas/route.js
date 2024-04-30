import {NextResponse} from 'next/server'
export function GET(){
    return NextResponse.json({message: 'listando tarea'})
}
export function POST(){
    return NextResponse.json({message: 'creando tarea'})
}