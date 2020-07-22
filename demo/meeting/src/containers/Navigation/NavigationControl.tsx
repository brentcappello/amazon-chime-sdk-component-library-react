// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import MeetingRoster from '../MeetingRoster';
import Navigation from '.';
import MeetingControlsContainer from '../MeetingControlsContainer';
import { useNavigation } from '../../providers/NavigationProvider';

const NavigationControl = () => {
  const { showNavbar, showRoster } = useNavigation();

  return (
    <>
      {showNavbar ? <Navigation /> : null}
      {showRoster ? <MeetingRoster /> : null}
      <MeetingControlsContainer />
    </>
  );
};

export default NavigationControl;
