'use client';

// import Link  from 'next/link';
import {
  // Avatar,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const BloodDonationHeroExact = () => {
  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f1f5f9 0%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            minHeight: '100vh',
            gap: '4rem',
          }}
        >
          {/* Left Content */}
          <Stack gap="xl" style={{ paddingRight: '2rem' }}>
            {/* Main Headline */}
            <Title
              order={1}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#1e293b',
                marginBottom: '1rem',
              }}
            >
              MEDEXER
            </Title>

            {/* Description */}
            <Text
              size="lg"
              style={{
                color: '#64748b',
                fontSize: '18px',
                lineHeight: 1.6,
                maxWidth: '500px',
                marginBottom: '2rem',
              }}
            >
              We work hard to make the blood donation process prompt, seamless, and easy. Donate
              blood and save a life today!
            </Text>

            {/* Action Buttons */}
            <Group gap="md" style={{ marginBottom: '3rem' }}>
              <Button
                size="lg"
                style={{
                  background: '#393f4dff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                }}
              >
                Donate Blood Now
              </Button>

              <Button
                size="lg"
                style={{
                  background: '#ffffffff',
                  color: 'black',
                  border: 'blue',
                  borderRadius: '8px',
                  padding: '16px 32px',
                  fontSize: '16px',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                }}
              >
                Donate Blood Now
              </Button>
            </Group>
          </Stack>

          {/* Right Content - Doctor Image with Floating Icons */}
          <Box
            style={{
              position: 'relative',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Main Medical Professional Image */}
            <Box
              style={{
                width: '550px',
                height: '650px',
                backgroundImage:
                  "url('https://dp20430eecj0w.cloudfront.net/versions/small/45bcc87e-7a49-470f-a461-c852c448cd2a_donojpeg.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Background Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
          borderRadius: '50%',
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
          borderRadius: '50%',
          opacity: 0.3,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default BloodDonationHeroExact;
