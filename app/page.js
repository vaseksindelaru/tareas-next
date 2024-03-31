"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function Index() {
    const [message, setMessage] = useState("Loading");
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8080/postgres.py");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                let numeroTexto = "Número desconocido";

                switch (data.random_number) {
                    case 1: router.push('http://localhost:3000/page1');
                        
                        break;
                    case 2:
                        numeroTexto = "dos";
                        break;
                    case 3:
                        numeroTexto = "tres";
                        break;
                    case 4:
                        numeroTexto = "cuatro";
                        break;
                    case 5:
                        numeroTexto = "cinco";
                        break;
                    default:
                        break;
                }
                setMessage(numeroTexto);
            } catch (error) {
                console.error('Error fetching data:', error);
                setMessage("Error al cargar los datos");
            }
        };
        fetchData();
    }, []); // Asegúrate de que el enrutador esté listo antes de acceder a él

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="text-center py-28">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleRefresh}>Refrescar página</button>
            <div>El número es:</div>
            <div className="text-xl font-semibold">{message}</div>
        </div>
    );
}

export default Index;