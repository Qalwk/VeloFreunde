import Navbar from './Sections/NavBar/Navbar'
import Hero from './Sections/Hero/Hero'
import Info from './Sections/Info/Info'
import Sort from './Sections/Sort/Sort'
import Plus from './Sections/Plus/Plus'
import Photos from './Sections/Photos/Photos'
import Footer from './Sections/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Info id="info-section" />
      <Sort id="sort-section"/>
      <Plus id="plus-section"/>
      <Photos />
      <Footer />
    </BrowserRouter>
  )
}

export default App
