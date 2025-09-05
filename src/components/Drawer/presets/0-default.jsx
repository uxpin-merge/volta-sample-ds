import React from 'react';
import Drawer from '../Drawer';
import HtmlDiv from '../../UXPinProvided/HtmlComponents/HtmlDiv/HtmlDiv';

export default <Drawer sx={{ width: '100%', height: '100%' }} anchor="left" open={true} variant="persistent" uxpId="1">
  <HtmlDiv uxpId="2">Drawer Contents</HtmlDiv>
</Drawer>;
