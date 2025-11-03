# Video Background Setup Instructions

## Steps to Add Your Video Background:

### 1. Download the Video

- Download the video from the provided link: https://sora.chatgpt.com/g/gen_01k87zzbywfqh9r9w53sdansys
- Save it in multiple formats for better browser compatibility:
  - `.mp4` (most compatible)
  - `.webm` (better compression, modern browsers)

### 2. Add Video to Your Project

Create a `videos` folder in your `public` directory and add your video files:

```
public/
├── videos/
│   ├── hero-medical-video.mp4
│   └── hero-medical-video.webm
└── ...
```

### 3. Video Requirements

For optimal performance, ensure your video:

- **Duration**: 10-30 seconds (will loop automatically)
- **Resolution**: 1920x1080 or higher
- **File Size**: Under 10MB for good loading performance
- **Format**: MP4 (H.264) and WebM for browser compatibility
- **Content**: Should show medical personnel and blood donation scenes

### 4. Video Optimization Tips

- Use tools like HandBrake or FFmpeg to compress the video
- Remove audio track (not needed for background video)
- Consider using a poster image for faster initial loading

### 5. Fallback Handling

The component includes:

- ✅ Fallback image if video fails to load
- ✅ Multiple video format support
- ✅ Proper accessibility attributes
- ✅ Mobile-friendly autoplay settings

### 6. Testing

After adding the video files:

1. Test on different browsers (Chrome, Firefox, Safari)
2. Test on mobile devices
3. Check loading performance
4. Verify the video loops smoothly

## Current Implementation Features:

- **Auto-play**: Video starts automatically (muted for browser compliance)
- **Loop**: Video repeats continuously
- **Responsive**: Scales properly on all screen sizes
- **Performance**: Optimized with proper z-indexing and transforms
- **Accessibility**: Proper ARIA labels and fallback content
- **Parallax Effect**: Subtle movement on scroll for visual appeal

## Alternative: If Video Doesn't Work

If you encounter issues with the video, the component will automatically fall back to the high-quality medical image that's already configured.
