import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// 
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.values(collections)
)

// Selector for single collection rendering, like when category in homepage is selected
export const selectCollection = collectionUrlParam => createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
)