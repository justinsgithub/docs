import { useNavigate } from 'react-router-dom'
import './main-section.styles.scss'
import coffeeLeaf from '../../assets/coffee-leaf.jpg'


const MainSection = () => {
  const navigate = useNavigate()
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-image'>
          <img src={coffeeLeaf} alt="coffee with leaf design" />
        </div>
        <div className='ms-m-description'> 
          <h2> Designed like Art. Crafted for performance. </h2>
          <p>
            Will code for Coffee. Cannot code without coffee.
            Support your local software developer. 
            Keep me fueled up and motivated by funding my sweet, dark addiction.
          </p>

          <button className='button is-black' id='shop-now' onClick={() => navigate('/product/1') }>
            FANCY COFFEE
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainSection
