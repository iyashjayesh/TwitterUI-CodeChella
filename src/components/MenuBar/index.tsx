import React from 'react';
import Button from '../Button';

import {
  Container,
  Topside,
  // Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        {/* <Logo /> */}

        <MenuButton>
          <HomeIcon />
          <span>Home</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Posts</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorite</span>
        </MenuButton>

        <MenuButton >
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton className="active">
          <FavoriteIcon />
          <span>TweeShield</span>
        </MenuButton>

        <MenuButton >
          <FavoriteIcon />
          <span>View in AR</span>
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Hashtags_bluebirds</strong>
          <span>@Hashtags_bluebirds</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
