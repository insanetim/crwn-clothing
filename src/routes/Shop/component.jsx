import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getCategoriesAndDocuments } from 'src/utils/firebase'
import { setCategories } from 'src/store/categories/actions'
import CategoriesPreview from '../CategoriesPreview'
import Category from '../Category'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments()
      dispatch(setCategories(categories))
    }
    getCategoriesMap()
  }, [dispatch])

  return (
    <Routes>
      <Route
        index
        element={<CategoriesPreview />}
      />
      <Route
        path=':category'
        element={<Category />}
      />
    </Routes>
  )
}

export default Shop
