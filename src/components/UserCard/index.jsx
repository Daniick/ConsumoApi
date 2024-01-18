import React, { useState, useEffect } from "react";

export default function UserCard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserData(data); // Ahora estamos estableciendo el array completo de usuarios
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {userData.map((user) => (
        <div
          key={user.id}
          className="block m-4 w-64 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg w-full h-40"
              src={`https://picsum.photos/seed/${user.id}/300/300`} // Cambiado para usar la ID del usuario en la URL de la imagen
              alt={`${user.name} Image`}
            />
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-2xl">{user.name}</h3>
            <h3 className="">@{user.username}</h3>
            <h3>{user.email}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
