"use client";                       // Pour signaler que ce composant dois s'executer côté navigateur et pouvoir utiliser les Hooks
import { useState } from "react";   //useState -> Hook React pour mémoriser une valeur

export default function RegisterPage() {            //Composant pour la page register

    const [email, setEmail] = useState("");         //email -> Valeur du champs / setEmail -> Fonction pour changer la valeur
    const [password, setPassword] = useState("");   //Idem que Email

    const handleSubmit = async (e: React.FormEvent) => {    //HandleSubmit est appelé quand on clic sur l'envoie du formulaire
        e.preventDefault();                                 // Pour empecher le navig de recharger la page
        
        try {
            const res = await fetch("http://127.0.0.1:8000/register", {         // Fetch Post vers FastAPI /register
            method: "POST",
            headers: {
                "Content-Type": "application/json",                             // Header pour préciser l'envoi de JSON
            },
            body: JSON.stringify({                                              // Contient les infos en JSON (email + password)
                email,
                password,
            }),
            });

            const data = await res.json();
            console.log("✅ Register API response:", data);                     // Console log pour afficher la réponse
        } catch (err) {
            console.error("❌ Register error:", err);                           // Console log pour afficher l'erreur
        }
    };

    return (                                                                    // Formulaire en HTML avec appel de handleSubmit
        <main className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Register</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2"
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2"
                required
            />

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
            </form>
        </main>
    );


}
