import { Box, Card, Container, Grid, Image, Stack, Title } from '@mantine/core';

const imageSources = ['/images/aws-150x150.png', '/images/hindsight.png', '/images/download-1.png'];

const SupportSection = () => {
  return (
    <Box
      component="section"
      style={{
        paddingTop: 80,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, #ffffffff 0%, #fff 60%)',
      }}
    >
      <Container size="xl">
        <Stack align="center" gap="xs" mb={40}>
          <Title
            order={2}
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
              color: '#2b1e2d',
            }}
          >
            Supported By:
          </Title>
        </Stack>

        <Grid gutter={24}>
          {imageSources.map((src, index) => (
            <Grid.Col key={index} span={{ base: 12, md: 4 }}>
              <Card
                radius="lg"
                padding="md"
                style={{
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.04)',
                  transition: 'transform 300ms ease, box-shadow 300ms ease',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.04)';
                }}
              >
                <Image
                  src={src}
                  alt={`Supporter ${index + 1}`}
                  fit="contain"
                  radius="md"
                  height={100}
                  style={{
                    objectFit: 'contain',
                    maxWidth: '50%',
                  }}
                />
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportSection;
