import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from './context/CartContext.jsx';
import Icon from '@mdi/react';
import { mdiCartOutline, mdiArrowLeft } from '@mdi/js';
import Nav from './Nav'
import '../styles/productDetails.css'

export default function ProductDetails() {
  const { productName } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [detailsData, setDetailsData] = useState([]);


  useEffect(() => {
    async function fetchDetails() {
      try{
        const URL = `https://furniture-api.fly.dev/v1/products?name=${productName}&limit=1`;
        const response = await fetch(URL);

        if(!response.ok) {
          throw new Error(`ERROR: ${response.status}`)
        }

        const json = await response.json();
        if(json && json.data && json.data.length > 0) {
          setDetailsData(json.data)
        } else {
          setError(new Error('Product not found'))
        }
      } catch(error) {
        setError(error);
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [productName]);


  const { addToCart, clicked } = useContext(CartContext);

  const itemCount = clicked.reduce((total, item) => total + item.quantity, 0);


  if(loading) {
    <h1>Loading...</h1>
  }


  if(error) {
    <div>
      <h3>ERROR: {error.message}</h3>
    </div>
  }
  

  if(detailsData && detailsData.length > 0) {
    return (
      <div className='prodDtlsDiv'>
        <nav>
          <Nav />
        </nav>
        <main className="prodDtlsContent">
          <header>
            <div className="returnDiv">
              <NavLink to='/categories'>
                <Icon path={mdiArrowLeft} size={1} color='black' className='returnIcon' title='Go back' />
              </NavLink>
              <h2>Product details</h2>
            </div>
          </header>
          
          <section className="detailSec">
            <div className='detailImage'>
              <img src={detailsData[0].image_path} alt={`Image of ${detailsData[0].name}`}  />
            </div>
            

            <div className="detailInfo">
              <div className="namePriceDiv">
                <p className="detailName">{detailsData[0].name}</p>
                <p className="detailPrice">${detailsData[0].price}</p>
              </div>

              <div className="cartDiv">
                <button className="addBtn" onClick={() => {addToCart(detailsData[0])}}>Add to cart</button>
                <NavLink to='/cart' className='cartLink'>
                  <Icon path={mdiCartOutline} size={1.1} color='black' className='cartIcon' title='Go to cart' />
                  {itemCount > 0 && (
                    <span className='cartLinkSpan'>{itemCount}</span>
                  )}
                </NavLink>
              </div>
            </div>

            <div className="detailDesc">
              <div className="detailWood">
                <p className='detailHeader'>Wood type</p>
                <p className='detailResult'>{detailsData[0].wood_type}</p>
              </div>
              <div className="detailWeight">
                <p className='detailHeader'>Weight</p>
                <p className='detailResult'>{detailsData[0].weight} lb</p>
              </div>
              <div className="additionalInfo">
                <p className='detailHeader'>Description</p>
                <p className='detailResult'>{detailsData[0].description}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return null;
}
