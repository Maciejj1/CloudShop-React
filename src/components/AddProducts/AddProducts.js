import React, {useState} from 'react'
import './AddProducts.scss'
import {storage , db} from '../../config/Config'
const AddProducts = () => {

        const [productName, setProductName] = useState('');
        const [productPrice, setProductPrice] = useState(0);
        const [productDescription , setProductDescription] = useState('');
        const [productImg, setProductImg] = useState(null);
        const [error , setError] = useState('');
  
        const types = ['image/png' , 'image/jpeg'] //image types


        //product imaga handler
        const productImgHandler = (e) => {
            let selectedFile = e.target.files[0];
            if(selectedFile && types.includes(selectedFile.type)) {
                setProductImg(selectedFile);
                setError('');
            }
            else{
                setProductImg(null);
                setError('Ten typ pliku nie jest obsługiwany , Wybierz PNG lub JPEG');
            }
        }

        // add product form submit event
        const addProduct = (e) => {
            e.preventDefault();
           const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
           uploadTask.on('state_changed',snapshot=> {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log(progress);
           }, err=>setError(err.message)
           ,()=> {
               storage.ref(`product-images`).child(productImg.name).getDownloadURL().then(url=> {
                   db.collection('Products').add({
                       ProductName: productName,
                       ProductPrice: Number(productPrice),
                       ProductDescription: productDescription,
                       ProductImg: url
                   }).then(() => {
                       setProductName('');
                       setProductPrice(0);
                       setProductDescription('');
                       setProductImg('');
                       setError('');
                       document.getElementById('file').value = '';
                   }).catch(err=>setError(err.message));
               })
           } )
        }

    return (
        <div className='container'>
         <h2>Dodaj Produkt</h2>
         <hr/>
         <form autoComplete="off" className='form-group' onSubmit={addProduct} >
          <label htmlFor="product-name">Nazwa</label>
          <br/>
          <input type="text" className='form-control' required
          onChange={(e) => setProductName(e.target.value)} value={productName}
           />
           <br />
          <label htmlFor='product-price'>Cena</label>
          <br />
          <input type="number" className='form-control' required
          onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}

           />
          <br />
          <label htmlFor='product-description' >Opis</label>
          <br />
          <input type="text" className='form-control' required 
          onChange={(e)=>setProductDescription(e.target.value)} value={productDescription}

          />
          <br />
          <label htmlFor='product-img'>Zdjęcie</label>
          <br />
          <input type="file" className='form-control' onChange={productImgHandler} id="file"/>
          <br/>
          <button className='btn btn-success btn-md mybtn'>Dodaj</button>
          




         </form>
         {error&&<span>{error}</span>}
        </div>
    )
}

export default AddProducts
