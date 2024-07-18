import './App.css';

const App = () => {
    return (
      <div>
        <input type = "text" class = "name-input" placeholder="Введите имя" maxlength = "40"></input>
        <div class = "name-line"></div>
        <div class = "personality-border"></div>
        <div class = "main-details">
          <input type = "text" class = "other-char-inputs" placeholder="Введите класс" maxlength = "20"></input>
          <h1> </h1>
          <input type = "text" class = "other-char-inputs" placeholder="Введите предысторию" maxlength = "20"></input>
          <h1> </h1>
          <input type = "text" class = "other-char-inputs" placeholder="Введите имя игрока" maxlength = "20"></input>
        </div>
      </div>
    ) 
}
export default App;