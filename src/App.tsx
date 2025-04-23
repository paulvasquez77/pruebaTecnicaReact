import { useState } from "react";
import { Users } from "./components/Users"
import styles from "./styles.module.css";


export const App = () => {
  const { UsersData } = Users()

  const [isPaintedRow, setIsPaintedRow] = useState(false)
  const [isOrderByCountry, setIsOrderByCountry] = useState(false)

  const toggleRows = () => setIsPaintedRow(!isPaintedRow)

  const orderByCountry = () => {
    const userOrder = [...UsersData].sort((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
  }

  return (
    <>
      <h2 className={styles.title}>Lista de usuarios</h2>

      <div className={styles.botonEstados}>
        <button className={styles.button} onClick={toggleRows}>Colorear filas</button>
        <button className={styles.button} onClick={orderByCountry}>Ordenar por país</button>
        <button className={styles.button}>Restaurar estado inicial</button>
        <input type="text" placeholder="Filtrar por país" />
        <span>Número de usuarios: {UsersData.length}</span>
      </div>

      <table className={`${styles.table} ${isPaintedRow ? styles.childen : ""}`}>
        <thead className={styles.head}>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>País</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody className={styles.body}>
          {UsersData?.map(user => (
            <tr key={user.login.uuid}>
              <td><img src={user.picture.thumbnail} alt={user.name.first} /></td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td onClick={orderByCountry}>{user.location.country}</td>
              <td>
                <button className={styles.button}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
