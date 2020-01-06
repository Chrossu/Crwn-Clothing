import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsIsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/With-spinner.component'
import CollectionPage from './Collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsLoaded
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer;