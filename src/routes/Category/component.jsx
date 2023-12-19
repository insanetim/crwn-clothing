import { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from 'src/contexts/categories.context'
import ProductCard from 'src/components/ProductCard'
import './styles.scss'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const products = useMemo(
    () => categoriesMap[category],
    [categoriesMap, category]
  )

  return (
    <>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {products &&
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </>
  )
}

export default Category
