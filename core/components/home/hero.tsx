import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { IconDroplet, IconHeart, IconHeartHandshake, IconShield } from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY || 0);
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const bloodParticles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${4 + Math.random() * 4}s`,
        size: 8 + Math.random() * 12,
        icon: [IconDroplet, IconHeart, IconHeartHandshake][Math.floor(Math.random() * 3)],
      })),
    []
  );

  return (
    <Box
      component="section"
      role="banner"
      aria-label="Blood donation hero section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image - Medical Personnel and Blood Donor */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(37, 99, 235, 0.75) 50%, rgba(29, 78, 216, 0.65) 100%)',
          }}
        />
      </Box>

      {/* Floating Blood Donation Icons */}
      {bloodParticles.map((particle) => {
        const IconComponent = particle.icon;
        return (
          <Box
            key={particle.id}
            style={{
              position: 'absolute',
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration} ease-in-out infinite`,
              animationDelay: particle.delay,
              pointerEvents: 'none',
              opacity: 0.1,
            }}
            aria-hidden="true"
          >
            <IconComponent size={particle.size} color="white" />
          </Box>
        );
      })}

      {/* Content */}
      <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Stack align="center" gap="xl" style={{ textAlign: 'center', color: 'white' }}>
          {/* Trust Badge */}
          <Badge
            size="lg"
            radius="xl"
            variant="light"
            color="blue"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'fadeInUp 0.8s ease-out',
            }}
          >
            <IconHeart size={16} style={{ marginRight: 8 }} />
            Medexer - Saving Lives Through Blood Donation
          </Badge>

          <Title
            order={1}
            style={{
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 1s ease-out 0.2s both',
              maxWidth: 900,
            }}
          >
            Donate Blood, Save Lives Today!
          </Title>

          <Text
            style={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.4rem)',
              maxWidth: 700,
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              animation: 'fadeInUp 1s ease-out 0.4s both',
            }}
          >
            We work hard to make the blood donation process prompt, seamless, and easy. Donate blood
            and save a life today!
          </Text>

          {/* Key Features */}
          <Group
            justify="center"
            gap="xl"
            style={{ animation: 'fadeInUp 1s ease-out 0.6s both', flexWrap: 'wrap' }}
          >
            <Group gap="xs">
              <IconShield size={24} color="white" />
              <Text size="md" c="white" fw={600}>
                Safe Process
              </Text>
            </Group>
            <Group gap="xs">
              <IconDroplet size={24} color="white" />
              <Text size="md" c="white" fw={600}>
                Quick & Easy
              </Text>
            </Group>
            <Group gap="xs">
              <IconHeartHandshake size={24} color="white" />
              <Text size="md" c="white" fw={600}>
                Save Lives
              </Text>
            </Group>
          </Group>

          <Group
            justify="center"
            gap="md"
            wrap="wrap"
            style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
          >
            <Link href="/donate" passHref>
              <Button
                size="xl"
                radius="xl"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                rightSection={<IconDroplet size={20} />}
                style={{
                  paddingInline: 32,
                  paddingBlock: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4)',
                  transition: 'all 0.3s ease',
                }}
                component="a"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(220, 38, 38, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(220, 38, 38, 0.4)';
                }}
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/learn-more" passHref>
              <Button
                size="xl"
                radius="xl"
                variant="outline"
                color="white"
                leftSection={<IconHeart size={20} />}
                style={{
                  paddingInline: 32,
                  paddingBlock: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  borderWidth: 2,
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
                component="a"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Learn More
              </Button>
            </Link>
          </Group>

          {/* Impact Stats */}
          <Card
            radius="xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'fadeInUp 1s ease-out 1s both',
              maxWidth: 600,
            }}
            p="lg"
          >
            <Group justify="center" gap="xl">
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  10,000+
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Lives Saved
                </Text>
              </Stack>
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  5,000+
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Blood Donors
                </Text>
              </Stack>
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  24/7
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Available
                </Text>
              </Stack>
            </Group>
          </Card>
        </Stack>
      </Container>

      {/* Scroll Indicator */}
      <Box
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          animation: 'bounce 2s infinite',
        }}
      >
        <Center
          style={{
            width: 24,
            height: 40,
            border: '2px solid white',
            borderRadius: 999,
            padding: 8,
          }}
        >
          <Box
            style={{
              width: 4,
              height: 12,
              background: 'white',
              borderRadius: 999,
              animation: 'pulse 1.5s infinite',
            }}
          />
        </Center>
      </Box>

      {/* Enhanced keyframes */}
      <style>{`
        @keyframes float { 
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.1; } 
          50% { transform: translateY(-15px) rotate(180deg); opacity: 0.3; } 
        }
        @keyframes bounce { 
          0%, 100% { transform: translate(-50%, 0); } 
          50% { transform: translate(-50%, -8px); } 
        }
        @keyframes pulse { 
          0% { opacity: 1; transform: translateY(0); } 
          50% { opacity: 0.4; transform: translateY(6px); } 
          100% { opacity: 1; transform: translateY(0); } 
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
