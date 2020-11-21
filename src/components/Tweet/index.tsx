import React from 'react';

import {
  Container,
  // Retweeted,
  // RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  // ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

import { FollowButton } from './tweet'


const Tweet: React.FC = () => {
  return (
    <Container>
      {/* <Retweeted>
        <RocketseatIcon />
        You retweeted
      </Retweeted> */}

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong></strong>
            <span>@UnDefined</span>
            <Dot />
            <time>28 June</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>User Name</Description>
          <Description>Bio</Description>

          {/* <ImageContent /> */}

          {/* <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons> */}
          <FollowButton outlined>Ignore</FollowButton>

          <FollowButton outlined>Block & Report</FollowButton>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
