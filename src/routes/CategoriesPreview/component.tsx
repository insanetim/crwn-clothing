import { useSelector } from 'react-redux'

import Spinner from 'src/components/Spinner'
import CategoryPreview from 'src/components/CategoryPreview'
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from 'src/store/categories/selectors'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]

          return (
            <CategoryPreview
              key={title}
              title={title}
              products={products}
            />
          )
        })
      )}
    </>
  )
}

export default CategoriesPreview
