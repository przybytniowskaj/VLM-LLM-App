import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import Button from '@mui/material/Button';

//import DescriptionItem from './DescriptionItem';
{/*
const Description = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            px: {
              md: '15px !important',
            },
          }}
        >
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.primary}
            variant='h1'
            marginTop='30px'
          >
            How Does It Work?
          </Typography>
          <Typography
            data-aos='fade-up'
            align='center'
            color={theme.palette.text.secondary}
            variant='h4'
            paddingTop={3}
            paddingBottom={3}
            marginBottom='15px'
          >
            A step-by-step guide on how to use the app
          </Typography>
          <Grid container spacing={4} data-aos='fade-up'>
            <DescriptionItem
              icon={<AddAPhotoOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Select an Image'
              subtitle='Select an image for classification and drag-and-drop it into the provided dropzone in the browser.'
            />
            <DescriptionItem
              icon={
                <SendToMobileOutlinedIcon style={{ height: 25, width: 25 }} />
              }
              title='Send the Image for Classification'
              subtitle='Press the Send Image button to send the image to the machine learning model for classification.'
            />
            <DescriptionItem
              icon={<GetAppOutlinedIcon style={{ height: 25, width: 25 }} />}
              title='Get the Classification Result'
              subtitle='Next, the machine learning model classifies the image, and the result of the classification is then printed on the screen.'
            />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}; */}

const Description = () => {
  const theme = useTheme();

  return (
    <Box
      maxWidth={{ sm: 720, md: 1236 }}
      width={1}
      margin='0 auto'
      paddingTop={2}
      paddingBottom={2}
    >
      <Box
        data-aos='fade-up'
        backgroundColor={theme.palette.background.default}
        paddingTop={4}
      >
        <Container
          maxWidth='lg'
          display='flex'
          sx={{
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center', // Center items horizontally
            textAlign: 'center',
            px: {
              md: '15px !important',
            },
          }}
        >
        <Grid container data-aos='fade-up' width='100%' >
          <Grid item xs={12} md={6}>
            <Box width={1} height={1}>
              <Box display='flex' flexDirection='column'>
              <Button
                  variant="contained"
                  color="primary"
                  size="xlarge"
                  href="\imagesearch"
                  sx={{
                    height: '20em',
                    marginRight: '1em',
                    padding: '3em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Align content center horizontally
                    justifyContent: 'center',
                  }}
                >
                <Typography variant='h6' gutterBottom fontWeight={700} padding={5}>
                Semantic Image Search
                </Typography>
                <Typography color={theme.palette.text.secondary}>
                Description...
                </Typography>
              </Button>
            </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width={1} height={1}>
              <Box display='flex' flexDirection='column'>
              <Button
                  variant="contained"
                  color="primary"
                  size="xlarge"
                  href="\classifier"
                  sx={{
                    height: '20em',
                    marginRight: '1em',
                    padding: '3em',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', // Align content center horizontally
                    justifyContent: 'center',
                  }}
                >
                <Typography variant='h6' gutterBottom fontWeight={700} padding={5}>
                Image Captioning
                </Typography>
                <Typography color={theme.palette.text.secondary}>
                Description...
                </Typography>
              </Button>
            </Box>
            </Box>
          </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Description;
