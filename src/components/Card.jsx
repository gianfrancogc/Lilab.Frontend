import React from 'react'

export default function Card({nameProduct,image,price}) {
    return (
       
        <div className='col-3' >
            <div className="card"  >
              <img src={image} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">
                   {nameProduct}  - $ {price.toFixed(2)}
                </h6>
                  <button className='btn btn-primary' >
                    Añadir
                </button>
              </div>
            </div>
          </div>
    )
}
