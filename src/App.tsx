import './App.css'
import photos from './mocks/mocks.json';
import {PhotoCard} from "./components/PhotoCard/PhotoCard.tsx";
import Div100vh from "react-div-100vh";

function App() {

  return (
    <Div100vh>
      <div className='wrapper'>
      {photos.map(({id, url}) => (<PhotoCard key={id} url={url}/>))}
      </div>
    </Div100vh>
  )
}

export default App
