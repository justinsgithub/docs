import { useParams } from 'react-router-dom'

export const ContactDetails = () => {
  const { contactId } = useParams()

  return <h2>details about contact { contactId }</h2>
}
