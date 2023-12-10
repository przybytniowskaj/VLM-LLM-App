import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Tabs, Tab, useTheme, Grid, LinearProgress, Button, Box, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import CloseIcon from '@mui/icons-material/Close';

import ImageDropzone from '../components/ImageDropzone';

const UploadFromDevice = ({submitOnClick, onDrop, closeModal}) => {
    const theme = useTheme();
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');


    const handleDrop = (files) => {
      setIsLoading(true);
      setFiles(files);
      setIsLoading(false);
      onDrop(files);
    };



  
    return ( 
        <Grid container spacing={3}>
          <Grid
            item
            container
            alignItems='center'
            justifyContent='space-between'
            marginTop='-40px'
            spacing={3}
            xs={12}
            padding={6}
          >
            
          </Grid>
          <Grid item xs={12}>
            {isLoading && (<LinearProgress color='success' data-aos='zoom-out'/> )}
          </Grid>
            <Grid item xs={12}>
                  <Box
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    justifyContent='center'
                    padding={2}
                  >
                    {files.length > 0 && !isLoading &&(
                      <Box flex='1' color={'white'} >
                      <Typography variant="h6" style={{ marginBottom: '1em'}}>
                        Loaded image:
                    </Typography>

                      <Box flexDirection = 'row'>
                      <Box flex="1" height="20em" marginLeft={2} style={{ border: '10px solid white' }}>
                        <img
                        src={URL.createObjectURL(files[0])}
                        alt={files[0].name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            margin: 0,
                            padding: 0,
                            background: 'white',
                        }}
                        /> 
                        </Box>
                        <Box>
                        <ul style={{ listStyleType: 'none', padding: 0, columns: `${Math.min(3, files.length)}` }}>
                        {files.map((file, index) => (
                          
                          <li key={index} style={{ textAlign: 'center' }}>
                            {file.name}
                          </li>
                        ))}
                      </ul>
                      </Box>
                    
                    </Box>
                    </Box>
                    
                    )}
                    <Box
                        display='flex'
                        flexDirection='row'
                        alignItems='flex-start'
                        justifyContent='center'
                        padding={6}
                        paddingTop={1}
                    >
                    <Box flex="0.95" height="auto">
                    <ImageDropzone onDrop={handleDrop} />
                    </Box>
                    </Box>
                  </Box>
                  
                    <Box alignItems={'center'} 
                    flexDirection='row' 
                    justifyContent='center' 
                    display='flex'>
                    {files.length > 0 && !isLoading && (                       
                        <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        alignItems = 'center'
                        disableElevation={true}
                        onClick={closeModal} 
                        sx={{
                        fontSize: '18px',
                        border: '1px solid transparent',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: theme.palette.primary.main,
                            border: `2px solid ${theme.palette.primary.main}`,
                        },
                        }}
                    >
                        Submit image
                    </Button>
                    )}
                    </Box>
                    
                  
            </Grid>
        </Grid>
        
    );
  };
  
  const UploadFromCatalog = ({ onDrop, closeModal }) => {
    const theme = useTheme();
    const [catalogImages, setCatalogImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [userUploadedPhotos, setUserUploadedPhotos] = useState([]);

    const handleSelectImage = (image) => {
      setSelectedImage(image);
    };

    const handleSubmitImage = () => {
      if (selectedImage) {
        onDrop(selectedImage.image);
        setSelectedImage(null);
        closeModal();
      }
    };

    return (
      
      <Box>
        {selectedImage && (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={2}>
            <Box flex="1" color={'white'} marginBottom={2}>
              <Typography variant="h6" style={{ marginBottom: '1em' }}>
                Loaded image:
              </Typography>
              <Box flex="1" height="20em" style={{ border: '10px solid white' }}>
                <img
                  src={selectedImage.image}
                  alt="Selected Image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: 0,
                    padding: 0,
                    background: 'white',
                  }}
                />
              </Box>
            </Box>

            <Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                alignItems="center"
                disableElevation={true}
                onClick={handleSubmitImage}
                sx={{
                  fontSize: '18px',
                  border: '1px solid transparent',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: theme.palette.primary.main,
                    border: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                Submit image
              </Button>
            </Box>
          </Box>
        )}
        <Box>
  {userUploadedPhotos.length > 0 && (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding={2}>
      <Typography variant="h6" style={{ marginBottom: '1em' }}>
        Uploaded Photos:
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {userUploadedPhotos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Uploaded Photo ${index + 1}`}
            style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '200px', margin: '0.5em' }}
            onClick={() => handleSelectImage({ image: photo })}
          />
        ))}
      </div>
    </Box>
  )}
    </Box>
      </Box>
    );
  };


 const PopupWindow = ({ isOpen, onRequestClose, initialTab, onDrop }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
  
    const handleTabChange = (_, newValue) => {
      setActiveTab(newValue);
    };
  
    useEffect(() => {
      setActiveTab(initialTab);
      Modal.setAppElement(document.body);
    }, [initialTab]);

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          style={{
            content: {
              backgroundColor: 'rgb(30,30,30)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '70%',
              height: '80%',
              padding: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
            },
          }}
        >
            <Tabs value={activeTab} onChange={handleTabChange} centered>
                <Tab label="Upload from Device" icon={<CloudUploadIcon />} />
                <Tab label="Upload from Catalog" icon={<PhotoLibraryIcon />} />
            </Tabs>
            <CloseIcon style={{ cursor: 'pointer', position: 'absolute', top: '20px', right: '20px' }} onClick={onRequestClose}/>          
            {activeTab === 0 && <UploadFromDevice onDrop={onDrop} closeModal ={onRequestClose} />}
            {activeTab === 1 && <UploadFromCatalog onDrop={onDrop} closeModal={onRequestClose} />}
        </Modal>
      );
    };

  export default PopupWindow;
