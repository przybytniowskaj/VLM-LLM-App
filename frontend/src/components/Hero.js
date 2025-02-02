import React from 'react';
import { Box, Button, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const goToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
  };

  return (
    <Box height='92vh' position={'flex'}
      sx={{
        backgroundImage: `url(https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: '100% 120%',        
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
    <Box
      maxWidth={{ sm: 7120, md: 11236 }}
      width={1}
      margin='0 auto'
      paddingTop={5}
      >
      <Grid container spacing={4} marginTop='0px'>
        <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                align='center'
                variant='h1'
                //color={theme.palette.text.primary}
                marginTop='20%'
              >
                A dive into Visual-Language Model
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography
                align='center'
                color={theme.palette.text.secondary}
                variant='h4'
                padding={8}
                paddingTop={3}
                paddingBottom={3}
                marginBottom='15px'
              >
                Discover the future of text-image interaction with our app, driven by cutting-edge Vision-Language Models (VLMs). 
                VLMs combine computer vision and natural language processing, enhancing image recognition and understanding. <br />
                Experience the surge in popularity as VLMs redefine image processing, making searches more contextually accurate and captions effortlessly insightful. 
                
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Grid item
          container
          alignItems='center'
          justifyContent='center'
          xs={30}
          sx={{ order: { xs: 1, md: 1 } }}>
      <Box
        data-aos='fade-up'
        padding={16}
      >
          <Button onClick={goToBottom}
            component='a'
            variant='outlined'
            color='primary'
            size='large'
            fullWidth={isMd ? false : true}
            disableElevation={true}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              padding: '18px 34px',
              marginRight: '15px',
              fontSize: '20px',
              border: `2px solid transparent`,
              color: 'white',
              '&:hover': {
                backgroundColor: `${theme.palette.background.paper}`,
                color: theme.palette.common.white,
                border: `2px solid ${theme.palette.primary.main}`,
              },
            }}
          >
           Choose the task
          <KeyboardArrowDownIcon style={{ fontSize: '2rem' }} />
          </Button>
                   
      </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
