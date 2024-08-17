import { Header } from './components/Header';
import { Section } from './components/Section';
import { Footer } from './components/Footer';

import './app.css';

export const App = () => {
  const imageURL = "https://images.pexels.com/photos/379419/pexels-photo-379419.jpeg";

  return (
    <main
      className='app'
      style={{backgroundImage: `url(${imageURL})`}}
    >
      <Header />
      <Section />
      <Footer />
    </main>
  )
}