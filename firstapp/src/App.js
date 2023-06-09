import './App.css';

import Card from './components/Card';
import BtnES5 from './components/BtnES5';
import BtnES6 from './components/BtnES6';
import GuessBtn from './components/GuessBtn';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import PropDrilling from './components/PropDrilling';

function App() {
  return (
    <div className="App">
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <BtnES5 />
      <BtnES6 />
      <GuessBtn />
      <InputComponent />
      <RegisterForm />
      <TextInputWithFocusButton />
      <PropDrilling />
    </div>
  );
  
}

export default App;
