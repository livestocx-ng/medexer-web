// 'use client';

// import Link from 'next/link';
// import { Box, Button, Container, Group, Stack, Text, Title } from '@mantine/core';

// const MedexerReplicaHero = () => {
//   return (
//     <Box
//       style={{
//         minHeight: '100vh',
//         background: '#e5e7eb', // Light gray background
//         padding: '2rem',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       {/* Main Card Container */}
//       <Box
//         style={{
//           maxWidth: '1200px',
//           width: '100%',
//           background: 'white',
//           borderRadius: '12px',
//           overflow: 'hidden',
//           boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         {/* Header Navigation */}
//         <Box
//           style={{
//             background: 'white',
//             padding: '1.5rem 2rem',
//             borderBottom: '1px solid #f3f4f6',
//           }}
//         >
//           <Group justify="space-between" align="center">
//             {/* Logo */}
//             <Group gap="xs" align="center">
//               <Box
//                 style={{
//                   width: '32px',
//                   height: '32px',
//                   background: '#3b82f6',
//                   borderRadius: '6px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: 'white',
//                   fontWeight: 'bold',
//                   fontSize: '18px',
//                 }}
//               >
//                 M
//               </Box>
//               <Text
//                 size="xl"
//                 fw={600}
//                 style={{
//                   color: '#3b82f6',
//                   fontSize: '24px',
//                 }}
//               >
//                 Medexer
//               </Text>
//             </Group>

//             {/* Navigation Links */}
//             <Group gap="xl">
//               <Link href="/" style={{ textDecoration: 'none' }}>
//                 <Text
//                   size="md"
//                   style={{
//                     color: '#3b82f6',
//                     fontWeight: 500,
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = '#2563eb';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = '#3b82f6';
//                   }}
//                 >
//                   Home
//                 </Text>
//               </Link>
//               <Link href="/about" style={{ textDecoration: 'none' }}>
//                 <Text
//                   size="md"
//                   style={{
//                     color: '#3b82f6',
//                     fontWeight: 500,
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = '#2563eb';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = '#3b82f6';
//                   }}
//                 >
//                   About Us
//                 </Text>
//               </Link>
//               <Link href="/contact" style={{ textDecoration: 'none' }}>
//                 <Text
//                   size="md"
//                   style={{
//                     color: '#3b82f6',
//                     fontWeight: 500,
//                     cursor: 'pointer',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = '#2563eb';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = '#3b82f6';
//                   }}
//                 >
//                   Contact
//                 </Text>
//               </Link>
//             </Group>
//           </Group>
//         </Box>

//         {/* Hero Section */}
//         <Box
//           style={{
//             position: 'relative',
//             height: '600px',
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           {/* Blue Overlay */}
//           <Box
//             style={{
//               position: 'absolute',
//               inset: 0,
//               background: 'rgba(59, 130, 246, 0.8)',
//             }}
//           />

//           {/* Content */}
//           <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
//             <Stack gap="xl" style={{ maxWidth: '600px' }}>
//               {/* Main Headline */}
//               <Title
//                 order={1}
//                 style={{
//                   color: 'white',
//                   fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//                   fontWeight: 700,
//                   lineHeight: 1.1,
//                   textShadow: '0 2px 4px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 Donate Blood and Save a Life Today!
//               </Title>

//               {/* Description */}
//               <Text
//                 size="lg"
//                 style={{
//                   color: 'rgba(255, 255, 255, 0.95)',
//                   fontSize: '18px',
//                   lineHeight: 1.6,
//                   maxWidth: '500px',
//                   textShadow: '0 1px 2px rgba(0,0,0,0.1)',
//                 }}
//               >
//                 We work hard to make the blood donation process prompt, seamless, and easy by
//                 connecting hospitals directly to verified blood donors.
//               </Text>

//               {/* Buttons */}
//               <Group gap="md" style={{ marginTop: '1rem' }}>
//                 <Button
//                   size="lg"
//                   style={{
//                     background: '#3b82f6',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '6px',
//                     padding: '12px 24px',
//                     fontSize: '16px',
//                     fontWeight: 600,
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = '#2563eb';
//                     e.currentTarget.style.transform = 'translateY(-1px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = '#3b82f6';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   Get the App
//                 </Button>

//                 <Button
//                   size="lg"
//                   variant="outline"
//                   style={{
//                     background: 'transparent',
//                     color: 'white',
//                     border: '2px solid white',
//                     borderRadius: '6px',
//                     padding: '12px 24px',
//                     fontSize: '16px',
//                     fontWeight: 600,
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
//                     e.currentTarget.style.transform = 'translateY(-1px)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = 'transparent';
//                     e.currentTarget.style.transform = 'translateY(0)';
//                   }}
//                 >
//                   Know More
//                 </Button>
//               </Group>
//             </Stack>
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default MedexerReplicaHero;
