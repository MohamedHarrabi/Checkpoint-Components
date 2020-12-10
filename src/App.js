import './App.css';

import Profilephoto from './Component/Profile/ProfilPhoto';

import FullName from './Component/Profile/FullName';

import Adress from './Component/Profile/Address'

function App() {
  return (
    <div className="App">

    <Profilephoto />
    <div  className="ClassB">
    <FullName />
   

    <Adress />
    </div>
    
    </div>
  );
}

export default App;
