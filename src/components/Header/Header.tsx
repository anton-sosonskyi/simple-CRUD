import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import { AppBar, Button, Stack, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack spacing={2} direction={'row'}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
          >
            Home
          </Button>

          {location.pathname === '/' && (
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<CreateIcon />}
              onClick={() => navigate('/create')}
            >
              Create post
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
