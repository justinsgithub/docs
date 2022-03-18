import { CSSProperties } from 'react'
import { Layout } from './shared/layout'

const style: CSSProperties = { fontWeight: 'bold', textAlign: 'center' }

export const NotFound = () => {

  return ( <Layout> <p style={style}> Nothing to see here... </p> </Layout>)
}
