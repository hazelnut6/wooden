import { useContext, useState, useEffect } from 'react'
import { CartContext } from "./context/CartContext";
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiEyeOutline } from '@mdi/js';
import Nav from './Nav'
import '../styles/categories.css'

export default function Categories() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    furniture(10, 'desk')
  }, []);

  async function furniture(num, cat) {
    try{
      const URL = `https://furniture-api.fly.dev/v1/products?category=${cat}&limit=${num}`;
      const response = await fetch(URL);

      if(!response.ok) {
        throw new Error(`ERROR: ${response.status}`)
      }

      const json = await response.json();
      setData(json.data)
    } catch(error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const { addToCart } = useContext(CartContext);

  function catFilter(cat) {
    setLoading(true);
    furniture(10, cat)
  }

  function handleClick() {
    alert('For sample only. \nTry the categories buttons instead, for filter ;)')
  }

  if(loading) {
    return(
      <>
        <nav>
          <Nav />
        </nav>
        <h1 className='loadingHeader'>Loading...</h1>
      </>
    )
  }

  if(error) {
    return(
      <>
        <nav>
          <Nav />
        </nav>
        <h3 className='errorHeader'>Could not fetch data</h3>
      </>
    ) 
  }

  if(data) {
    return (
      <div className='catDiv'>
        <nav>
          <Nav />
        </nav>
        <main className="catContent">
          <aside className="catLeft">
            <p className='asideHeader'>Categories</p>
            <div className="catList">
              <button className="catBtn" onClick={() => {catFilter('chair')}}>Chair</button>
              <button className="catBtn" onClick={() => {catFilter('sofa')}}>Sofa</button>
              <button className="catBtn" onClick={() => {catFilter('lamp')}}>Lamp</button>
              <button className="catBtn" onClick={() => {catFilter('mirror')}}>Mirror</button>
              <button className="catBtn" onClick={() => {catFilter('stool')}}>Stool</button>
              <button className="catBtn" onClick={() => {catFilter('kitchen')}}>Kitchen</button>
              <button className="catBtn" onClick={() => {catFilter('garden')}}>Garden</button>
            </div>
          </aside>
  
          <div className="catRight">
            <div className="rightUp">
              <h2 className="rightHeader">Products</h2>

              <div className="searchDiv">
                <input type="text" name='searchBar' className='searchBar' placeholder='table...'/>
                <button type='button' className="searchBtn" onClick={() => {handleClick()}}>Search</button>
              </div>

              <div className="catBtns">
                <button className="catBtnSm" onClick={() => {catFilter('chair')}}>Chair</button>
                <button className="catBtnSm" onClick={() => {catFilter('sofa')}}>Sofa</button>
                <button className="catBtnSm" onClick={() => {catFilter('lamp')}}>Lamp</button>
                <button className="catBtnSm" onClick={() => {catFilter('mirror')}}>Mirror</button>
                <button className="catBtnSm" onClick={() => {catFilter('stool')}}>Stool</button>
                <button className="catBtnSm" onClick={() => {catFilter('kitchen')}}>Kitchen</button>
                <button className="catBtnSm" onClick={() => {catFilter('garden')}}>Garden</button>
              </div>
            </div>

            <div className="rightDown">
              <ul className="productList">
                {data.filter((product, index, self) => {
                  const names = self.map(p => p.name);
                  return index === names.indexOf(product.name)
                }).map((d) => (
                  <li key={d.id} className='productDiv'>
                    <div className="imgDiv">
                      <img src={d.image_path} alt={`Image of ${d.name}`} />
                    </div>
                    <div className="ctaDiv">
                      <p className="productName">{d.name}</p>
                      <p className="productPrice">${d.price}</p>
                      <div className="ctaBtns">
                        <button className="catAddBtn" onClick={() => {addToCart(d)}}>Add to cart</button>
                        <NavLink to={`/product/${d.name}`}>
                          <button className="viewBtn">
                            <Icon path={mdiEyeOutline} size={1} color='white' className='viewIcon' title='View details'/>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
