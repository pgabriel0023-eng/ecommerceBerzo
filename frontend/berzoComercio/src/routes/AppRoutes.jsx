import React from 'react';
import { Routes, Route } from 'react-router';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Layout } from '../pages/layout/Layout';
import { Details } from '../pages/details/Details';
import { NotFound } from '../pages/notFound/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/details/:id' element={<Details />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
