import React from 'react';
import Button from '../Button';

import {
  Container,
  Topside,
  Logo,
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
        <Logo />

        <MenuButton>
          <HomeIcon />
<<<<<<< HEAD
          <span>Home</span>
||||||| 5a05e49
          <span>Página Inicial</span>
=======
          <span>Home page</span>
>>>>>>> 6265de2dbb391eea765c08abca2e22a1a3c9b045
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
<<<<<<< HEAD
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Sheild</span>
||||||| 5a05e49
          <span>Mensagens</span>
=======
          <span>posts</span>
>>>>>>> 6265de2dbb391eea765c08abca2e22a1a3c9b045
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
<<<<<<< HEAD
          <span>Fav</span>
||||||| 5a05e49
          <span>Favoritados</span>
=======
          <span>Favorited</span>
>>>>>>> 6265de2dbb391eea765c08abca2e22a1a3c9b045
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <Button>
<<<<<<< HEAD
          <span>Tweet</span>
||||||| 5a05e49
          <span>Tweetar</span>
=======
          <span>TweeShield</span>
        </Button>

        <Button>
          <span>Tweet</span>
>>>>>>> 6265de2dbb391eea765c08abca2e22a1a3c9b045
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Guilherme Rodz</strong>
          <span>@guilherme_rodz</span>
        </ProfileData>

        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
