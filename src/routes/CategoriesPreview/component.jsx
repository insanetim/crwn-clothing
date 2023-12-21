import { useSelector } from 'react-redux'

import { selectCategoriesMap } from 'src/store/categories/selectors'
import CategoryPreview from 'src/components/CategoryPreview'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title]

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          />
        )
      })}
    </>
  )
}

export default CategoriesPreview
