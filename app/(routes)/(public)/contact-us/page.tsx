'use client';

import React from 'react';
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  IconSend,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission

    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage:
          "url('https://videos.openai.com/az/vg-assets/assets%2Ftask_01k886cf83ejcvywx9brz12rq6%2F1761211835_img_0.webp?se=2025-11-14T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-10T01%3A08%3A58Z&ske=2025-11-17T01%3A13%3A58Z&sks=b&skv=2024-08-04&sig=4R4wH8HykhHU/M97%2Brvy6Z/lSxYMhc4bGKHFPlixVog%3D&ac=oaivgprodscus')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background Overlay */}
      <Box
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 1,
        }}
      />

      {/* Hero Section */}
      <Box style={{ position: 'relative', minHeight: '50vh', overflow: 'hidden', zIndex: 2 }}>
        <Container size="xl" style={{ position: 'relative', zIndex: 3, height: '100%' }}>
          <Stack
            align="center"
            justify="center"
            style={{ minHeight: '50vh', color: 'white', textAlign: 'center' }}
          >
            <Title order={1} size="3.5rem" fw={700} mb="lg">
              Contact Us
            </Title>
            <Text size="xl" maw={600} lh={1.6}>
              Get in touch with our team. We're here to help you save lives through blood donation.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container size="xl" py={80} style={{ position: 'relative', zIndex: 2 }}>
        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="lg"
              style={{
                height: '100%',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
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
                  <IconLocation size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600} c="#dc2626">
                  Visit Our Office
                </Title>
                <Text size="lg" fw={500}>
                  123 Medical Center Drive
                </Text>
                <Text c="dimmed">Lagos, Nigeria 100001</Text>
                <Text size="sm" c="dimmed">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="lg"
              style={{
                height: '100%',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
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
                  <IconPhone size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600} c="#dc2626">
                  Call Us
                </Title>
                <Text size="lg" fw={500}>
                  +234 (0) 813 254 9273
                </Text>
                <Text c="dimmed">Emergency Hotline: +234 (0) 800 MEDEXER</Text>
                <Text size="sm" c="dimmed">
                  Available 24/7 for emergencies
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card
              padding="xl"
              radius="lg"
              shadow="lg"
              style={{
                height: '100%',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
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
                  <IconMail size={40} color="white" />
                </Box>
                <Title order={3} size="1.5rem" fw={600} c="#dc2626">
                  Email Us
                </Title>
                <Text size="lg" fw={500}>
                  info@medexer.com
                </Text>
                <Text c="dimmed">support@medexer.com</Text>
                <Text size="sm" c="dimmed">
                  We'll respond within 24 hours
                </Text>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Box style={{ background: 'rgba(248, 250, 252, 0.95)', position: 'relative', zIndex: 2 }}>
        <Container size="xl" py={80}>
          <Grid gutter={60} align="stretch">
            {/* Contact Form */}
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="xl">
                  <div>
                    <Title order={2} size="2rem" fw={600} c="#071b80ff" mb="sm">
                      Send us a Message
                    </Title>
                    <Text c="dimmed" size="lg">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </Text>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <Stack gap="lg">
                      <Grid gutter="md">
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            name="firstName"
                            label="First Name"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            size="md"
                            radius="md"
                            styles={{
                              label: { fontWeight: 500, marginBottom: 8 },
                              input: {
                                borderColor: '#d1d5db',
                                '&:focus': { borderColor: '#dc2626' },
                              },
                            }}
                          />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            name="lastName"
                            label="Last Name"
                            placeholder="Enter your last name"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            size="md"
                            radius="md"
                            styles={{
                              label: { fontWeight: 500, marginBottom: 8 },
                              input: {
                                borderColor: '#d1d5db',
                                '&:focus': { borderColor: '#dc2626' },
                              },
                            }}
                          />
                        </Grid.Col>
                      </Grid>

                      <Grid gutter="md">
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            name="email"
                            type="email"
                            label="Email Address"
                            placeholder="your.email@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            size="md"
                            radius="md"
                            styles={{
                              label: { fontWeight: 500, marginBottom: 8 },
                              input: {
                                borderColor: '#d1d5db',
                                '&:focus': { borderColor: '#dc2626' },
                              },
                            }}
                          />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 6 }}>
                          <TextInput
                            name="phone"
                            type="tel"
                            label="Phone Number"
                            placeholder="+234 (0) 813 254 9273"
                            value={formData.phone}
                            onChange={handleChange}
                            size="md"
                            radius="md"
                            styles={{
                              label: { fontWeight: 500, marginBottom: 8 },
                              input: {
                                borderColor: '#d1d5db',
                                '&:focus': { borderColor: '#dc2626' },
                              },
                            }}
                          />
                        </Grid.Col>
                      </Grid>

                      <TextInput
                        name="subject"
                        label="Subject"
                        placeholder="What is this regarding?"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        size="md"
                        radius="md"
                        styles={{
                          label: { fontWeight: 500, marginBottom: 8 },
                          input: { borderColor: '#d1d5db', '&:focus': { borderColor: '#dc2626' } },
                        }}
                      />

                      <Textarea
                        name="message"
                        label="Message"
                        placeholder="Please provide details about your inquiry..."
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        size="md"
                        radius="md"
                        styles={{
                          label: { fontWeight: 500, marginBottom: 8 },
                          input: { borderColor: '#d1d5db', '&:focus': { borderColor: '#dc2626' } },
                        }}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        radius="md"
                        color="#071b80ff"
                        leftSection={<IconSend size={20} />}
                        style={{ alignSelf: 'flex-start' }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                </Stack>
              </Card>
            </Grid.Col>

            {/* Additional Info */}
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Stack gap="xl" style={{ height: '100%' }}>
                <Card
                  padding="xl"
                  radius="lg"
                  shadow="sm"
                  style={{ background: '#dc2626', color: 'white' }}
                >
                  <Stack gap="lg">
                    <Title order={3} size="1.5rem" fw={600}>
                      Emergency Contact
                    </Title>
                    <Text>
                      For urgent blood donation requests or medical emergencies, contact us
                      immediately.
                    </Text>
                    <Group gap="sm">
                      <IconPhone size={20} />
                      <Text fw={500}>+234 (0) 800 MEDEXER</Text>
                    </Group>
                    <Text size="sm" opacity={0.9}>
                      Available 24/7 for life-threatening emergencies
                    </Text>
                  </Stack>
                </Card>

                <Card
                  padding="xl"
                  radius="lg"
                  shadow="lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Stack gap="lg">
                    <Title order={3} size="1.5rem" fw={600} c="#071b80ff">
                      Office Hours
                    </Title>
                    <Stack gap="sm">
                      <Group justify="space-between">
                        <Text fw={500}>Monday - Friday</Text>
                        <Text c="dimmed">8:00 AM - 6:00 PM</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text fw={500}>Saturday</Text>
                        <Text c="dimmed">9:00 AM - 4:00 PM</Text>
                      </Group>
                      <Group justify="space-between">
                        <Text fw={500}>Sunday</Text>
                        <Text c="dimmed">Emergency Only</Text>
                      </Group>
                    </Stack>
                    <Group gap="sm" mt="md">
                      <IconClock size={20} color="#071b80ff" />
                      <Text size="sm" c="dimmed">
                        Response time: Within 2 hours during business hours
                      </Text>
                    </Group>
                  </Stack>
                </Card>

                <Card
                  padding="xl"
                  radius="lg"
                  shadow="lg"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Stack gap="lg">
                    <Title order={3} size="1.5rem" fw={600} c="#071b80ff">
                      Follow Us
                    </Title>
                    <Text c="dimmed">
                      Stay updated with our latest news and blood donation campaigns.
                    </Text>
                    <Group gap="md">
                      <Anchor
                        href="https://www.facebook.com/medexerlimited"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <IconBrandFacebook size={24} color="#071b80ff" />
                        </Box>
                      </Anchor>
                      <Anchor
                        href="https://x.com/MedexerLTD?t=zaAalrK9LBFTSFxObWr2rw&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <IconBrandTwitter size={24} color="#071b80ff" />
                        </Box>
                      </Anchor>
                      <Anchor
                        href="https://linkedin.com/company/medexer-limited/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Box
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease',
                          }}
                        >
                          <IconBrandLinkedin size={24} color="#071b80ff" />
                        </Box>
                      </Anchor>
                    </Group>
                  </Stack>
                </Card>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container size="xl" py={80} style={{ position: 'relative', zIndex: 2 }}>
        <Stack align="center" mb={60}>
          <Title order={2} size="2.5rem" fw={600} ta="center" c="#dc2626">
            Frequently Asked Questions
          </Title>
          <Text size="lg" ta="center" maw={600} c="dimmed">
            Find answers to common questions about our blood donation platform
          </Text>
        </Stack>

        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    How does Medexer work?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Medexer connects blood donors with hospitals and patients in need. When a
                    hospital requests blood, our system matches it with compatible donors in the
                    area and sends instant notifications.
                  </Text>
                </Stack>
              </Card>

              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    Is it safe to donate blood?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Yes, blood donation is completely safe. We only work with certified medical
                    facilities that follow strict safety protocols. All equipment is sterile and
                    single-use.
                  </Text>
                </Stack>
              </Card>

              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    How often can I donate blood?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    You can donate whole blood every 8 weeks (56 days). Our app tracks your donation
                    history and will notify you when you're eligible to donate again.
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    What are the requirements to donate?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    You must be 18-65 years old, weigh at least 50kg, be in good health, and not
                    have donated blood in the last 8 weeks. Additional screening is done at the
                    donation site.
                  </Text>
                </Stack>
              </Card>

              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    Do I get compensated for donating?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    Blood donation is voluntary and unpaid. However, some partner hospitals may
                    provide refreshments, certificates of appreciation, or small tokens of
                    gratitude.
                  </Text>
                </Stack>
              </Card>

              <Card
                padding="xl"
                radius="lg"
                shadow="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Stack gap="md">
                  <Title order={4} size="1.25rem" fw={600} c="#071b80ff">
                    How do I know my blood type?
                  </Title>
                  <Text c="dimmed" lh={1.6}>
                    If you don't know your blood type, it will be determined during your first
                    donation. We'll update your profile with this information for future donations.
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        style={{
          background: '#071b80ff',
          color: 'white',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Container size="xl" py={80}>
          <Stack align="center" ta="center" maw={800} mx="auto">
            <Title order={2} size="2.5rem" fw={600}>
              Ready to Save Lives?
            </Title>
            <Text size="xl" lh={1.6}>
              Join thousands of heroes who are making a difference. Download our app today and
              become part of the life-saving community.
            </Text>
            <Group justify="center" gap="lg" mt="xl">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <Button size="xl" variant="white" color="#dc2626" radius="md">
                  Download App
                </Button>
              </Link>
              <Link href="/contact-us" style={{ textDecoration: 'none' }}>
                <Button size="xl" variant="outline" color="white" radius="md">
                  Become a Partner
                </Button>
              </Link>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactUs;
