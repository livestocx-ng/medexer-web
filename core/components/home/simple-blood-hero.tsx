'use client';

import Link from 'next/link';
import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';

const SimpleBloodHero = () => {
  return (
    <Box
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: -2,
          objectFit: 'cover',
        }}

      >
        <source
          //src="https://ideos.openai.com/az/vg-assets/task_01k9pkqfc5e80r57vsjnd0e1fs%2Ftask_01k9pkqfc5e80r57vsjnd0e1fs_genid_3bc89f54-e87a-4447-8349-03b937244949_25_11_10_10_07_559494%2Fvideos%2F00000_266337402%2Fsource.mp4?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-10T01%3A08%3A59Z&ske=2025-11-17T01%3A13%3A59Z&sks=b&skv=2024-08-04&sig=ANN/gecNRRQAB5oF8X2dGipB3ue%2BxojhE2%2BJPfFfrt4%3D&ac=oaivgprodscus2"
          src="https://videos.openai.com/az/vg-assets/task_01k9ppy00sea7t93frq0qnhzv5%2F1762772704_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-10T01%3A08%3A59Z&ske=2025-11-17T01%3A13%3A59Z&sks=b&skv=2024-08-04&sig=lklg/KDXJKOOvVDiqMgNOAzz3VHpote0VnLXvrjGlXk%3D&ac=oaivgprodscus2"
          type="video/mp4"
        />
      </video>

      {/* Fallback Background Image */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            // "url('https://dp20430eecj0w.cloudfront.net/versions/original/560effc4-9f14-4091-bf55-0aef640db3a4_202510230035blood_donation_scenesimplecompose01k87zry8zfbr8wvz9mcjh4tpvpng.png')",
            "url('https://videos.openai.com/az/vg-assets/task_01k9pqv58ees3b8njahgnw7dsk%2F1762773684_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-10T01%3A08%3A59Z&ske=2025-11-17T01%3A13%3A59Z&sks=b&skv=2024-08-04&sig=y6mUp6WkbUhdBD3yD4W09bdNlQ/mvtOlWZ7%2BtXtp6pc%3D&ac=oaivgprodscus2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -3,
        }}
      />

      {/* Black Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Stack gap="xl" style={{ maxWidth: '700px', paddingLeft: '2rem' }}>
          {/* Main Headline */}
          <Title
            order={1}
            style={{
              color: 'white',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: '1rem',
            }}
          >
            Donate Blood and Save a Life Today!
          </Title>

          {/* Description */}
          <Text
            style={{
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: '20px',
              lineHeight: 1.6,
              maxWidth: '600px',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              marginBottom: '2rem',
            }}
          >
            We work hard to make the blood donation process prompt, seamless, and easy by connecting
            hospitals directly to verified blood donors.
          </Text>

          {/* Buttons */}
          <Group gap="md">
            <Link href="/app" style={{ textDecoration: 'none' }}>
              <Button
                size="xl"
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
              >
                Get the App
              </Button>
            </Link>

            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Button
                size="xl"
                variant="outline"
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Know More
              </Button>
            </Link>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default SimpleBloodHero;
