import {
  About,
  Header,
  Hero,
  Service,
  Features,
  Project,
  News,
  Contact,
  Customer,
  Footer,
} from "./components/ImportComponent";
import "./css/style.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Features />
      <Project />
      <Customer />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
