import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { StyledFormWrapper } from './Auth.styled';
import { LoginForm } from 'components/LogIn/LogIn';
import { SignUpForm } from 'components/SignUp/SignUp';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setChecked(!checked);

    if (checked) {
      navigate('/auth/register');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <div>
      <StyledFormWrapper>
        <Paper elevation={3} style={{ padding: '10px' }}>
          {checked ? (
            <Chip
              icon={<FaceIcon />}
              label="Log in"
              color="primary"
              variant="outlined"
            />
          ) : (
            <Chip
              icon={<LockIcon />}
              label="Sign up"
              color="primary"
              variant="outlined"
            />
          )}

          <br></br>
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />

          {checked ? <LoginForm /> : <SignUpForm />}
        </Paper>
      </StyledFormWrapper>
    </div>
  );
};

export default Auth;
