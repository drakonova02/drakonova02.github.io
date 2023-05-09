import './App.css';
import Home from './page/Home';
import Contact from './page/Contact';
import SharedLayout from './SharedLayout'
import NotFound from './NotFound'
import { Route, Routes } from 'react-router-dom';
import Portfolio from './page/Portfolio';
import Resume from './page/Resume';

export default () => {
  return <Routes>
    <Route path='/' element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
    </Route>
    <Route path='*' element={<NotFound />} />
  </Routes>
}
