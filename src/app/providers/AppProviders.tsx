import type { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@emotion/react'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from '@/app/providers/SessionProvider'
import { AddProductModalProvider } from '@/features/products/add-product/ui/AddProductModalProvider'
import { queryClient } from '@/shared/lib/query/queryClient'
import { GlobalStyles } from '@/shared/styles/GlobalStyles'
import { theme } from '@/shared/styles/theme'

export const AppProviders = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <AddProductModalProvider>
          <BrowserRouter>
            <GlobalStyles />
            {children}
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  borderRadius: 12,
                  padding: '12px 14px',
                  background: '#ffffff',
                  color: '#1f2937',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                },
              }}
            />
            {import.meta.env.DEV ? (
              <ReactQueryDevtools initialIsOpen={false} />
            ) : null}
          </BrowserRouter>
        </AddProductModalProvider>
      </SessionProvider>
    </QueryClientProvider>
  </ThemeProvider>
)
