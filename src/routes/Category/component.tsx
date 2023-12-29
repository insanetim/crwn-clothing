import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from 'src/store/categories/selectors'
import Spinner from 'src/components/Spinner'
import ProductCard from 'src/components/ProductCard'
import { CategoryContainer, Title } from './styled'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const products = useMemo(() => {
    return categoriesMap[category]
  }, [categoriesMap, category])

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </CategoryContainer>
      )}
    </>
  )
}

export default Category
