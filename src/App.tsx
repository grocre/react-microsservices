import './styles/App.css';

function App() {

  const submit = () => {
    
  }


  return (
    <div className="App">
      <div className="login_div">
        <form> 
          <span>Login:</span>
          <input alt="Digite o seu login"/>
          <span>senha:</span>
          <input type="password" alt="Digite a sua senha aqui"/>
          <button>submeter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
