import React from 'react';
import { Container, Group, Image, Paper, Text } from '@mantine/core';

const SdgSection = () => {
  return (
    <Container size="xl" py={{ base: 25, sm: 30 }}>
      <Paper p={{ base: 20, sm: 28 }}>
        <Group justify="center" align="center" gap={10} style={{ flexWrap: 'wrap' }}>
          <Text fz={{ base: 16, sm: 18 }} maw={500} color="green">
            Working towards the United Nations SDG 3: Ensure healthy lives and promote well-being
            for all, at all ages.
          </Text>

          <Image
            src="/images/SDG3-150x150.png"
            alt="Our Story - Medexer blood donation"
            radius="lg"
            fit="cover"
            w={{ base: '80%', sm: '40%' }}
            h={{ base: 120, sm: 200 }}
            
          />
        </Group>
      </Paper>
    </Container>
  );
};

export default SdgSection;
