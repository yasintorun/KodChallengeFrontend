import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router';
import Layout from './layout/Layout'
import AboutPage from './pages/AboutPage';
import MainPage from './pages/main/MainPage';
import TrackListPage from './pages/TrackListPage';
import ProblemListPage from './pages/ProblemListPage';
import ProblemDetailPage from './pages/ProblemDetailPage';
import ProblemEditor from './pages/ProblemEditor';
import { useDispatch } from 'react-redux';
import { getAllTrack } from './store/actions/trackActions';
import AuthLayout from './layout/AuthLayout';
import Signup from './pages/auth/Signup';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    //Base Configures
    dispatch(getAllTrack())
  }, [])

  return (
    <div className="App">
        <Routes>
          <Route path='editor' element={<ProblemEditor />}/>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<MainPage />} />
            <Route path='tracks/' element={<TrackListPage />}/>
            <Route path='tracks/:trackName' element={<ProblemListPage />}/>
            <Route path='tracks/:trackName/:problemName' element={<ProblemDetailPage />}/>
            <Route path='about-project' element={<AboutPage />}/>
          </Route>
          <Route path='auth' element={<AuthLayout />}>
              <Route path='signup' element={<Signup />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;