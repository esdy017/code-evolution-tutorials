import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
// import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { OrderSummary } from './components/OrderSummary'
import { NoMatch } from './components/NoMatch'
import { Products } from './components/Products'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewProducts } from './components/NewProducts'
import { UserDetails } from './components/UserDetails'
import { Admin } from './components/Admin'
import { Users } from './components/Users'
import { Profile } from './components/Profile'
import { AuthProvider } from './components/utils/auth'
import { Login } from './components/Login'
import { RequireAuth } from './components/RequireAuth'
const LazyAbout = React.lazy(() => import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="LOADING...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
