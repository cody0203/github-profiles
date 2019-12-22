import React from 'react';

import { ReactComponent as CompareIcon } from '../../../assets/boxing.svg';
import { CompareIconContainer } from './compare-button.styles';

const CompareButton = () => (
  <div>
    <CompareIconContainer>
      <CompareIcon />
    </CompareIconContainer>
  </div>
);

export default CompareButton;
