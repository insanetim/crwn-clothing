import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategoriesMap } from 'src/store/categories/selectors'
import ProductCard from 'src/components/ProductCard'
import { CategoryContainer, CategoryTitle } from './styled'

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const products = useMemo(() => {
    return categoriesMap[category]
  }, [categoriesMap, category])

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
