import { Dispatch, SetStateAction, FC } from 'react'
import { Formik, FormikValues } from 'formik'
import '../checkout.styles.scss'

export interface FormFields {
  name?: string
  email?: string
  address?: string
}

const validate = (values: FormikValues) => {
  const { name, email, address } = values

  const errors: FormFields = {}

  if (!name) { errors.name = 'Required'}
  if (!email) { errors.email = 'Required'}
  if (!address) { errors.address = 'Required'}

  return errors
}

interface ShippingAddressProps {
  setShipping: Dispatch<SetStateAction<FormFields | null>>
}

export const ShippingAddress: FC<ShippingAddressProps> = ({ setShipping }) => {
  const initialValues = { email: '', name: '', address: '' }

  return (
    <div>
      <h4>Shipping Address</h4>
      <Formik initialValues={initialValues} validate={validate} onSubmit={values => setShipping(values) }>
        {
          ({ values, errors, handleChange, handleSubmit }) => {
            const { name, email, address } = errors

            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <input type='text' name='name' placeholder='Name' onChange={handleChange} value={values.name} className={'nomad-input ' + (name ? 'error' : '')} />  
                  <input type='email' name='email' placeholder='Email' onChange={handleChange} value={values.email} className={'nomad-input ' + (email ? 'error' : '')} />  
                  <input type='text' name='address' placeholder='Address' onChange={handleChange} value={values.address} className={'nomad-input ' + (address ? 'error' : '')} />  
                </div> 
                <div className="submit-btn">
                  <button type='submit' className="button is-black nomad-btn submit">
                    CONTINUE
                  </button>
                </div>
              </form>
            )
          }
        }
      </Formik>
    </div>
  )
}