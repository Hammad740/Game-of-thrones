import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Pages from './components/Pages';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
};
export default App;
