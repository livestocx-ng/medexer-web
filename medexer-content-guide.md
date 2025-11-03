# Medexer Hero Section Content Guide

## Content to Extract from medexer.com.ng

### 1. Trust Badge

**Current placeholder**: "Medexer - Professional Healthcare Services"
**Replace with**: Company tagline or certification from the website

### 2. Main Headline

**Current placeholder**: "Your Health, Our Priority"
**Replace with**: Primary headline from medexer.com.ng homepage
**Suggested format**: Should be impactful and benefit-focused

### 3. Supporting Description

**Current placeholder**: "We provide comprehensive healthcare services..."
**Replace with**: Main value proposition from the website
**Length**: 2-3 sentences, 30-50 words

### 4. Key Features (3 items currently)

**Current placeholders**:

- Blood Donation
- Safe & Secure
- Save Lives

**Replace with**: Top 3 services or benefits from medexer.com.ng

### 5. Call-to-Action Buttons

**Primary Button**: "Our Services" → Replace with main CTA from website
**Secondary Button**: "Contact Us" → Update with actual phone number or contact info

### 6. Service Highlights (Bottom stats)

**Current placeholders**:

- 24/7 Emergency Care
- Expert Medical Team
- Safe Procedures

**Replace with**: Key statistics or highlights from medexer.com.ng

## Design Features Implemented

### Visual Design

- **Background**: Blood donor in medical setting (matches your provided image)
- **Color Scheme**: White text on blue gradient overlay
- **Typography**: Large, bold headlines with excellent readability
- **Layout**: Centered, professional medical design

### Interactive Elements

- **Hover Effects**: Buttons lift and glow on hover
- **Parallax Scrolling**: Background moves subtly on scroll
- **Floating Particles**: Medical-themed animation
- **Smooth Animations**: Staggered fade-in effects

### Accessibility Features

- **High Contrast**: White text on blue background
- **ARIA Labels**: Proper semantic HTML
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: Compatible with assistive technology

### Responsive Design

- **Mobile Optimized**: Scales perfectly on all devices
- **Flexible Typography**: Uses clamp() for responsive text
- **Touch Friendly**: Large buttons for mobile interaction

## Usage Instructions

1. **Extract Content**: Visit medexer.com.ng and copy the relevant content
2. **Replace Placeholders**: Update all placeholder text in the component
3. **Test Links**: Ensure all href attributes point to correct pages
4. **Verify Phone Numbers**: Update contact information
5. **Review Statistics**: Confirm all numbers and claims are accurate

## Component Integration

To use this hero section in your app:

```tsx
import MedexerHero from '@/core/components/home/medexer-hero';

// In your page component
<MedexerHero />;
```

The component is fully self-contained and ready to use once content is updated.
