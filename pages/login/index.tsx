import React, { useState } from "react";
import jwt from 'jsonwebtoken';
import Link from 'next/link';

const Login = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string>('You are not login');
  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if(token)
    {
        const json = jwt.decode(token) as {[key: string]: string}
        console.log(json);
        setMessage('Welcome '+ json.username);
    }
    else{
        setMessage('Somehink went wrong')
    }
  }

  return (
    <div>
        <h1>{message}</h1>
      <form method="POST" action="/api/login">
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Login" onClick={submitForm} />
      </form>
      <Link href="/">
          <a>Home</a>
      </Link>
    </div>
  );
};

export default Login;
