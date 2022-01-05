import React from 'react'

const AddProducts = () => {
    return (
        <div className='container'>
         <h2>add products</h2>
         <hr/>
         <form autoComplete="off" className='form-group' >
          <label htmlFor="product-name">Product Name</label>
          <br/>
          <input type="text" className='form-control' required />
          <label htmlFor='product-price'>Product Price</label>
          <br />
          <input type="number" className='form-control' required />
          <input type="file"/>
          <br/>
          <button className='btn btn-success btn-md'>ADD</button>
          




         </form>
        </div>
    )
}

export default AddProducts
