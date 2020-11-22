import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit profile</EditButton>

        <h1>Yash Chauhan is at #CodeChella</h1>
        <h2>@hashtags_bluebirds</h2>

        <p>
          Team: <a href="">@UnDefined </a> is at <a> #CodeChella</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            India
          </li>
          <li>
            <CakeIcon />
            Born on Dec 22, 2000
          </li>
        </ul>

        <Followage>
          <span>
          following <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
