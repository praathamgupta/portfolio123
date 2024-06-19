import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const appStyles = {
  background: '#000000', // Start with a black background
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  animation: 'backgroundTransition 10s infinite alternate', // CSS animation for the background transition
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary' style={appStyles}>
        <Navbar />
        
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <StarsCanvas />
       
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
