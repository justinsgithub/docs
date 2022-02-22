import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { AuthProvider } from './utils/auth'
import { RequireAuth } from './utils/RequireAuth'
import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { Accounts } from './pages/Accounts'
import { BookDetails } from './pages/components/BookDetails'
import { Contacts } from './pages/Contacts'
import { ContactDetails } from './pages/components/ContactDetails'
import { Notes } from './pages/Notes'
import { Tasks } from './pages/Tasks'
import { Login } from './pages/Login'
import { NavBar } from './pages/components/NavBar'
import { NoMatch } from './pages/components/NoMatch'
import { FamilyContacts } from './pages/components/FamilyContacts'
import { OtherContacts } from './pages/components/OtherContacts'
import { WorkContacts } from './pages/components/WorkContacts'

//import { Writings } from './pages/Writings'
const LazyLoadedWritings = React.lazy(() => import('./pages/Writings'))

const App = () => {
  return (
  <AuthProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/accounts'
          element={
            <RequireAuth>
              <Accounts />
            </RequireAuth>
          }
        />
        <Route path='books' element={<Books />}>
          <Route path=':bookId' element={<BookDetails />} />
        </Route>
        <Route path='contacts' element={<Contacts />}>
          <Route index element={<FamilyContacts />} />
          <Route path='family' element={<FamilyContacts />} />
          <Route path='work' element={<WorkContacts />} />
          <Route path='other' element={<OtherContacts />} />
          <Route path=':contactId' element={<ContactDetails />} />
        </Route>
        <Route path='notes' element={<Notes />} />
        <Route path='tasks' element={<Tasks />} />
        <Route
          path='writings'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyLoadedWritings />
            </React.Suspense>
          }
        />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
  </AuthProvider>
  )
}

export default App
