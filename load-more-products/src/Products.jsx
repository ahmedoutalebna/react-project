import {useEffect, useState} from 'react'
const Product = ()=>{
    const [initialProducts, setInitialProducts] = useState([])
    const [fetchedProducts, setFetchedProducts] = useState([])
    const [productsNumber, setProductsNumber] = useState(19)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(false)
    useEffect(()=>{
        fetchProducts()
    }, [])
    const fetchProducts = async()=>{
        try
        {
            const data = await fetch("https://fakestoreapi.com/products")
            const response = await data.json()
            setInitialProducts(response)
        }
        catch(err)
        {
            console.error(err)
        }
    }

    const handleMoreProducts = async()=>{
        setLoading(true)
        if(productsNumber < 99)
        {
            let url = `https://dummyjson.com/products?limit=20&skip=${productsNumber}&select=title,price,category,images`
            try
            {
                const response = await fetch(url)
                const data = await response.json()
                setFetchedProducts(prevFetchedProducts => [...prevFetchedProducts, ...data.products])
                console.log('products number: ', productsNumber)
                setProductsNumber(prevProductsNumber => prevProductsNumber + 20)
                productsNumber === 79 && setLimit(true)

            }
            catch(err)
            {
                console.error(err)
            }
        }
        else
        {
            setProductsNumber(prevProductsNumber => prevProductsNumber + 20)
        }
        
    }
    
    return(
        <div className="container">
            {
                initialProducts.map((item, index)=>(
                    <div className="card" key={index}>
                        <img src={item.image} className='product-image'/>
                        <p className="title">{item.title}</p>
                        <div className="informations">
                            <p className='price'>${item.price}</p>
                            <p className='category'>{item.category}</p>
                        </div>
                    </div>
                ))
            }
            {
                loading && fetchedProducts.map((item, index)=>(
                    <div className="card" key={index}>
                        <img src={item.images[0]} className='product-image'/>
                        <p className="title">{item.title}</p>
                        <div className="informations">
                            <p className='price'>${item.price}</p>
                            <p className='category'>{item.category}</p>
                        </div>
                    </div>
                ))
            }
            {
                productsNumber >= 99 && (
                    <div className='no-more'> You cannot fetch more than 100 products </div>
                )
            }

            <div className="load-button">
                <button onClick={()=> handleMoreProducts()}  style ={{backgroundColor: limit && 'gray'}}>Load more products</button>
            </div>
        </div>
    )
}
export default Product 