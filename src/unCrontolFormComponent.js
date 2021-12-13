const App = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = Array.from(new FormData(event.target))
    console.log(Object.fromEntries(data))
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <span>
          Lala
        </span>
        <input name='campo' />
      </div>
        <input name='campo-2' />
        <input type='submit' value='Enviar' />
    </form>
  )
}

export default App;
