import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import './App.css';
import bg1 from './assets/images/bg1.jpeg';

function App() {
  return (
    <>
      <Header title="Header title" descr="Description of Header" />
      <Layout
        title="First title"
        descr="first description"
        urlBg={bg1} />
      <Layout
        title="Second title"
        descr="second description"
        colorBg="cyan" />
      <Layout
        title="Third title"
        descr="third description"
        urlBg={bg1} />
      <Footer />
    </>
  );
}

export default App;
