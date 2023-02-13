import * as React from 'react'
import './App.css';

function App() {
  const [state, setState] = React.useState(true)
  const [checkboxState, setCheckboxState] = React.useState(false)
  const [ableContainer, setAbleContainer] = React.useState(false)


  const handleState = () => setState(!state)

  const getText = state => state ? "Click me!" : "I was clicked!!"

  

  const handleClickCheckbox = () => {
    setCheckboxState(!checkboxState)
    setAbleContainer(!ableContainer)
  }
  return (
    <div>
      <button
        onClick={handleState} 
        style={{backgroundColor: 'red', borderStyle: 'none'}}>{getText(state)}
      </button>
      <form>
        <label htmlFor='checkbox-input'>Please accept terms</label>
        <input id='checkbox-input' type="checkbox" onClick={handleClickCheckbox} value={checkboxState} />
      </form>
      {ableContainer ? <div data-testid='test-container'>Im here</div> : null}
    </div>
  );
}

export default App;
