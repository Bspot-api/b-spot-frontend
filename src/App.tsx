import { ProtectedRoute } from '@/components/auth/protected-route';
import { FaviconManager } from '@/components/ui/favicon-manager';
import { AuthProvider } from '@/contexts/auth-context';
import { AccountPage } from '@/pages/account';
import { Dashboard } from '@/pages/dashboard';
import { HomePage } from '@/pages/home';
import { LoginPage } from '@/pages/login';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <FaviconManager />
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
