import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['signUp', 'signIn', 'barMorbidities'];

function ResponsiveAppBar() {

    function navigateTo(path) {
        window.location.href = path;
    }

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{ backgroundColor: "blue" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, textAlign: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => navigateTo(`./${page}`)}
                                sx={{ my: 2, color: 'black', display: 'block', textAlign: 'center', marginLeft: '10%' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;