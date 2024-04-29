"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


function Index() {
    const router = useRouter()
    const [message, setMessage] = useState("Que estudiare hoy?");
    
    const handleRefresh = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8080/postgres.py");
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            let destino = "/";

            switch (data.random_number) {
                case 1:
                    setMessage("Props");
                    destino = '/page1';
                    break;
                case 2:
                    setMessage("Supabase");
                    destino = '/page2';
                    break;
                default:
                    break;} 
            
            setTimeout(function(){
                router.push(destino)
                console.log("Hola Mundo");
            }, 3000);

        } catch (error) {
            console.error('Error fetching data:', error);
            setMessage("Error al cargar los datos");
        }
    };

return (
        <div className="text-center py-28">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRefresh}>Elegir</button>
            <div>El tema es:</div>
            <div className="text-xl font-semibold">
                {message}</div>
        </div>
    );
}

export default Index;