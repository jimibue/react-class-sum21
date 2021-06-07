import './App.css';
import CounterClass from './CounterClass';
import CounterFunc from './CounterFunc';
import {useState} from 'react'
import ContactApp from './ContactApp';

function App() {
  const [t1, setT1] = useState(true)
  const [t2, setT2] = useState(true)
  if( true) {
    return <ContactApp />
   }

  return (
    <div className="App">
      <div onClick={()=> setT1(!t1)}>toggle 1</div>
      <div onClick={()=> setT2(!t2)}>toggle 2</div>
      {t1 &&<CounterFunc name='functional counter demo'/>}
      {t2 && <CounterClass name='class counter demo' />}
    </div>
  );
}

export default App;
