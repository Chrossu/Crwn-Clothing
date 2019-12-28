import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../../components/menu-item/MenuItem.component';

import { StyledDirectoryMenu } from './directory.style';

const Directory = ({ sections }) => (
    <StyledDirectoryMenu>
      {sections.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)}
    </StyledDirectoryMenu>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);