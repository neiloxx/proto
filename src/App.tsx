import './App.css'
import photos from './mocks/mocks.json';
import {PhotoCard} from "./components/PhotoCard/PhotoCard.tsx";

function App() {

  return (
    <>
      {photos.map(({id, url}) => (<PhotoCard key={id} url={url}/>))}
    </>
  )
}

export default App
