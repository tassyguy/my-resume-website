import React from 'react';
import './ContentContainer.module.scss';

import { ContentContainerProps } from '@/types';

const ContentContainer = ({children}: ContentContainerProps) => {
    return (
    <div className={'content-container'}>
      {children}
    </div>
  );
};

export default ContentContainer;