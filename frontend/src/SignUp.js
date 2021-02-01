import React from 'react'

function SignUp(){
    
    return(
        <div>
            <h1>Yodlr Registration Portal</h1>
            <form>
                Email: <input type="email" name="email"/>
                <button type="submit">Submit</button>
            </form>
            <p>
              <a href="/admin">Admin Page</a>
            </p>
        </div>
    )
}

export default SignUp