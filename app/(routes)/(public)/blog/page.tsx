'use client';

import React from 'react';

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
  Anchor,
  Badge,
  Box,
  // Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Pagination,
  Stack,
  Text,
  // TextInput,
  Title,
} from '@mantine/core';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: 'The Critical Importance of Blood Donation in Emergency Medicine',
      excerpt:
        'Exploring how blood donations save lives in emergency situations and the urgent need for more donors in healthcare systems worldwide.',
      author: 'Dr. Michael Chen',
      date: '2024-10-25',
      readTime: '8 min read',
      category: 'Emergency Medicine',
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 2150,
      likes: 189,
      comments: 24,
      tags: ['Emergency Medicine', 'Blood Donation', 'Healthcare', 'Life Saving'],
    },
    {
      id: 2,
      title: 'How Technology is Revolutionizing Blood Donation Networks',
      excerpt:
        'Discover how mobile apps and AI are transforming the way we connect blood donors with hospitals and patients in need.',
      author: 'Sarah Johnson',
      date: '2024-10-20',
      readTime: '6 min read',
      category: 'Technology',
      image:
        'https://dp20430eecj0w.cloudfront.net/versions/original/4dc490a8-f220-4e96-a585-55fdf16d8dd9_4a029a84cd464d33820e07cff3a95d4ejpeg.jpeg',
      views: 1890,
      likes: 156,
      comments: 18,
      tags: ['Technology', 'Innovation', 'Mobile Health', 'AI'],
    },
    {
      id: 3,
      title: 'Blood Types and Compatibility: What Every Donor Should Know',
      excerpt:
        'A comprehensive guide to understanding blood types, compatibility, and why certain blood types are more in demand than others.',
      author: 'Dr. David Rodriguez',
      date: '2024-10-15',
      readTime: '7 min read',
      category: 'Medical Education',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 2450,
      likes: 203,
      comments: 31,
      tags: ['Blood Types', 'Medical Education', 'Donor Education', 'Healthcare'],
    },
    {
      id: 4,
      title: 'Building Sustainable Blood Donation Programs in Rural Communities',
      excerpt:
        'How healthcare organizations are establishing effective blood donation programs in underserved rural areas.',
      author: 'Emily Watson',
      date: '2024-10-10',
      readTime: '5 min read',
      category: 'Community Health',
      image:
        'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1340,
      likes: 98,
      comments: 15,
      tags: ['Community Health', 'Rural Healthcare', 'Sustainability', 'Access'],
    },
    {
      id: 5,
      title: 'The Science Behind Blood Storage and Transportation',
      excerpt:
        'Understanding the complex logistics and scientific processes involved in safely storing and transporting blood products.',
      author: 'Dr. James Wilson',
      date: '2024-10-05',
      readTime: '9 min read',
      category: 'Medical Science',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1670,
      likes: 134,
      comments: 22,
      tags: ['Medical Science', 'Blood Storage', 'Logistics', 'Safety'],
    },
    {
      id: 6,
      title: 'Overcoming Cultural Barriers to Blood Donation',
      excerpt:
        'Addressing cultural and religious concerns about blood donation and building trust within diverse communities.',
      author: 'Dr. Aisha Patel',
      date: '2024-09-30',
      readTime: '6 min read',
      category: 'Cultural Health',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1520,
      likes: 112,
      comments: 19,
      tags: ['Cultural Health', 'Community Engagement', 'Diversity', 'Education'],
    },
    {
      id: 7,
      title: 'Mobile Blood Donation: Bringing Healthcare to Remote Areas',
      excerpt:
        'How mobile blood donation units are revolutionizing healthcare access in rural and underserved communities.',
      author: 'Dr. Sarah Mitchell',
      date: '2024-09-25',
      readTime: '5 min read',
      category: 'Mobile Health',
      image:
        'https://dp20430eecj0w.cloudfront.net/versions/original/4dc490a8-f220-4e96-a585-55fdf16d8dd9_4a029a84cd464d33820e07cff3a95d4ejpeg.jpeg',
      views: 1280,
      likes: 95,
      comments: 14,
      tags: ['Mobile Health', 'Rural Healthcare', 'Innovation', 'Access'],
    },
    {
      id: 8,
      title: 'The Role of AI in Blood Donation Matching',
      excerpt:
        'Exploring how artificial intelligence is improving the speed and accuracy of blood type matching and donor selection.',
      author: 'Dr. Alex Thompson',
      date: '2024-09-20',
      readTime: '7 min read',
      category: 'Technology',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1890,
      likes: 142,
      comments: 28,
      tags: ['AI', 'Technology', 'Blood Matching', 'Innovation'],
    },
    {
      id: 9,
      title: 'Patient Stories: Lives Changed Through Blood Donation',
      excerpt:
        'Heartwarming stories from patients whose lives were saved through the generosity of blood donors.',
      author: 'Emily Rodriguez',
      date: '2024-09-15',
      readTime: '4 min read',
      category: 'Patient Stories',
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 2340,
      likes: 198,
      comments: 45,
      tags: ['Patient Stories', 'Inspiration', 'Community', 'Impact'],
    },
    {
      id: 10,
      title: 'Blood Donation Safety Protocols: What Donors Need to Know',
      excerpt:
        'A comprehensive guide to the safety measures and protocols that protect both donors and recipients.',
      author: 'Dr. Mark Johnson',
      date: '2024-09-10',
      readTime: '6 min read',
      category: 'Safety',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1650,
      likes: 118,
      comments: 22,
      tags: ['Safety', 'Protocols', 'Donor Education', 'Healthcare'],
    },
    {
      id: 11,
      title: 'Building Community: Blood Donation Drives That Make a Difference',
      excerpt:
        'How local communities are organizing successful blood donation drives and creating lasting impact.',
      author: 'Lisa Chen',
      date: '2024-09-05',
      readTime: '5 min read',
      category: 'Community',
      image:
        'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1420,
      likes: 89,
      comments: 16,
      tags: ['Community', 'Drives', 'Organization', 'Impact'],
    },
    {
      id: 12,
      title: 'The Future of Blood Banking: Innovations on the Horizon',
      excerpt:
        'Exploring cutting-edge technologies and innovations that will shape the future of blood banking and storage.',
      author: 'Dr. Robert Kim',
      date: '2024-08-30',
      readTime: '8 min read',
      category: 'Innovation',
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1780,
      likes: 134,
      comments: 31,
      tags: ['Innovation', 'Future', 'Blood Banking', 'Technology'],
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  const popularTags = [
    'Blood Donation',
    'Emergency Medicine',
    'Healthcare Technology',
    'Medical Education',
    'Community Health',
    'Patient Safety',
  ];

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
          {currentPosts.map((post) => (
            <Grid.Col key={post.id} span={{ base: 12, md: 6, lg: 4 }}>
              <Card
                padding={0}
                radius="lg"
                shadow="sm"
                style={{
                  overflow: 'hidden',
                  height: '100%',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                }}
              >
                <Box style={{ height: 200 }}>
                  <Image src={post.image} alt={post.title} height={200} fit="cover" />
                </Box>

                <Stack p="xl" gap="md" style={{ height: 'calc(100% - 200px)' }}>
                  <Group gap="sm">
                    <Badge color="#dc2626" variant="light" size="sm">
                      {post.category}
                    </Badge>
                    <Text size="xs" c="dimmed">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </Text>
                  </Group>

                  <Title order={3} size="1.25rem" fw={600} lineClamp={2} lh={1.3}>
                    <Anchor
                      href={`/blog/${post.id}`}
                      c="#1f2937"
                      style={{ textDecoration: 'none' }}
                    >
                      {post.title}
                    </Anchor>
                  </Title>

                  <Text c="#6b7280" size="sm" lineClamp={3} lh={1.5}>
                    {post.excerpt}
                  </Text>

                  <Group justify="space-between" mt="auto" pt="md">
                    <Group gap="xs">
                      <Text size="xs" c="dimmed" fw={500}>
                        {post.author}
                      </Text>
                    </Group>
                    <Group gap="xs">
                      <Text size="xs" c="dimmed">
                        {post.readTime}
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

        {/* Pagination */}
        <Group justify="center" mt={80}>
          <Pagination
            total={totalPages}
            value={currentPage}
            onChange={setCurrentPage}
            size="md"
            radius="md"
            color="#dc2626"
            styles={{
              control: {
                border: '1px solid #e5e7eb',
                '&[data-active]': {
                  backgroundColor: '#dc2626',
                  borderColor: '#dc2626',
                },
              },
            }}
          />
        </Group>
      </Container>
    </Box>
  );
};

export default BlogPage;
