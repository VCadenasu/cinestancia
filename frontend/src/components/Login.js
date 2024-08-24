function LoginForm() {
    return (
        <form action="#" method="post">
            <div className="form-group">
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="recordar">¿Olvidó su contraseña?</div>
                <button type="submit">Login</button>
                <div className="registrar">
                    <a href="register.html">Registrarse</a>
                </div>
        </form>
    )
}

export default LoginForm;