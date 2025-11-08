'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { posts } from './posts';

import '@tabler/icons-react'; // IconArrowRight,

// IconCalendar,
// IconClock,
// IconEye,
// IconHeart,
// IconMessageCircle,
// IconSearch,
// IconTag,
// IconUser,

import {
  Box,
  // Button,
  Card,
  Container,
  Grid,
  Image,
  Stack,
  Text,
  // TextInput,
  Title,
} from '@mantine/core';

const BlogPage = () => {
  const router = useRouter();

  const blogPosts = Object.values(posts).map((p) => ({
    id: p.id,
    title: p.title,
    excerpt: p.excerpt || '',
    author: p.author || 'Medexer',
    date: p.date,
    readTime: p.readTime || '',
    category: p.category || '',
    image: p.image || '/images/image_blog_header.jpg',
  }));

  // Render all posts on a single page (no pagination)

  // const popularTags = [];

  return (
    <Box>
      {/* Simple Header */}
      <Box style={{ background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <Container size="xl" py={60}>
          <Stack align="center" ta="center" gap="lg">
            <Title order={1} size="3rem" fw={600} c="#1f2937">
              Blog
            </Title>
            <Text size="lg" c="#6b7280" maw={600}>
              Stay updated with the latest news, insights, and stories from the world of healthcare
              and blood donation.
            </Text>
          </Stack>
        </Container>
      </Box>

      <Container size="xl" py={80}>
        {/* Blog Posts Grid */}
        <Grid gutter={40}>
          {blogPosts.map((post) => (
            <Grid.Col key={post.id} span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                padding={0}
                radius="lg"
                shadow="sm"
                style={{
                  overflow: 'hidden',
                  height: 420,
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                  onClick={() => router.push(`/blog/${post.id}`)}
                  onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}
              >
              
                <Box style={{ height: 260, width: '100%', padding: '10px' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    height={260}
                    fit="contain" 
                    style={{ objectFit: 'contain', backgroundColor: '#f9fafb' }} // optional clean bg
                  />
                </Box>
                <Stack p="xl" gap="md" style={{ height: 'calc(100% - 260px)' }}>
                  <Title order={3} size="1.25rem" fw={600} lineClamp={2} lh={1.3}>
                    <Link href={`/blog/${post.id}`} style={{ color: '#1f2937', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </Title>

                <Text c="#6b7280" size="sm" lineClamp={3} lh={1.5}>
                  {post.excerpt}
                </Text>
              </Stack>
            </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
