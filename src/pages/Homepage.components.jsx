import React from 'react';

import MenuItem from '../components/menu-item/MenuItem.component';

import { StyledHomepageContainer, StyledDirectoryMenu } from './homepage.style';

const HomePage = () => (
  <StyledHomepageContainer>
    <StyledDirectoryMenu>
      {/* Item 1 */}
      <MenuItem title="HATS" />
      {/* Item 2 */}
      <MenuItem title="JACKETS" />
      {/* Item 3 */}
      <MenuItem title="SNEAKERS" />
      {/* Item 4 */}
      <MenuItem title="WOMENS" img-xl />
      {/* Item 5 */}
      <MenuItem title="MENS" img-xl />
    </StyledDirectoryMenu>
  </StyledHomepageContainer>
)

export default HomePage;