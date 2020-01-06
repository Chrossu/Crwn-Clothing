import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { compose } from 'redux';

import { selectIsFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/With-spinner.component';
import CollectionsOverview from './Collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;