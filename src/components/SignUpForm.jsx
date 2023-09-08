import{ useState } from "react"

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
      event.preventDefault();

      try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
        const result = await response.json();
        console.log(result);
      }catch(error) {
        setError(error.message);
      }
    }
  
  return (
    <>
      <h1>Form</h1>
      {error && <p>{error}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username: <input name="userName"
          value={username} 
          onChange={(event) => {
            setUsername(event.target.value)}} />
        </label>
        <label>
          Password: <input name="password"
          value={password} 
          onChange={(event) => {
            setPassword(event.target.value)}} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form