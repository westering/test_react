import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/login-page/ui/LoginPage'
import { ProductsPage } from '@/pages/products-page/ui/ProductsPage'
import { ProtectedRoute } from '@/app/router/ProtectedRoute'

export const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <ProductsPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<Navigate to="/products" replace />} />
  </Routes>
)
