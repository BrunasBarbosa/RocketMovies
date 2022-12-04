import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Profile } from '../pages/Profile';
import { Home } from '../pages/Home';
import { New } from '../pages/New';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  )
}