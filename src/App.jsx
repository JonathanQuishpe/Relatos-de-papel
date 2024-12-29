import './App.scss'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import GlobalRouter from './routes/GlobalRouter'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <div className="container">
          <Header />
          <GlobalRouter />
          <Footer />
        </div>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}

export default App
