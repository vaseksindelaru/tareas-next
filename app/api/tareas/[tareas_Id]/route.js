import {NextResponse} from 'next/server'
export function GET(){
    return NextResponse.json({message: 'obteniendo tarea'})}

export function DELETE(){
    return NextResponse.json({message: 'eliminando tarea'})}
    
export function PUT(){
    return NextResponse.json({message: 'creando tarea'})}
       