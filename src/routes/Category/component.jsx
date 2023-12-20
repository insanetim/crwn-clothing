import { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { CategoriesContext } from 'src/contexts/categories.context'
import ProductCard from 'src/components/ProductCard'
import { CategoryContainer, CategoryTitle } from './styled'

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const products = useMemo(
    () => categoriesMap[category],
    [categoriesMap, category]
  )

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
      </CategoryContainer>
    </>
  )
}

export default Category
