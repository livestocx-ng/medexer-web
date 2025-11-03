'use client';

import { IconAlertTriangle, IconDroplet, IconHeart, IconTrendingDown } from '@tabler/icons-react';
import { Box, Card, Container, Progress, SimpleGrid, Stack, Text, Title } from '@mantine/core';

const StatisticsSection = () => {
  return (
    <Box
      style={{
        padding: '6rem 0',
        background: 'linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)',
        position: 'relative',
        color: 'white',
      }}
    >
      <Container size="xl">
        <Stack gap="4rem">
          {/* Header Section */}
          <Stack gap="xl" align="center" style={{ textAlign: 'center' }}>
            {/* Alert Badge */}
            <Box
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(239, 68, 68, 0.2)',
                color: '#000000ff',
                padding: '10px 20px',
                borderRadius: '25px',
                fontSize: '14px',
                fontWeight: 600,
                border: '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              <IconAlertTriangle size={18} />
              Critical Healthcare Crisis
            </Box>

            {/* Main Headline */}
            <Title
              order={2}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                color: 'black',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              The Statistics is Alarming!
            </Title>

            {/* Description */}
            <Text
              style={{
                color: 'black',
                fontSize: '20px',
                lineHeight: 1.6,
                textAlign: 'center',
                maxWidth: '700px',
              }}
            >
              The African healthcare system is experiencing chronic blood shortages across its
              sectors.
            </Text>
          </Stack>

          {/* Statistics Grid */}
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {/* Statistic 1 - WHO Data */}
            <Card
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <Stack gap="md" align="center">
                <Box
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconDroplet size={28} color="#ef4444" />
                </Box>
                <Text
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#000000ff',
                    lineHeight: 1,
                  }}
                >
                  3.29M
                </Text>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  Units of blood in 2020 in 38 African countries (WHO)
                </Text>
              </Stack>
            </Card>

            {/* Statistic 2 - Maternal Deaths */}
            <Card
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <Stack gap="md" align="center">
                <Box
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconHeart size={28} color="#ef4444" />
                </Box>
                <Text
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#000000ff',
                    lineHeight: 1,
                  }}
                >
                  196K
                </Text>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  Women dying yearly in sub-Saharan Africa from pregnancy complications
                </Text>
              </Stack>
            </Card>

            {/* Statistic 3 - Nigeria Blood Need */}
            <Card
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <Stack gap="md" align="center">
                <Box
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconTrendingDown size={28} color="#ef4444" />
                </Box>
                <Text
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#000000ff',
                    lineHeight: 1,
                  }}
                >
                  196K
                </Text>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  Pints of blood annually needed in Nigeria
                </Text>
              </Stack>
            </Card>

            {/* Statistic 4 - Supply Gap */}
            <Card
              radius="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <Stack gap="md" align="center">
                <Box
                  style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconAlertTriangle size={28} color="#ef4444" />
                </Box>
                <Text
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#000000ff',
                    lineHeight: 1,
                  }}
                >
                  27%
                </Text>
                <Text
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '14px',
                    fontWeight: 600,
                    textAlign: 'center',
                    lineHeight: 1.4,
                  }}
                >
                  Of Nigeria's blood supply needs are currently met
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>

          {/* Critical Facts Section */}
          <Card
            radius="xl"
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              border: '1px solid rgba(75, 70, 70, 0.2)',
              padding: '3rem',
              textAlign: 'center',
            }}
          >
            <Stack gap="xl">
              <Title
                order={3}
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                Critical Facts
              </Title>

              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Stack gap="md">
                  <Text
                    style={{
                      color: '#ef4444',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    <strong style={{ color: 'black' }}>1/3 of maternal deaths</strong> in
                    sub-Saharan Africa are from bleeding complications
                  </Text>
                  <Progress value={33} size="lg" radius="xl" color="#ef4444" />
                </Stack>

                <Stack gap="md">
                  <Text
                    style={{
                      color: '#ef4444',
                      fontSize: '16px',
                      lineHeight: 1.6,
                      textAlign: 'left',
                    }}
                  >
                    <strong style={{ color: 'black' }}>65% of post-birth deaths</strong> occur from
                    severe bleeding (PPH)
                  </Text>
                  <Progress value={65} size="lg" radius="xl" color="#ef4444" />
                </Stack>
              </SimpleGrid>

              <Text
                style={{
                  color: 'rgba(0, 0, 0, 0.9)',
                  fontSize: '18px',
                  lineHeight: 1.6,
                  textAlign: 'center',
                  fontStyle: 'italic',
                  marginTop: '1rem',
                }}
              >
                Half the world's severe bleeding deaths occur in sub-Saharan Africa
              </Text>
            </Stack>
          </Card>
        </Stack>
      </Container>

      {/* Background Decorative Elements */}
      <Box
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          opacity: 0.4,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default StatisticsSection;
