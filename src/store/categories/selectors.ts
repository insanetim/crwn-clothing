import { createSelector } from 'reselect'

import { RootState } from 'src/store'
import { CategoriesState } from './reducer'
import { CategoryMap } from './types'

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories

const selectCategories = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories => {
    return categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
  }
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  categoriesSlice => categoriesSlice.isLoading
)
