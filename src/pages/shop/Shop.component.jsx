import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/Collections-overview.component';
import CollectionPage from '../collection/Collection.component'
import WithSpinner from '../../components/with-spinner/With-spinner.component';

import { StyledContainer } from './shop.style';

// Creating HOC components
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            this.props.updateCollections(collectionsMap);
            this.setState({ loading: false })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <StyledContainer>
                <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </StyledContainer>
        )
    }
}

export default connect(null, { updateCollections })(ShopPage);