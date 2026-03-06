# MathMart Arena - Logo Usage Guide

## Logo Package Overview

This package contains three professional logo variations designed for the MathMart Arena application by Agames. Each version has been optimized for specific use cases across digital platforms, print materials, and application interfaces.

## Logo Variations

### 1. Full Logo (mathmart-arena-logo.svg)
**Dimensions:** 800 x 800 pixels
**Format:** Circular design with complete branding

**Best Used For:**
- Social media profile pictures
- Website favicons (when scaled appropriately)
- Marketing materials requiring circular logo placement
- App store promotional graphics
- Presentation slides and documents
- Printed materials such as flyers and posters

**Design Elements:**
- Primary gradient background using brand colors (indigo to purple)
- White shield containing mathematical symbols (plus, multiplication, division, equals)
- Golden trophy icon representing competitive gaming element
- Complete text treatment with "MathMart" and "ARENA"
- Tagline "COMPETE • LEARN • EXCEL"
- Decorative stars providing visual balance

### 2. App Icon (mathmart-arena-icon.svg)
**Dimensions:** 512 x 512 pixels
**Format:** Square with rounded corners (110px radius)

**Best Used For:**
- Android app icon (Play Store and device home screen)
- iOS app icon (App Store and device home screen)
- Progressive Web App (PWA) icon
- Browser tab favicon
- Push notification icon
- Splash screen icon element

**Design Elements:**
- Rounded square background optimized for modern mobile operating systems
- Simplified shield design for clarity at small sizes
- Mathematical symbols arranged in balanced grid formation
- Prominent trophy icon as central focus
- "MATH" text badge providing immediate brand recognition
- Corner decorative elements adding polish without cluttering

**Icon Size Requirements:**
For Android applications, you will need to generate multiple icon sizes from this master file. The primary sizes required include 48x48, 72x72, 96x96, 144x144, 192x192, and 512x512 pixels. Most online icon generators or build tools can create these variations automatically from the 512x512 source file.

For iOS applications, generate sizes including 20x20, 29x29, 40x40, 60x60, 76x76, 83.5x83.5, and 1024x1024 pixels at various scale factors (1x, 2x, 3x). The 1024x1024 version serves as your App Store marketing icon.

### 3. Horizontal Banner (mathmart-arena-banner.svg)
**Dimensions:** 1200 x 400 pixels
**Format:** Wide horizontal layout

**Best Used For:**
- Website headers and navigation bars
- Email signatures and newsletters
- YouTube channel banners
- LinkedIn company page headers
- Application splash screens
- Digital advertisements and banner ads
- Presentation title slides
- GitHub repository headers

**Design Elements:**
- Full gradient background spanning entire width
- Icon section on left providing visual anchor
- Typography section on right with complete brand messaging
- Tagline "Competitive Math Learning Platform" for clarity
- Feature highlights showcasing core value propositions
- Balanced composition optimized for wide displays

## Color Specifications

### Primary Brand Colors

**Indigo (Primary):** #6366f1
- RGB: 99, 102, 241
- Used for primary gradient start, mathematical symbols, trust elements

**Purple (Secondary):** #8b5cf6
- RGB: 139, 92, 246
- Used for primary gradient end, creating depth and modern aesthetic

**Gold (Accent):** #f59e0b
- RGB: 245, 158, 11
- Used for trophy elements, highlighting competitive gaming aspect

**Dark Gold (Accent Shadow):** #d97706
- RGB: 217, 119, 6
- Used for accent gradient depth

**Success Green:** #10b981
- RGB: 16, 185, 129
- Used for division symbols and success indicators

**White:** #ffffff
- RGB: 255, 255, 255
- Used for shield backgrounds, text, and contrast elements

### Background Usage

The logos are designed to work optimally on the following background types:

**Primary Backgrounds:**
- Transparent backgrounds (recommended for most applications)
- White or very light backgrounds (maintains full color vibrancy)
- Dark backgrounds (provides excellent contrast for shield and text)

**Avoid:**
- Busy photographic backgrounds that obscure logo details
- Colors similar to the primary gradient (indigo, purple) which reduce contrast
- Extremely bright backgrounds that might require color adjustments

## File Format Guidelines

All logos are provided in SVG (Scalable Vector Graphics) format, offering several advantages:

**Scalability:** SVG files can be scaled to any size without loss of quality, making them perfect for responsive web design and various print dimensions.

**Small File Size:** Vector graphics maintain smaller file sizes compared to raster formats at equivalent quality levels.

**Editability:** SVG files can be edited in vector graphics software such as Adobe Illustrator, Inkscape, or Figma if minor adjustments are needed.

**Web Optimization:** Modern browsers natively support SVG rendering with excellent performance characteristics.

### Converting to Other Formats

For applications requiring raster formats, convert SVG files using the following guidelines:

