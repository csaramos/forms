import { useRef } from "react";

const App = () => {
  const inputRef = useRef();
  const fileRef = useRef();

  const handleSubmitForm = (e) => {
    console.log(inputRef.current.value);
    console.log(fileRef.current.files[0]);
    const form = new FormData()
    form.append('file', fileRef.current.files[0])
    form.append(inputRef.current.name, inputRef.current.value)
    fetch('/lala', {method:'POST', body: form})
  };

  return (
    <div>
      <div>
        <span>Lala</span>
        <input ref={inputRef} type="text" name="campo" />
        <input ref={fileRef} type="file" />
      </div>
      <input type="submit" value="Enviar" onClick={handleSubmitForm} />
    </div>
  );
};

export default App;
