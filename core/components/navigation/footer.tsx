import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import { Anchor, Box, Container, Grid, Group, Image, Stack, Text, Title } from '@mantine/core';

export function Footer() {
  return (
    <Box style={{ background: '#1f2937', color: 'white' }}>
      {/* Main Footer Content */}
      <Container size="xl" py={60}>
        <Grid gutter={40}>
          {/* Brand Section */}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="lg" align="center">
              <div style={{ textAlign: 'center' }}>
                <Image
                  src="/images/medexer_logo.png"
                  alt="Medexer Logo"
                  // radius="100"
                  style={{
                    width: '70px',
                    height: 'auto',
                    objectFit: 'cover',
                    margin: '0 auto',
                    display: 'block',
                  }}
                  mb="md"
                />
                {/* <Title order={2} size="1.5rem" fw={700} c="#dc2626" mb="sm">
                  Medexer
                </Title> */}
                <Text c="#9ca3af" size="md" lh={1.6} ta="center">
                  Connecting lives through innovative blood donation solutions. We're building a
                  healthier future, one donation at a time.
                </Text>
              </div>

              <div style={{ textAlign: 'center' }}>
                <Text fw={600} mb="md" c="white">
                  Follow Us
                </Text>
                <Group gap="md" justify="center">
                  <Anchor
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#374151',
                      color: '#9ca3af',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#dc2626';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#374151';
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <IconBrandFacebook size={20} />
                  </Anchor>
                  <Anchor
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#374151',
                      color: '#9ca3af',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#dc2626';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#374151';
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <IconBrandTwitter size={20} />
                  </Anchor>
                  <Anchor
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#374151',
                      color: '#9ca3af',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#dc2626';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#374151';
                      e.currentTarget.style.color = '#9ca3af';
                    }}
                  >
                    <IconBrandLinkedin size={20} />
                  </Anchor>
                </Group>
              </div>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="md">
              <Title order={4} fw={600} c="white">
                Quick Links
              </Title>
              <Stack gap="sm">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <Text c="#9ca3af" size="sm" style={{ cursor: 'pointer' }}>
                    Home
                  </Text>
                </Link>
                <Link href="/about-us" style={{ textDecoration: 'none' }}>
                  <Text c="#9ca3af" size="sm" style={{ cursor: 'pointer' }}>
                    About Us
                  </Text>
                </Link>
                <Link href="/blog" style={{ textDecoration: 'none' }}>
                  <Text c="#9ca3af" size="sm" style={{ cursor: 'pointer' }}>
                    Blog
                  </Text>
                </Link>
                <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                  <Text c="#9ca3af" size="sm" style={{ cursor: 'pointer' }}>
                    Contact
                  </Text>
                </Link>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Services */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Title order={4} fw={600} c="white">
                Our Services
              </Title>
              <Stack gap="sm">
                <Text c="#9ca3af" size="sm">
                  Blood Donor Registration
                </Text>
                <Text c="#9ca3af" size="sm">
                  Emergency Blood Requests
                </Text>
                <Text c="#9ca3af" size="sm">
                  Hospital Partnerships
                </Text>
                <Text c="#9ca3af" size="sm">
                  Mobile Blood Drives
                </Text>
                <Text c="#9ca3af" size="sm">
                  Health Education
                </Text>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Contact Info */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Stack gap="md">
              <Title order={4} fw={600} c="white">
                Contact Info
              </Title>
              <Stack gap="sm">
                <Group gap="sm" align="flex-start">
                  <IconMapPin size={18} color="#dc2626" style={{ marginTop: 2 }} />
                  <Text c="#9ca3af" size="sm" lh={1.5}>
                    123 Medical Center Drive
                    <br />
                    Lagos, Nigeria 100001
                  </Text>
                </Group>
                <Group gap="sm">
                  <IconPhone size={18} color="#dc2626" />
                  <Text c="#9ca3af" size="sm">
                    +234 (0) 813 254 9273
                  </Text>
                </Group>
                <Group gap="sm">
                  <IconMail size={18} color="#dc2626" />
                  <Anchor
                    href="mailto:info@medexer.com"
                    c="#9ca3af"
                    size="sm"
                    style={{ textDecoration: 'none' }}
                  >
                    info@medexer.com
                  </Anchor>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box style={{ borderTop: '1px solid #374151' }}>
        <Container size="xl" py="lg">
          <Group justify="space-between" align="center">
            <Text size="sm" c="#6b7280">
              © {new Date().getFullYear()} Medexer. All rights reserved.
            </Text>
            <Group gap="lg">
              <Link href="/privacy" style={{ textDecoration: 'none' }}>
                <Text size="sm" c="#6b7280" style={{ cursor: 'pointer' }}>
                  Privacy Policy
                </Text>
              </Link>
              <Link href="/terms" style={{ textDecoration: 'none' }}>
                <Text size="sm" c="#6b7280" style={{ cursor: 'pointer' }}>
                  Terms of Service
                </Text>
              </Link>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
