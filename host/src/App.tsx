import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

const Main = loadable(() => import('@pages/Main'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Acoe = loadable(() => import('@pages/Acoe'));
const AcoePrivacy = loadable(() => import('./pages/components/AcoePrivacy'));
const AcoeService = loadable(() => import('./pages/components/AcoeService'));

const App = () => (
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/login' element={<LogIn />} />
    <Route path='/oauth/redirect' element={<SignUp />} />
    <Route path='/acoe' element={<Acoe />} >
      <Route path="privacy" element={<AcoePrivacy />} />
       <Route path="service" element={<AcoeService />} />
    </Route>
  </Routes>
);

export default App;
