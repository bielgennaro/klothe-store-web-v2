import { useEffect, useState } from "react"

export const ProductCard = () => {
    type Product = {
        id: number
        title: string
        price: number
        description: string
        category: string
        image: string
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
    }, [])

    return(
        <div className="grid grid-cols-4 gap-4 m-4">
            {products.map((product: Product) => (
                <div key={product.id} className="flex flex-col justify-between h-full p-4 outline outline-gray-600 rounded-lg">
                    <div>
                        <img src={product.image} alt={product.title} className="w-30 h-24 object-cover rounded-lg mx-auto"/>
                        <h3 className="text-lg font-semibold text-center mt-2">{product.title}</h3>
                        <p className="text-sm text-center my-2 flex-grow">{product.description}</p>
                    </div>
                    <div>
                        <p className="text-xl font-semibold text-center">${product.price}</p>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-72 mt-2 ml-36">Comprar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}