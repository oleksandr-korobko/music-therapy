import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import MilitaryMeditation from './pages/MilitaryMeditation';
import PsychologicalSupport from './pages/PsychologicalSupport';
import Contacts from './pages/Contacts';
import MusicTherapyInEducation from './pages/MusicTherapyInEducation';
import MusicTherapyForRehabilitation from './pages/MusicTherapyForRehabilitation';
import MusicTherapyForSpecialNeeds from './pages/MusicTherapyForSpecialNeeds';
import BlogArticle1 from './pages/blog/Article1';
import BlogArticle2 from './pages/blog/Article2';
import BlogArticle3 from './pages/blog/Article3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="military-meditation" element={<MilitaryMeditation />} />
          <Route path="psychological-support" element={<PsychologicalSupport />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="mt-in-education" element={<MusicTherapyInEducation />} />
          <Route path="mt-for-rehabilitation" element={<MusicTherapyForRehabilitation />} />
          <Route path="mt-for-children-with-special-needs" element={<MusicTherapyForSpecialNeeds />} />
          <Route path="blog">
            <Route path="article-1" element={<BlogArticle1 />} />
            <Route path="article-2" element={<BlogArticle2 />} />
            <Route path="article-3" element={<BlogArticle3 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 