import React from 'react'
import Signup from './views/auth/Signup'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="home bg-black animate-rgb-gradient min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
    </div>
  )
}

export default App
