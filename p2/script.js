const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='showHome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick='showLogin()'>Already a member</button></p>
    
    `
    root.innerHTML = str
}
const showHome =() => {
    <p>Welcome</p>
}