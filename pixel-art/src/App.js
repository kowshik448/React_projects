
import { createContext, useState } from 'react';
import './App.css';
import PixelArt from './components/pixelart';
// import Shapes from './components/shapes';

const ColorContext = createContext();
function App() {
  const [selectedColor , setSelectedColor] = useState('#fff')

  return (
    <ColorContext.Provider value={selectedColor} >
      <div>
        <PixelArt selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>
        {/* <Shapes/> */}
      </div>
    </ColorContext.Provider>
  );
}

export default App;
