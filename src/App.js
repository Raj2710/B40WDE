import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  let [cart, setCart] = useState(0)
  let [toggle, setToggle] = useState(true)
  let [toggle1,setToggle1] = useState(true)
  let [toggle2,setToggle2] = useState(true)

  return <>
    <Navbar data={{cart,setCart}} />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Fancy Product</h5>
                  {/* <!-- Product price--> */}
                  $40.00 - $80.00
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  {
                    toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                      setCart(cart + 1);
                      setToggle(!toggle)
                    }
                    }>Add to Cart</button>
                      :
                      <button className="btn btn-outline-dark mt-auto" onClick={() => {
                        setCart(state => state - 1);
                        setToggle(state => !state)
                      }
                      }>Remove</button>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Special Item</h5>
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$20.00</span>
                  $18.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {
                    toggle1 ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                      setCart(cart + 1);
                      setToggle1(!toggle1)
                    }
                    }>Add to Cart</button>
                      :
                      <button className="btn btn-outline-dark mt-auto" onClick={() => {
                        setCart(state => state - 1);
                        setToggle1(state => !state)
                      }
                      }>Remove</button>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
              {/* <!-- Product image--> */}
              <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">Sale Item</h5>
                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">$50.00</span>
                  $25.00
                </div>
              </div>
              {/* <!-- Product actions--> */}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                {
                    toggle2 ? <button className="btn btn-outline-dark mt-auto" onClick={() => {
                      setCart(cart + 1);
                      setToggle2(!toggle2)
                    }
                    }>Add to Cart</button>
                      :
                      <button className="btn btn-outline-dark mt-auto" onClick={() => {
                        setCart(state => state - 1);
                        setToggle2(state => !state)
                      }
                      }>Remove</button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default App;
