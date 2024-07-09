import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Admin from './components/Admin';
import Skills from './components/skills';
import Login from './components/Login';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className='flex-grow container mx-auto px-4 py-8'>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
                } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
