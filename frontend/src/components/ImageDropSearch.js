import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageDropzone = ({ onDrop }) => {
  const theme = useTheme();
  return (
    <Dropzone onDrop={onDrop}>
      {({ isDragActive, getRootProps, getInputProps }) => (
        <div>
          <Box
            alignItems='center'
            border={1}
            borderRadius={1}
            borderStyle='dashed'
            border={theme.palette.divider}
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            outline='none'
            padding={6}
            backgroundColor = 'white'
            
            {...getRootProps()}
          >
            <input multiple {...getInputProps()} />
            <Box
              sx={{
                '& img': {
                  width: 80,
                },
              }}
            />
            <Box padding={2}>
              <Typography variant='h4' align='center'>
                <FontAwesomeIcon
                  
                  style={{
                    height: 80,
                    width: 80,
                    color: theme.palette.text.secondary,
                  }}
                />
              </Typography>
              <Box marginTop={3}>
                <Typography
                  variant='body1'
                  color={theme.palette.text.secondary}
                >
                  Drag and drop an image here, or{' '}
                  <Link underline='always'>click</Link> to select an image
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageDropzone;
