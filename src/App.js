import Home from '../src/pages/home';
import Header from './ components/header';
import "../src/assets/scss/main.scss";

function App() {
  return (
    <>
      <Header/>
          <div className='main'>
               <Home/>
          </div>
    </>
  );
}

export default App;
