'use client';

import Link from 'next/link';
import { Box, Burger, Container, Drawer, Group, Image, rem, Stack, Text } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { navLinks } from '@/core/utilities';
import classes from './navbar.module.css';

export function Navbar() {
  const [scroll] = useWindowScroll();

  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box
        component="header"
        className={classes.header}
        style={{
          transition: 'background-color 0.9s ease',
          // backdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          // WebkitBackdropFilter: scroll.y > 0 ? 'blur(5px)' : 'none',
          backgroundColor: scroll.y > 0 ? '#ffffffff' : '#ffffffff',
          // borderBottom: scroll.y > 0 ? '1px solid var(--mantine-color-gray-3)' : '',
        }}
      >
        <Container size="xl" py={12}>
          <Group justify="space-between" align="center">
            {/* Left section: Logo and Navigation */}
            <Group>
              <Link href="/">
                <Image w={35} h="auto" alt="lvx" src="/images/medexer_logo.png" />
              </Link>
              <Text size="xl" fw={800} c="#0a2acfff">
                Medexer
              </Text>
            </Group>

            <Group gap={40} visibleFrom="sm">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.link}
                  target={link.target}
                  style={{
                    display: 'block',
                    lineHeight: 1,
                    padding: `${rem(8)} ${rem(12)}`,
                    borderRadius: 'var(--mantine-radius-sm)',
                    textDecoration: 'none',
                    color:
                      scroll.y > 0 ? 'var(--mantine-color-black)' : 'var(--mantine-color-black)',
                    fontSize: 'var(--mantine-font-size-sm)',
                    fontWeight: 500,
                    transition: 'background-color 150ms ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Group>

            {/* Mobile Burger Menu */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" color="#dc2626" />
          </Group>
        </Container>

        {/* Mobile drawer */}
        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="xl"
          hiddenFrom="sm"
          zIndex={1000000}
          position="right"
        >
          <Stack gap="lg" mt="xl">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                style={{
                  display: 'block',
                  lineHeight: 1,
                  padding: `${rem(16)} ${rem(20)}`,
                  borderRadius: 'var(--mantine-radius-md)',
                  textDecoration: 'none',
                  color: '#1f2937',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  border: '1px solid #e5e7eb',
                }}
                onClick={toggle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2626';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.borderColor = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1f2937';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </Drawer>
      </Box>
    </>
  );
}
