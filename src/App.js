import React from 'react';
import About from './components/about/About';
import Container from './components/container/Container';
import Contact from './components/contact/Contact';
import Demos from './components/demos/Demos';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Layout from './components/layout/Layout';
import Banner from './components/banner/Banner';

function App() {
  return (
    <Layout>
      <Container>
        <Header />
        <Banner />
        <Demos />
        <About />
        <Contact />
        <Footer />
      </Container>
    </Layout>
  );
}

export default App;
