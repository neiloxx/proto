import './App.css'
import photos from './mocks/mocks.json';
import { PhotoCard } from './components/PhotoCard/PhotoCard.tsx';

function App() {

  return (
    <>
      <div className='wrapper'>
        { photos.map(({ id, url }) => (<PhotoCard key={ id } url={ url } />)) }
        <div className='backing'></div>
      </div>
      {/*<footer>fixed footer?</footer>*/}
    </>
  )
}

export default App
