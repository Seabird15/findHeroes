import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  const navigate = useNavigate()

  //crear funcion de login para que al logear nos dirija a /marvel
  const onLogin = () => {
    navigate('/marvel', {
      //no se puede volver a login
      replace: true
    })
  }

  return (
    <> 
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>

      </div>
    </>

  )
}
