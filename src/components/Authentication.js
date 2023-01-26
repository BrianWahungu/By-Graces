import React,{useState} from "react"
function Authentication(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
   
    const login = (e) => {
      e.preventDefault();
      console.log(name, email, password);
      const userData = {
        name,
        email,
        password,
      };
      localStorage.setItem('token-info', JSON.stringify(userData));
      setIsLoggedin(true);
      setName('');
      setEmail('');
      setPassword('');
    };
   
    const logout = () => {
      localStorage.removeItem('token-info');
      setIsLoggedin(false);
    };
   
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h1>login</h1>
          {!isLoggedin ? (
           
              <form action=""> 
              <br>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Name"
                />
                </br>
                <br>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
                </br>
                <br>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
                </br>
            <br>
                <button type="submit" onClick={login}>
                  submit
                </button>
                </br>
              </form>
            
             
          ) : (
            <>
              <h1>logged in</h1>
              <button onClickCapture={logout}>logout user</button>
            </>
          )}
        </div>
      </>
)}
export default Authentication 