import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Notes } from './pages/Notes'
import { Tasks } from './pages/Tasks'
import { Books } from './pages/Books'
import { BookDetails } from './pages/components/BookDetails'
import { ContactDetails } from './pages/components/ContactDetails'
import { Contacts } from './pages/Contacts'
import { NavBar } from './pages/components/NavBar'
import { NoMatch } from './pages/components/NoMatch'
import { FamilyContacts } from './pages/components/FamilyContacts'
import { WorkContacts } from './pages/components/WorkContacts'
import { OtherContacts } from './pages/components/OtherContacts'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='notes' element={<Notes />} />
        <Route path='tasks' element={<Tasks />} />
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
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
