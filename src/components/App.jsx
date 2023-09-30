import Auth from 'pages/Auth';
import Home from 'pages/Home';
import MissingPage from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="register" />
            <Route path="login" />
          </Route>
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </div>
  );
};
