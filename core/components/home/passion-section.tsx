'use client';

import Link from 'next/link';
import { IconArrowRight, IconHeart, IconShield, IconUsers } from '@tabler/icons-react';
import { Box, Button, Card, Container, Group, SimpleGrid, Stack, Text, Title } from '@mantine/core';

const PassionSection = () => {
  return (
    <Box
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative',
      }}
    >
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="4rem" style={{ alignItems: 'center' }}>
          {/* Left Content */}
          <Stack gap="xl">
            {/* Section Badge */}
            <Box
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239, 68, 68, 0.1)',
                color: '#dc2626',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 600,
                width: 'fit-content',
              }}
            >
              <IconHeart size={16} />
              Our Mission
            </Box>

            {/* Main Headline */}
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: '#1e293b',
                marginBottom: '1rem',
              }}
            >
              Built with Passion
            </Title>

            {/* Description */}
            <Text
              style={{
                color: '#64748b',
                fontSize: '18px',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              We seek to increase the ease with which hospitals have access to blood and save lives
              by connecting hospitals directly to blood donors.
            </Text>

            {/* Know More Button */}
            <Box>
              <Link href="/about" style={{ textDecoration: 'none' }}>
                <Button
                  size="lg"
                  rightSection={<IconArrowRight size={18} />}
                  style={{
                    background: '#dc2626',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    fontSize: '16px',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#b91c1c';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(220, 38, 38, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#dc2626';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)';
                  }}
                >
                  Know More
                </Button>
              </Link>
            </Box>
          </Stack>

          {/* Right Content - Feature Cards */}
          <Stack gap="lg">
            {/* Feature Card 1 */}
            <Card
              radius="xl"
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              }}
            >
              <Group gap="md" align="flex-start">
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconUsers size={24} color="#dc2626" />
                </Box>
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Text fw={600} size="lg" c="#1e293b">
                    Direct Connection
                  </Text>
                  <Text c="#64748b" size="sm" style={{ lineHeight: 1.6 }}>
                    Seamlessly connect hospitals with verified blood donors in real-time
                  </Text>
                </Stack>
              </Group>
            </Card>

            {/* Feature Card 2 */}
            <Card
              radius="xl"
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              }}
            >
              <Group gap="md" align="flex-start">
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconShield size={24} color="#dc2626" />
                </Box>
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Text fw={600} size="lg" c="#1e293b">
                    Safe & Secure
                  </Text>
                  <Text c="#64748b" size="sm" style={{ lineHeight: 1.6 }}>
                    All donors are verified and screened for maximum safety and reliability
                  </Text>
                </Stack>
              </Group>
            </Card>

            {/* Feature Card 3 */}
            <Card
              radius="xl"
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                padding: '2rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
              }}
            >
              <Group gap="md" align="flex-start">
                <Box
                  style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(220, 38, 38, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconHeart size={24} color="#dc2626" />
                </Box>
                <Stack gap="xs" style={{ flex: 1 }}>
                  <Text fw={600} size="lg" c="#1e293b">
                    Save Lives
                  </Text>
                  <Text c="#64748b" size="sm" style={{ lineHeight: 1.6 }}>
                    Every donation has the potential to save up to three lives
                  </Text>
                </Stack>
              </Group>
            </Card>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Background Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))',
          borderRadius: '50%',
          opacity: 0.6,
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
          background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.05))',
          borderRadius: '50%',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default PassionSection;
