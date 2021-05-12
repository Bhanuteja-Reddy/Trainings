import logo from './logo.svg';
import './App.css';
import SayHello from './say-hello';
import NavBar from './navBar/navbar'

function App() {
  return (
    <div className="App">
      <NavBar links={[0,1,2,3,5,6,7,8,9,10]} theam={'light'}/>
      <SayHello name={'Bhanuteja Reddy'} gender={'Male'}/>
      <SayHello name={'Harish Naidu'} gender={'Male'}/>
      <SayHello name={'LaxmiBhai'} gender={'FeMale'}/>
    </div>
  );
}

export default App;
