'use client';

import Link from 'next/link';
import {
  IconArrowRight,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandWindows,
  IconCalendar,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconDownload,
  IconMapPin,
  IconShield,
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const AppShowcaseSection = () => {
  return (
    <Box
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative',
      }}
    >
      <Container size="xl">
        <Stack gap="5rem">
          {/* Header Section */}
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#1e293b',
                textAlign: 'center',
                maxWidth: '900px',
              }}
            >
              You can now book an appointment with a donation center!
            </Title>

            <Text
              style={{
                color: '#64748b',
                fontSize: '20px',
                lineHeight: 1.6,
                textAlign: 'center',
                maxWidth: '700px',
              }}
            >
              Using our mobile app, you can search for and book donation appointments with verified
              donation centers.
            </Text>

            <Link href="/learn-more" style={{ textDecoration: 'none' }}>
              <Button
                size="lg"
                rightSection={<IconArrowRight size={18} />}
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  fontSize: '16px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }}
              >
                Learn More
              </Button>
            </Link>
          </Stack>

          {/* App Features with Mobile Screenshots */}
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="4rem" style={{ alignItems: 'center' }}>
            {/* Left - Mobile App Screenshots */}

            <Paper
              withBorder={false}
              radius="xl"
              shadow="md"
              p={{ base: 'xs', sm: 'sm', md: 'md' }}
              style={{
                overflow: 'visible',
                width: '100%',
                maxWidth: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                radius="md"
                fit="contain"
                src="https://dp20430eecj0w.cloudfront.net/versions/original/b5111ae0-49b6-4782-abcd-4b70a2589213_medexerapppng.png"
                h={{ base: 200, xs: 240, sm: 300, md: 320, lg: 360 }}
                w="100%"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  maxWidth: '100%',
                  height: 'auto',
                }}
                alt="Medexer mobile app interface showing donation center booking features"
              />
            </Paper>

            {/* Right - App Features */}
            <Stack gap="xl">
              <Stack gap="md">
                <Box
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    width: 'fit-content',
                  }}
                >
                  <IconDeviceMobile size={16} />
                  Mobile App Features
                </Box>

                <Title
                  order={3}
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#1e293b',
                    lineHeight: 1.3,
                  }}
                >
                  Everything you need in one app
                </Title>
              </Stack>

              {/* Feature List */}
              <Stack gap="lg">
                <Group gap="md" align="flex-start">
                  <Box
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconMapPin size={20} color="#3b82f6" />
                  </Box>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text fw={600} size="md" c="#1e293b">
                      Find Nearby Centers
                    </Text>
                    <Text c="#64748b" size="sm">
                      Locate verified donation centers near you
                    </Text>
                  </Stack>
                </Group>

                <Group gap="md" align="flex-start">
                  <Box
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(220, 38, 38, 0.1)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconCalendar size={20} color="#dc2626" />
                  </Box>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text fw={600} size="md" c="#1e293b">
                      Easy Booking
                    </Text>
                    <Text c="#64748b" size="sm">
                      Schedule appointments with just a few taps
                    </Text>
                  </Stack>
                </Group>

                <Group gap="md" align="flex-start">
                  <Box
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(5, 150, 105, 0.1)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconShield size={20} color="#059669" />
                  </Box>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text fw={600} size="md" c="#1e293b">
                      Verified Centers
                    </Text>
                    <Text c="#64748b" size="sm">
                      All centers are verified and certified
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Stack>
          </SimpleGrid>

          {/* Download Sections */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {/* For Donation Centers */}
            <Card
              radius="xl"
              style={{
                background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)',
                color: 'white',
                textAlign: 'center',
                border: 'none',
                padding: '1.5rem',
              }}
              styles={{
                root: {
                  '@media (min-width: 768px)': {
                    padding: '3rem',
                  },
                },
              }}
            >
              <Stack gap="xl" align="center">
                <Box
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconDeviceDesktop size={40} color="black" />
                </Box>

                <Stack gap="md" align="center">
                  <Title order={3} style={{ color: 'black', fontSize: '1.5rem' }}>
                    Are you a Blood Donation Center?
                  </Title>
                  <Text style={{ color: 'rgba(0, 0, 0, 0.8)', textAlign: 'center' }}>
                    Manage appointments and connect with donors using our desktop application
                  </Text>
                </Stack>

                <Stack gap="md" align="center" w="100%">
                  <Button
                    component={Link}
                    href="https://drive.google.com/file/d/1qTMGY5s_tXc_c7YWzafMPfL1InJbf4l8/view?usp=sharing"
                    size="md"
                    leftSection={<IconDownload size={18} />}
                    rightSection={<IconBrandWindows size={18} />}
                    fullWidth
                    style={{
                      background: 'black',
                      color: '#ffffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      minHeight: '44px',
                      textDecoration: 'none',
                      maxWidth: '300px',
                    }}
                    styles={{
                      root: {
                        '@media (min-width: 768px)': {
                          padding: '14px 28px !important',
                          fontSize: '16px !important',
                          minHeight: '52px !important',
                        },
                      },
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Download Our Desktop App Here
                  </Button>
                  <Button
                    component={Link}
                    href="https://drive.google.com/file/d/1E6QfXXfI7BrWAkLyqsuBmDVNh8oHhjbo/view?usp=sharing"
                    size="md"
                    leftSection={<IconDownload size={18} />}
                    rightSection={<IconBrandApple size={18} />}
                    fullWidth
                    style={{
                      background: 'black',
                      color: '#ffffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      fontSize: '13px',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      minHeight: '44px',
                      textDecoration: 'none',
                      maxWidth: '300px',
                    }}
                    styles={{
                      root: {
                        '@media (min-width: 768px)': {
                          padding: '14px 28px !important',
                          fontSize: '16px !important',
                          minHeight: '52px !important',
                        },
                      },
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Download Our Desktop App Here
                  </Button>
                </Stack>
              </Stack>
            </Card>

            {/* For Blood Donors */}
            <Card
              radius="xl"
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                color: 'white',
                padding: '3rem',
                textAlign: 'center',
                border: 'none',
              }}
            >
              <Stack gap="xl" align="center">
                <Box
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconDeviceMobile size={40} color="white" />
                </Box>

                <Stack gap="md" align="center">
                  <Title order={3} style={{ color: 'white', fontSize: '1.5rem' }}>
                    Become a blood donor today!
                  </Title>
                  <Text style={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center' }}>
                    Download our mobile app and start saving lives with your donations
                  </Text>
                </Stack>

                <Stack gap="md" align="center">
                  <Button
                    component={Link}
                    href="https://play.google.com/store/apps/details?id=medexer.medexer_donor&pli=1"
                    size="lg"
                    leftSection={<IconDownload size={20} />}
                    rightSection={<IconBrandAndroid size={20} />}
                    style={{
                      background: 'white',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Download Our Mobile App Here
                  </Button>
                  <Button
                    component={Link}
                    href="https://apps.apple.com/ng/app/medexer/id6739403737"
                    size="lg"
                    leftSection={<IconDownload size={20} />}
                    rightSection={<IconBrandApple size={20} />}
                    style={{
                      background: 'white',
                      color: '#dc2626',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '14px 28px',
                      fontSize: '16px',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Download Our Mobile App Here
                  </Button>
                </Stack>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Background Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05))',
          borderRadius: '50%',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '8%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))',
          borderRadius: '50%',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default AppShowcaseSection;
