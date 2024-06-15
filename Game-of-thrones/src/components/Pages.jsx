import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Data from './Data';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/characters" element={<Data />}></Route>
        <Route path="/characters/:search" element={<Search />}></Route>
      </Routes>
    </div>
  );
};
export default Pages;
