import React from 'react';
import {
  Box,
  // Button,
  Container,
  // Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const DonationCallSection = () => {
  return (
    <Box
      component="section"
      style={{
        position: 'relative',
        backgroundColor: 'rgba(254, 250, 250, 0.55)',
        // position: 'relative',
        // backgroundImage: 'url("/images/blood-donation-bg.jpg")', // replace with your image path
        // backgroundRepeat: 'no-repeat',
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(235, 235, 235, 0.55)',
        }}
      />

      {/* Content */}
      <Container
        size="lg"
        style={{
          position: 'relative',
          zIndex: 1,
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Stack align="center" gap="md" px={{ base: 10, sm: 0 }}>
          <Title
            order={1}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            We’ve Got You Covered
          </Title>

          <Text
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              maxWidth: 700,
              lineHeight: 1.7,
              color: '#000000ff',
            }}
          >
            Have you wanted to donate blood in the past but don’t know how to go about it? Head over
            to your preferred application store, download our application, and save a life today.
          </Text>
          {/* <Group>
            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: 'red.6', to: 'pink.6', deg: 45 }}
              mt="md"
            >
              Download the App
            </Button>
             <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: 'red.6', to: 'pink.6', deg: 45 }}
              mt="md"
            >
              Download the App
            </Button>
          </Group> */}
        </Stack>
      </Container>
    </Box>
  );
};

export default DonationCallSection;
