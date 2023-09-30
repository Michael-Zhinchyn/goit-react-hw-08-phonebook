import { AuthNav } from 'components/AuthNav/AuthNav';
import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">Home</StyledNavLink>
      <AuthNav />
    </StyledHeader>
  );
};
