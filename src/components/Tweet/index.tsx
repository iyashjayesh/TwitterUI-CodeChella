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

import { FollowButton,ButtonGrp } from './tweet'


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
            <span>@CodechellaT</span>
            <Dot />
            <time>22 Nov</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>(Test Tweet to check the feature of BlueBirds at CodeChella)
 , I do not wish to say this but just to check our model, <b><u>Fuck you</u></b> (NONONONO)!</Description>
          

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
          <ButtonGrp style={{flexDirection:'row', flexWrap:'wrap'}}>
            <FollowButton outlined>Ignore</FollowButton>

            <FollowButton outlined>Block & Report</FollowButton>

            <FollowButton outlined>Remove Tag</FollowButton>
          </ButtonGrp>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