**PNG Format:**
- Use for situations requiring transparency support
- Export at 2x or 3x resolution for high-DPI displays
- Recommended for app icons, favicons, and web graphics

**JPG Format:**
- Use when transparency is not required and file size is critical
- Not recommended for logos due to lack of transparency support
- Quality setting should be 90 or above to prevent compression artifacts

**PDF Format:**
- Ideal for print materials and professional design workflows
- Maintains vector quality for scaling
- Compatible with professional printing services

## Minimum Size Requirements

To maintain legibility and professional appearance, observe these minimum size guidelines:

**Full Logo:**
- Digital displays: Minimum 200 x 200 pixels
- Print materials: Minimum 2 inches diameter

**App Icon:**
- Never display smaller than its intended platform requirements
- Avoid scaling below 48 x 48 pixels on any platform

**Horizontal Banner:**
- Digital displays: Minimum 600 x 200 pixels
- Print materials: Minimum 6 inches width

## Clear Space and Placement

Maintain adequate clear space around all logo variations to prevent visual crowding and ensure maximum impact:

**Clear Space Rule:**
Maintain a minimum clear space equal to the height of the letter "M" in "MathMart" on all sides of the logo. No text, graphics, or other elements should intrude into this protected zone.

**Alignment:**
When placing logos in layouts, align to established grid systems or visual anchors rather than floating in arbitrary positions.

## Usage Restrictions

To maintain brand integrity and professional appearance, avoid the following practices:

**Do Not:**
- Rotate logos at angles other than 0, 90, 180, or 270 degrees
- Stretch or distort proportions in any direction
- Change the gradient colors or replace with solid colors
- Add effects such as drop shadows, outer glows, or bevels
- Place logos on backgrounds that reduce legibility
- Recreate or redraw logos from memory
- Separate logo elements and use them independently
- Use outdated logo versions if updates are provided

**Color Modifications:**
If you need to use the logo in single-color applications such as embroidery or certain printing processes, create a simplified version using solid white on dark backgrounds or solid dark (matching the primary indigo) on light backgrounds. Maintain all proportions and remove gradient elements cleanly.

## Application-Specific Guidelines

### Mobile Applications

For Android APK builds:
1. Use mathmart-arena-icon.svg as your source file
2. Generate required density variations (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)
3. Place icons in appropriate drawable folders
4. Update AndroidManifest.xml to reference icon resources
5. Test appearance on various device sizes and Android versions

For Progressive Web Apps:
1. Include manifest.json with icon references
2. Provide multiple icon sizes (72, 96, 128, 144, 152, 192, 384, 512 pixels)
3. Set appropriate background color matching brand gradient
4. Define display mode and theme color

### Website Integration

Add favicon variations to your HTML head section:
```html
<link rel="icon" type="image/svg+xml" href="mathmart-arena-icon.svg">
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
```

Use the horizontal banner for website headers, ensuring responsive behavior across mobile, tablet, and desktop viewports.

### Social Media Specifications

**Facebook:**
- Profile Picture: Use full logo, 180 x 180 pixels minimum
- Cover Photo: Use horizontal banner, 820 x 312 pixels

**Twitter:**
- Profile Picture: Use app icon, 400 x 400 pixels
- Header Photo: Use horizontal banner, 1500 x 500 pixels

**LinkedIn:**
- Profile Picture: Use full logo or app icon, 300 x 300 pixels
- Cover Photo: Use horizontal banner, 1584 x 396 pixels

**Instagram:**
- Profile Picture: Use app icon, 320 x 320 pixels

**YouTube:**
- Profile Picture: Use full logo or app icon, 800 x 800 pixels
- Channel Art: Use horizontal banner, 2560 x 1440 pixels

## Print Specifications

When preparing logos for print production:

**Resolution:** Export raster versions at minimum 300 DPI at final print size

**Color Mode:** Convert to CMYK for offset printing, maintain RGB for digital printing

**File Format:** Provide both PDF (vector) and high-resolution PNG versions

**Bleed:** Include 0.125 inch bleed when logos extend to page edges

**Proofing:** Request physical or digital proofs before final production runs

## Brand Consistency

Consistent logo usage across all platforms strengthens brand recognition and professional perception. When creating new materials:

1. Always use provided logo files rather than recreating from memory
2. Maintain color accuracy by using specified hex values
3. Follow size and spacing guidelines for each application
4. Review placement in context before finalizing designs
5. Archive approved materials for future reference

## Contact and Support

For questions about logo usage, custom variations, or special applications not covered in this guide, contact the Agames design team. Maintain brand standards while accommodating legitimate business needs through appropriate consultation channels.

## Version History

**Version 1.0** - Initial release
- Created full circular logo with complete branding
- Designed square app icon optimized for mobile platforms
- Developed horizontal banner for web and digital applications
- Established comprehensive usage guidelines

---

**Agames Brand Standards**
MathMart Arena Logo Package
© 2024 Agames. All rights reserved.
