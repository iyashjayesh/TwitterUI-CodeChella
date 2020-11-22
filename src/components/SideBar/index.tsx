import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion
                name="Team: UnDefined"
                nickname="@hashtags_bluebirds"
              />,
              <FollowSuggestion name="Team: UnDefined" nickname="@hashtags_bluebirds" />,
              <FollowSuggestion
                name="Team: UnDefined"
                nickname="@hashtags_bluebirds"
              />,
            ]}
          />
          <List
            title="Blocked Users"
            elements={[
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
