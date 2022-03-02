import './footer.styles.scss'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      {year} © <a href='https://justintylers.com'>JustinTylers.com</a>
    </div>  
  )
}

export default Footer
