import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// Selector to get collections from shop state
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
  )
  
// Selector to convert the shop object state into an array and map into it
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => collections ? Object.values(collections) : []
)

// Selector for single collection rendering, like when category in homepage is selected
export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => (collections ? collections[collectionUrlParam] : null)
)

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectCollectionsIsLoaded = createSelector(
  [selectShop],
  // If shop collections is an empty object, then return false
  shop => shop.collections ? false : true
)