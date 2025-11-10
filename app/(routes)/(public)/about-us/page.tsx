'use client';

import React from 'react';
import {
  IconAward,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconHeart,
  IconShield,
  IconTarget,
  IconUsers,
} from '@tabler/icons-react';
import {
  Anchor,
  AspectRatio,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const useCountUp = (end: number, durationMs: number = 2000) => {
  const [value, setValue] = React.useState<number>(0);

  React.useEffect(() => {
    let animationFrameId: number;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.floor(end * eased));
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, durationMs]);

  return value;
};

const formatNumber = (num: number) =>
  new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(num);

const CounterTitle = ({
  end,
  size,
}: {
  end: number;
  size: string;
}) => {
  const value = useCountUp(end, 4000);
  return (
    <Title order={2} style={{ fontSize: size, lineHeight: 1.1 }} fw={800} c="#071b80ff">
      {formatNumber(value)}
    </Title>
  );
};

const AboutUs = () => {
  const videoUrl = 'https://youtu.be/spFEMDAG0xk';

  const [previewSrc, setPreviewSrc] = React.useState<string>('/images/mqdefault.jpg');

  React.useEffect(() => {
    let cancelled = false;
    try {
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.src = videoUrl;
      video.muted = true;
      video.playsInline = true;

      const handleLoaded = () => {
        const captureTime = Math.min(Math.max(video.duration * 0.25, 0.1), 5);
        const onSeeked = () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth || 1280;
          canvas.height = video.videoHeight || 720;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            try {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
              if (!cancelled) {
                setPreviewSrc(dataUrl);
              }
            } catch (_) {
              // ignore CORS taint errors and keep fallback image
            }
          }
          cleanup();
        };
        const cleanup = () => {
          video.removeEventListener('seeked', onSeeked);
          video.removeEventListener('loadedmetadata', handleLoaded);
        };
        video.addEventListener('seeked', onSeeked);
        try {
          video.currentTime = captureTime;
        } catch (_) {
          cleanup();
        }
      };

      video.addEventListener('loadedmetadata', handleLoaded);
    } catch (_) {
      // fallback to default preview image
    }

    return () => {
      cancelled = true;
    };
  }, [videoUrl]);

  return (
    <Box>
      {/* Hero Section */}
      <Box style={{ position: 'relative', minHeight: '90vh', overflow: 'hidden' }}>
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              "url('https://videos.openai.com/az/vg-assets/assets%2Ftask_01k886cf83ejcvywx9brz12rq6%2F1761211835_img_1.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-10T01%3A08%3A58Z&ske=2025-11-17T01%3A13%3A58Z&sks=b&skv=2024-08-04&sig=jlH7SU3JdvjbpEDopHfD4Uvvqnv8DxmfCyKQI2q%2BYiQ%3D&ac=oaivgprodscus')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
            }}
          />
        </Box>
        <Container size="xl" style={{ position: 'relative', zIndex: 1, height: '100%' }}>
          <Stack
            align="center"
            justify="center"
            style={{ minHeight: '60vh', color: 'white', textAlign: 'center' }}
          >
            <Title order={1} size="4rem" fw={700} mb="lg" mt={120}>
              About Medexer
            </Title>
            <Text size="xl" maw={600} lh={1.6}>
              Connecting lives through innovative blood donation solutions. We're building a
              healthier future, one donation at a time.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container size="xl" py={80}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title order={2} size="2.5rem" fw={600} c="#071b80ff">
                Our Story
              </Title>
              <Text size="lg" lh={1.7} c="dimmed">
                Medexer was born from a simple yet powerful vision: to bridge the gap between those
                who need blood and those willing to donate. Founded by a team of healthcare
                professionals and technology enthusiasts, we recognized the critical challenges
                facing blood donation systems worldwide.
              </Text>
              <Text size="lg" lh={1.7} c="dimmed">
                Every day, thousands of lives hang in the balance due to blood shortages.
                Traditional systems were fragmented, inefficient, and often failed when time was
                most critical. We knew technology could be the solution.
              </Text>
              <Button size="lg" color="#dc2626" radius="md">
                Learn More About Our Mission
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <AspectRatio ratio={16 / 9} w={{ base: '100%', sm: '100%' }}>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: 16,
                  overflow: 'hidden',
                  display: 'block',
                }}
              >
                <img
                  src={previewSrc}
                  alt="Video preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.12), rgba(0,0,0,0.12))',
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 9999,
                      background: '#ffffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(255,79,169,0.35)',
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="#071b80ff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </a>
            </AspectRatio>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Box style={{ background: '#f8fafc' }}>
        <Container size="xl" py={80}>
          <Grid gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                padding="xl"
                radius="lg"
                style={{ height: '100%', border: '2px solid #000000ff' }}
              >
                <Stack align="center" ta="center" h="100%" justify="center">
                  <IconTarget size={60} color="#dc2626" />
                  <Title order={2} size="2rem" fw={600} c="#071b80ff">
                    Our Mission
                  </Title>
                  <Text size="lg" lh={1.6} c="dimmed">
                    To revolutionize blood donation by creating seamless connections between donors
                    and recipients, ensuring that no life is lost due to blood shortage. We leverage
                    technology to make blood donation accessible, efficient, and life-saving.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card
                padding="xl"
                radius="lg"
                style={{ height: '100%', border: '2px solid #000000ff' }}
              >
                <Stack align="center" ta="center" h="100%" justify="center">
                  <IconBulb size={60} color="#dc2626" />
                  <Title order={2} size="2rem" fw={600} c="#071b80ff">
                    Our Vision
                  </Title>
                  <Text size="lg" lh={1.6} c="dimmed">
                    A world where blood is readily available to everyone who needs it. We envision a
                    global network of connected donors and healthcare facilities, powered by
                    innovation and driven by compassion.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Container size="xl" py={80}>
        <Stack align="center" mb={60}>
          <Title order={2} size="2.5rem" fw={600} ta="center" c="#071b80ff">
            Our Core Values
          </Title>
          <Text size="lg" ta="center" maw={600} c="dimmed">
            These principles guide everything we do and shape our commitment to saving lives
          </Text>
        </Stack>

        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="sm"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center">
                <Box
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dc2626, #071b80ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconHeart size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600}>
                  Compassion
                </Title>
                <Text c="dimmed" lh={1.6}>
                  Every action we take is driven by genuine care for human life and the communities
                  we serve.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="sm"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center">
                <Box
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dc2626, #071b80ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconShield size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600}>
                  Trust
                </Title>
                <Text c="dimmed" lh={1.6}>
                  We maintain the highest standards of safety, privacy, and reliability in all our
                  operations.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="sm"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center">
                <Box
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dc2626, #071b80ff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconBulb size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600}>
                  Innovation
                </Title>
                <Text c="dimmed" lh={1.6}>
                  We continuously evolve our technology to create better solutions for blood
                  donation challenges.
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box style={{ background: 'white' }}>
        <Container size="xl" py={80}>
          <Stack align="center" ta="center" mb={60}>
            <Title order={2} size="2.5rem" fw={600} c="#dc2626">
            The statistics is alarming!
            </Title>
            <Text size="lg" maw={600} c="dimmed">
            The African healthcare system is experiencing chronic blood shortages across its sectors.
            </Text>
          </Stack>

          <Grid gutter={{ base: 30, sm: 40 }} justify="center">
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="md"
                style={{
                  height: '100%',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Stack align="center" ta="center" px={{ base: 'md', sm: 'lg' }}>
                  <CounterTitle end={3290289} size="clamp(2.75rem, 6vw, 4.25rem)" />
                  <Text size="lg" fw={500} c="dimmed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  units of blood in 2020 in thirty eight (38) African countries, according to the WHO.
                  </Text>
                  {/* <Text size="sm" opacity={0.8}>
                    Through successful blood donations
                  </Text> */}
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="md"
                style={{
                  height: '100%',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Stack align="center" ta="center" px={{ base: 'md', sm: 'lg' }}>
                  <CounterTitle end={196000} size="clamp(2.75rem, 6vw, 4.25rem)" />
                  <Text size="lg" fw={500} c="dimmed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  women dying yearly in sub-Saharan Africa from pregnancy complications, a third die from bleeding; half the world's severe bleeding deaths occur here, 65% post-birth (PPH)
                  </Text>
                  {/* <Text size="sm" opacity={0.8}>
                    Registered on our platform
                  </Text> */}
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="md"
                style={{
                  height: '100%',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Stack align="center" ta="center" px={{ base: 'md', sm: 'lg' }}>
                  <CounterTitle end={1800000} size="clamp(2.75rem, 6vw, 4.25rem)" />
                  <Text size="lg" fw={500} c="dimmed" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                  pints of blood annually are needed to service the population of Nigeria out of which only 27% is provided.
                  </Text>
                  {/* <Text size="sm" opacity={0.8}>
                    Across multiple countries
                  </Text> */}
                </Stack>
              </Card>
            </Grid.Col>

            {/* <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
              <Stack align="center" ta="center">
                <Title order={2} size="3rem" fw={700}>
                  99.9%
                </Title>
                <Text size="lg" fw={500}>
                  Success Rate
                </Text>
                <Text size="sm" opacity={0.8}>
                  In matching donors to recipients
                </Text>
              </Stack>
            </Grid.Col> */}
          </Grid>
        </Container>
      </Box>

      {/* How We Work Section */}
      <Box style={{ background: '#f8fafc' }}>
        <Container size="xl" py={80}>
          <Stack align="center" mb={60}>
            <Title order={2} size="2.5rem" fw={600} ta="center" c="#dc2626">
              How We Work
            </Title>
            <Text size="lg" ta="center" maw={600} c="dimmed">
              Our streamlined process ensures quick and efficient blood donation matching
            </Text>
          </Stack>

          <Grid gutter={40} align="stretch">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card padding="xl" radius="lg" shadow="sm" style={{ height: '100%' }}>
                <Stack align="center" ta="center">
                  <Box
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: '#071b80ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    1
                  </Box>
                  <Title order={3} size="1.25rem" fw={600}>
                    Emergency Request
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Hospitals submit urgent blood requests through our platform with specific
                    requirements and location details.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card padding="xl" radius="lg" shadow="sm" style={{ height: '100%' }}>
                <Stack align="center" ta="center">
                  <Box
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: '#071b80ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    2
                  </Box>
                  <Title order={3} size="1.25rem" fw={600}>
                    Smart Matching
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Our AI-powered system instantly matches requests with compatible donors based on
                    blood type, location, and availability.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card padding="xl" radius="lg" shadow="sm" style={{ height: '100%' }}>
                <Stack align="center" ta="center">
                  <Box
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: '#071b80ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    3
                  </Box>
                  <Title order={3} size="1.25rem" fw={600}>
                    Life Saved
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Donors are notified immediately and can respond within minutes, ensuring timely
                    blood delivery and saving lives.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container size="xl" py={80}>
        <Stack align="center" mb={60}>
          <Title order={2} size="2.5rem" fw={600} ta="center" c="#dc2626">
            Meet Our Team
          </Title>
          <Text size="lg" ta="center" maw={600} c="dimmed">
            Passionate professionals dedicated to revolutionizing healthcare through technology
          </Text>
        </Stack>

        {/* Top Row - 2 Team Members (Centered) */}
        <Grid justify="center" gutter={40} mb={60}>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="md"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center" gap="lg">
                <Image
                  src="https://medexer.com.ng/wp-content/uploads/2023/10/steve-300x278.jpg"
                  alt="CEO"
                  radius="5%"
                  w={150}
                  h={150}
                />
                <div>
                  <Title order={4} size="1.25rem" fw={600}>
                    Steven Odinkaru
                  </Title>
                  <Text fw={500}>CEO & Founder</Text>
                  <Group gap="md" justify="center" mt="md">
                    <Anchor
                      href="https://x.com/odinkarusteve"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1da1f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandTwitter size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/steve-odinkaru/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0077b5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="md"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center" gap="lg">
                <Image
                  src="https://medexer.com.ng/wp-content/uploads/2023/11/favour-maju-300x266.jpg"
                  alt="MD"
                  radius="5%"
                  w={150}
                  h={150}
                />
                <div>
                  <Title order={4} size="1.25rem" fw={600}>
                    Favour Maju
                  </Title>
                  <Text fw={500}>Co-Founder/Managing Director</Text>
                  <Group justify="center" mt="md">
                    <Anchor
                      href="https://x.com/Maju_Fayvour"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1da1f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandTwitter size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/favour-maju-146a49288/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(254, 254, 254, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0077b5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Bottom Row - 3 Team Members (Centered) */}
        <Grid justify="center" gutter={40}>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="md"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center" gap="lg">
                <Image
                  src="https://medexer.com.ng/wp-content/uploads/2023/04/martins-1-267x300.jpg"
                  alt="COO"
                  radius="5%"
                  w={150}
                  h={150}
                />
                <div>
                  <Title order={4} size="1.25rem" fw={600}>
                    Martins Yada
                  </Title>
                  <Text fw={500}>Co-Founder/COO</Text>
                  <Group gap="md" justify="center" mt="md">
                    <Anchor
                      href="https://x.com/tisanyada"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1da1f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandTwitter size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/yada-martins/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0077b5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="md"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center" gap="lg">
                <Image
                  src="https://medexer.com.ng/wp-content/uploads/2023/04/1673818-1-265x300.png"
                  alt="CMO"
                  radius="5%"
                  w={150}
                  h={150}
                />
                <div>
                  <Title order={4} size="1.25rem" fw={600}>
                    Cynthia Umunna
                  </Title>
                  <Text fw={500}>Co-Founder/Chief Medical Officer</Text>
                  <Group gap="md" justify="center" mt="md">
                    <Anchor
                      href="https://x.com/_UCynthia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1da1f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandTwitter size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/cynthia-umunna-1054b0189/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0077b5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="md"
              style={{ height: '100%', textAlign: 'center' }}
            >
              <Stack align="center" gap="lg">
                <Image
                  src="https://medexer.com.ng/wp-content/uploads/2023/04/asalu-250x300.jpg"
                  alt="CTO"
                  radius="5%"
                  w={150}
                  h={150}
                />
                <div>
                  <Title order={4} size="1.25rem" fw={600}>
                    Asalu Peter
                  </Title>
                  <Text fw={500}>Co-Founder/CTO</Text>
                  <Group gap="md" justify="center" mt="md">
                    <Anchor
                      href="https://x.com/AsaluPeter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#1da1f2';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandTwitter size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/asalu-peter-41300a188/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0077b5';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      >
                        <IconBrandLinkedin size={20} color="#071b80ff" />
                      </Box>
                    </Anchor>
                  </Group>
                </div>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" py={80}>
        <Grid gutter={60} align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src="https://medexer.com.ng/wp-content/uploads/2023/04/measuring-768x581.jpg"
              alt="Medical professionals"
              radius="lg"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Title order={2} size="2.5rem" fw={600} c="#071b80ff">
                We Are Committed To Making It Easy, Secure And Safe!
              </Title>
              <Text size="lg" lh={1.7} c="dimmed">
                For donors, our platform offers a convenient way to donate blood, with the
                flexibility of choosing the location and time that work best for them. Donors can
                sign up on our platform, and we will notify them when a hospital needs their blood
                type. They can then choose to accept or reject the request, depending on their
                availability.
              </Text>
              <Text size="lg" lh={1.7} c="dimmed">
                At Medexer, we prioritize the safety and security of our users. Our platform follows
                strict data protection guidelines, and we take all necessary measures to ensure that
                donor and hospital information is kept confidential.
              </Text>
              <Button size="lg" color="#dc2626" radius="md">
                Reach Out To Us
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Awards & Recognition */}
      <Box style={{ background: '#f8fafc' }}>
        <Container size="xl" py={80}>
          <Stack align="center" mb={60}>
            <Title order={2} size="2.5rem" fw={600} ta="center" c="#dc2626">
              Awards & Recognition
            </Title>
            <Text size="lg" ta="center" maw={600} c="dimmed">
              Our commitment to excellence has been recognized by leading healthcare organizations
            </Text>
          </Stack>

          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="sm"
                style={{ textAlign: 'center', height: '100%' }}
              >
                <Stack align="center">
                  <IconAward size={60} color="#dc2626" />
                  <Title order={3} size="1.25rem" fw={600}>
                    Healthcare Innovation Award
                  </Title>
                  <Text c="dimmed" size="sm">
                    World Health Organization - 2023
                  </Text>
                  <Text c="dimmed" lh={1.6}>
                    Recognized for outstanding contribution to global health through innovative
                    blood donation technology.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="sm"
                style={{ textAlign: 'center', height: '100%' }}
              >
                <Stack align="center">
                  <IconUsers size={60} color="#dc2626" />
                  <Title order={3} size="1.25rem" fw={600}>
                    Social Impact Award
                  </Title>
                  <Text c="dimmed" size="sm">
                    Global Health Foundation - 2023
                  </Text>
                  <Text c="dimmed" lh={1.6}>
                    Honored for making significant impact in improving healthcare accessibility in
                    underserved communities.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="sm"
                style={{ textAlign: 'center', height: '100%' }}
              >
                <Stack align="center">
                  <IconBulb size={60} color="#dc2626" />
                  <Title order={3} size="1.25rem" fw={600}>
                    Tech for Good Award
                  </Title>
                  <Text c="dimmed" size="sm">
                    Digital Health Summit - 2022
                  </Text>
                  <Text c="dimmed" lh={1.6}>
                    Awarded for leveraging technology to solve critical healthcare challenges and
                    save lives globally.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box style={{ background: '#dc2626', color: 'white' }}>
        <Container size="xl" py={80}>
          <Stack align="center" ta="center" maw={800} mx="auto">
            <IconHeart size={80} />
            <Title order={2} size="2.5rem" fw={600}>
              Join Our Life-Saving Mission
            </Title>
            <Text size="xl" lh={1.6}>
              Every donation counts. Every life matters. Be part of a community that's making a real
              difference in the world.
            </Text>
            <Group justify="center" gap="lg" mt="xl">
              <Button size="xl" variant="white" color="#dc2626" radius="md">
                Become a Donor
              </Button>
              <Button size="xl" variant="outline" color="white" radius="md">
                Partner With Us
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutUs;
