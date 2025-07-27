import './login.css'
export function Login()
{
    return(
        <>
         <main className='main-style'>
            <form className="form-style">
            <h3 className='bi bi-person'>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button>Login</button>
         </form>
         </main>
        </>
    )
}

export function Reg(){
    return (
        <>
            <h1>Welcome to registration Page</h1>
        </>
    );
}
