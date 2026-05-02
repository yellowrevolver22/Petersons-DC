import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageCards from './components/PageCards'
import PageCardsTwo from './components/PageCardsTwo'
import Quote from './components/Quote'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <PageCards></PageCards>
      <PageCardsTwo></PageCardsTwo>
      <Quote></Quote>
      <Footer></Footer>
    </>
  )
}

export default App
