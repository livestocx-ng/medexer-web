import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  IconArrowRight,
  IconDroplet,
  IconHeart,
  IconPhone,
  IconShield,
  IconStethoscope,
} from '@tabler/icons-react';
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

const MedexerHero = () => {
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

  const medicalParticles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${4 + Math.random() * 4}s`,
        size: 8 + Math.random() * 12,
      })),
    []
  );

  return (
    <Box
      component="section"
      role="banner"
      aria-label="Medexer blood donation hero section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image - Blood Donor in Medical Setting */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        {/* Blue Overlay for White/Blue Theme */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.85) 0%, rgba(59, 130, 246, 0.75) 50%, rgba(96, 165, 250, 0.65) 100%)',
          }}
        />
      </Box>

      {/* Floating Medical Particles */}
      {medicalParticles.map((particle) => (
        <Box
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            animation: `medicalFloat ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Main Content */}
      <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
        <Stack align="center" gap="xl" style={{ textAlign: 'center' }}>
          {/* Trust Badge */}
          <Badge
            size="lg"
            radius="xl"
            variant="light"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              animation: 'fadeInUp 0.8s ease-out',
            }}
          >
            <IconStethoscope size={16} style={{ marginRight: 8 }} />
            {/* Replace with content from medexer.com.ng */}
            Medexer - Professional Healthcare Services
          </Badge>

          {/* Main Headline */}
          <Title
            order={1}
            style={{
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 1s ease-out 0.2s both',
              maxWidth: 900,
            }}
          >
            {/* Replace with main headline from medexer.com.ng */}
            Your Health, Our Priority
          </Title>

          {/* Supporting Description */}
          <Text
            size="xl"
            style={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              maxWidth: 700,
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              animation: 'fadeInUp 1s ease-out 0.4s both',
            }}
          >
            {/* Replace with description from medexer.com.ng */}
            We provide comprehensive healthcare services including blood donation, medical
            consultations, and emergency care. Your wellbeing is our commitment.
          </Text>

          {/* Key Features */}
          <Group
            justify="center"
            gap="xl"
            style={{
              animation: 'fadeInUp 1s ease-out 0.6s both',
              flexWrap: 'wrap',
            }}
          >
            <Group gap="xs">
              <IconDroplet size={24} color="white" />
              <Text size="lg" c="white" fw={600}>
                Blood Donation
              </Text>
            </Group>
            <Group gap="xs">
              <IconShield size={24} color="white" />
              <Text size="lg" c="white" fw={600}>
                Safe & Secure
              </Text>
            </Group>
            <Group gap="xs">
              <IconHeart size={24} color="white" />
              <Text size="lg" c="white" fw={600}>
                Save Lives
              </Text>
            </Group>
          </Group>

          {/* Call-to-Action Buttons */}
          <Group
            justify="center"
            gap="md"
            wrap="wrap"
            style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
          >
            <Link href="/services" passHref>
              <Button
                size="xl"
                radius="xl"
                variant="filled"
                color="white"
                rightSection={<IconArrowRight size={20} />}
                style={{
                  paddingInline: 32,
                  paddingBlock: 16,
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#2563eb',
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                component="a"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 255, 255, 0.3)';
                }}
              >
                Our Services
              </Button>
            </Link>

            <Link href="/contact" passHref>
              <Button
                size="xl"
                radius="xl"
                variant="outline"
                color="white"
                leftSection={<IconPhone size={20} />}
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
                {/* Replace with phone number from medexer.com.ng */}
                Contact Us
              </Button>
            </Link>
          </Group>

          {/* Service Highlights */}
          <Card
            radius="xl"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'fadeInUp 1s ease-out 1s both',
              maxWidth: 600,
            }}
            p="lg"
          >
            <Group justify="center" gap="xl">
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  24/7
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Emergency Care
                </Text>
              </Stack>
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  Expert
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Medical Team
                </Text>
              </Stack>
              <Stack align="center" gap="xs">
                <Text size="xl" c="white" fw={700}>
                  Safe
                </Text>
                <Text size="sm" c="rgba(255,255,255,0.9)" fw={500}>
                  Procedures
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

      {/* Enhanced Animations */}
      <style>{`
        @keyframes medicalFloat { 
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; } 
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; } 
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

export default MedexerHero;
