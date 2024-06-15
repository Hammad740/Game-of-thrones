import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Data from './Data';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/characters" element={<Data />}></Route>
        <Route path="/character/:search" element={<Search />}></Route>
      </Routes>
    </div>
  );
};
export default Pages;
