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

        <h1>Guilherme Rodz</h1>
        <h2>@guilherme_rodz</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            London
          </li>
          <li>
            <CakeIcon />
            Born on June 21, 2001
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
