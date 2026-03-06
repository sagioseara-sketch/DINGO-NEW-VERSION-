# MathMart Arena - Mobile Deployment Guide

## Overview

MathMart Arena is a competitive mathematics learning platform designed for banking and competitive examination preparation. This guide provides comprehensive instructions for deploying the application as an Android APK using GitHub Actions automation.

## Project Structure

```
mathmart-arena/
├── .github/
│   └── workflows/
│       └── build-apk.yml          # GitHub Actions workflow for APK building
├── icons/
│   ├── mathmart-arena-logo.svg    # Full circular logo
│   ├── mathmart-arena-icon.svg    # Square app icon (source)
│   └── mathmart-arena-banner.svg  # Horizontal banner
├── index.html                      # Main application file
├── manifest.json                   # PWA manifest configuration
├── config.xml                      # Cordova configuration
├── package.json                    # npm dependencies
├── LOGO-USAGE-GUIDE.md            # Logo usage documentation
└── README.md                       # This file
```

## Prerequisites

Before deploying the application, ensure you have the following:

### Required Accounts
- GitHub account for repository hosting and Actions automation
- Google Play Console account (for Play Store distribution)

### Development Tools (for local building)
- Node.js version 14 or higher
- Java Development Kit version 11
- Android SDK
- Cordova CLI installed globally

## GitHub Actions Automated Deployment

The recommended deployment method utilizes GitHub Actions for automated APK building whenever you push changes to your repository.

### Initial Setup

Navigate to GitHub and create a new repository named "mathmart-arena-mobile" or your preferred identifier. Set the repository visibility to public to utilize GitHub Actions free tier without additional configuration. Initialize the repository with a README file to establish the main branch structure.

Upload all project files to the repository root directory. The critical files include index.html containing your application code, config.xml defining Cordova build parameters, manifest.json specifying Progressive Web App properties, and the icons directory containing all logo variations. Create the .github/workflows directory structure and upload the build-apk.yml workflow configuration file.

### Workflow Activation

The GitHub Actions workflow automatically triggers under three conditions. First, whenever you push commits to the main or master branch, the workflow initiates a new build process. Second, pull requests targeting these branches trigger build verification to ensure proposed changes compile successfully. Third, you can manually trigger builds through the GitHub Actions interface using the workflow_dispatch event, which proves useful for testing or creating builds without pushing new commits.

### Build Process

The automated workflow executes a comprehensive build sequence. It checks out your repository code to access all application files. The workflow configures Node.js version 18 and Java JDK version 11, which are required dependencies for Cordova compilation. Cordova is installed globally through npm, and a new Cordova project structure is created with your application identifier and name as specified in config.xml.

Your application files are copied into the Cordova project www directory. The workflow attempts to generate app icons at multiple resolutions from the SVG source file using ImageMagick. If this conversion fails, the workflow continues using placeholder icons, though you should verify icon generation completed successfully. The Android platform is added to the Cordova project, and the APK compilation process executes using the release build configuration.

### Accessing Built APK

After successful workflow completion, access your APK through two methods. The workflow uploads the compiled APK as a GitHub Actions artifact, which you can download from the Actions tab by selecting the completed workflow run and downloading the artifact named "mathmart-arena-apk." For main branch pushes, the workflow automatically creates a GitHub release with an incrementing version number, attaching the APK file to the release for convenient distribution and download tracking.

## Manual Local Building

If you prefer building the APK locally on your development machine, follow these detailed instructions.

### Environment Setup

Install Node.js from the official website, selecting the Long Term Support version for maximum stability. Download and install Java Development Kit version 11 from AdoptOpenJDK or Oracle, ensuring you configure the JAVA_HOME environment variable correctly. Install Android Studio or download the Android SDK command-line tools separately. Configure the ANDROID_HOME environment variable to point to your SDK installation directory. Install Cordova globally using the npm install command with the global flag.

### Project Creation

Open your terminal application and navigate to your desired project directory. Create a new Cordova project using the cordova create command, specifying the application identifier matching your config.xml file. Navigate into the created project directory. Add the Android platform using the cordova platform add android command. Copy your index.html file into the www directory, replacing the default Cordova template. Copy config.xml to the project root directory, overwriting the default configuration. Copy manifest.json into the www directory for Progressive Web App support.

### Icon Generation

Install ImageMagick if not already present on your system, as it provides reliable SVG to PNG conversion capabilities. Create the necessary icon directories within your Cordova project structure. Execute conversion commands for each required icon size, ensuring proper background transparency preservation. Verify all icons generated successfully by examining the res/icon/android directory.

### APK Compilation

Connect your Android device via USB with USB debugging enabled, or launch an Android emulator through Android Studio. Execute the cordova build android command to compile an unsigned debug APK suitable for testing. For release distribution, execute cordova build android with the release flag, then sign the APK using your keystore file and the jarsigner utility.

## APK Signing for Release

Release APKs must be cryptographically signed to prove authenticity and enable installation on devices outside development environments.

### Keystore Creation

Generate a keystore file using the Java keytool utility. Execute the keytool command specifying genkey as the operation type, -v for verbose output, and -keystore to define your keystore filename. Choose RSA as the key algorithm with a 2048-bit key size. Set the validity period to 10000 days to cover the application's entire lifecycle. Use an alias that clearly identifies your application. Provide your organization details accurately as they appear in signed APK metadata. Choose a strong password for both the keystore and key, recording these credentials securely as loss prevents future updates.

### APK Signing Process

Locate your unsigned release APK in the platforms/android/app/build/outputs/apk/release directory. Use jarsigner to apply your keystore signature to the APK file. Align the signed APK using zipalign to optimize file structure for Android runtime performance. Verify signature success using jarsigner with the verify flag. The signed, aligned APK is ready for distribution through Google Play Store or direct download channels.

## Testing and Validation

Before distributing your APK to users, conduct comprehensive testing across multiple dimensions.

### Functional Testing

Install the APK on physical Android devices representing your target user base, testing various screen sizes and Android versions. Verify all application features function correctly including user authentication, challenge gameplay, hint system, leaderboard synchronization, and theme switching. Test offline functionality to ensure Firebase connectivity gracefully handles network interruptions. Validate coin transactions, item purchases, and achievement unlocking mechanisms.

### Performance Testing

Monitor application responsiveness during intensive operations such as rapid question generation and leaderboard loading. Measure memory usage to prevent excessive consumption that might cause crashes on lower-end devices. Test battery impact during extended play sessions to ensure reasonable power efficiency. Verify smooth theme transitions without visual artifacts or rendering delays.

### Compatibility Testing

Test on Android versions ranging from your minimum SDK version 22 (Android 5.1) through the latest stable release. Verify compatibility across different device manufacturers including Samsung, Google Pixel, OnePlus, and Xiaomi, as they may apply custom Android modifications. Test with various screen sizes and aspect ratios including standard 16:9, tall 18:9 and 19:9, and foldable device configurations.

## Distribution Channels

Once testing validation completes successfully, choose your distribution approach based on target audience and business requirements.

### Google Play Store

Creating a Google Play Console developer account requires a one-time registration fee of twenty-five dollars. Complete your developer profile with accurate business information and contact details. Create a new application entry and upload your signed APK through the Play Console interface. Configure store listing details including application title, description, screenshots, feature graphic, and categorization. Define content rating through the questionnaire system. Set pricing and distribution territories. Submit for review, which typically completes within a few business days for initial submissions.

### Direct Distribution

Host the APK file on your web server or cloud storage service such as Google Drive or Dropbox. Share the download link through your website, email newsletters, or social media channels. Provide clear installation instructions informing users they must enable "Install from Unknown Sources" in Android security settings before installation. Consider implementing version checking mechanisms that notify users when updates become available. Maintain a changelog documenting features and fixes in each release version.

## Troubleshooting Common Issues

During the build and deployment process, you may encounter several common issues with straightforward solutions.

### Build Failures

If Cordova platform addition fails, verify your ANDROID_HOME environment variable points correctly to your SDK installation directory and that you have installed Android platform tools. Icon generation failures typically indicate ImageMagick installation problems or incorrect SVG file paths. APK compilation errors often stem from Gradle version incompatibilities, which you can resolve by updating Cordova to the latest version or modifying Gradle configuration files.

### Runtime Issues

Application crashes on startup frequently result from JavaScript errors, which you can diagnose using Chrome DevTools remote debugging. Connect your device via USB, enable USB debugging, navigate to chrome://inspect in Chrome desktop, and examine console output for error messages. Firebase connection failures suggest configuration problems in your Firebase project setup or incorrect API keys. Theme switching problems typically indicate CSS variable inconsistencies that require examination of your stylesheet definitions.

### Distribution Problems

Play Store rejection commonly occurs due to missing or incorrect metadata, inappropriate content rating, insufficient testing on diverse device configurations, or policy violations. Direct distribution installation failures typically result from unsigned APKs, corrupted downloads requiring re-download, or security settings preventing installation from unknown sources.

## Maintenance and Updates

Establishing a sustainable maintenance workflow ensures your application remains current, secure, and valuable to users.

### Version Management

Increment version codes with each release to ensure proper update delivery. Use semantic versioning for version names following major.minor.patch format. Tag releases in Git using descriptive version identifiers that match your versioning scheme. Maintain comprehensive changelogs documenting features, improvements, and bug fixes for each release.

### Monitoring and Analytics

Integrate Firebase Analytics to track user engagement metrics including daily active users, session duration, and feature usage patterns. Monitor crash reports through Firebase Crashlytics or Play Console crash reporting to identify and prioritize bug fixes. Track user reviews and ratings on Play Store, responding professionally to feedback and addressing concerns in subsequent updates. Analyze user retention metrics to evaluate feature effectiveness and guide development priorities.

### Security Updates

Regularly update Cordova and plugin versions to incorporate security patches and performance improvements. Review and update Firebase security rules to maintain appropriate data access controls. Conduct periodic security audits examining authentication flows, data storage practices, and third-party dependency vulnerabilities. Monitor security bulletins for Android platform advisories that might affect your application.

## Support and Resources

For additional assistance beyond this documentation, leverage these valuable resources:

### Official Documentation
- Cordova Documentation: https://cordova.apache.org/docs/en/latest/
- Firebase Documentation: https://firebase.google.com/docs
- Android Developer Guide: https://developer.android.com/guide
- GitHub Actions Documentation: https://docs.github.com/en/actions

### Community Support
- Stack Overflow for technical questions and troubleshooting
- Cordova GitHub Issues for platform-specific problems
- Firebase Community Slack for real-time assistance
- Android Development Discord communities

### Professional Services
- Contact Agames technical support for application-specific issues
- Engage Android development consultants for complex customization requirements
- Utilize Google Play Support for store policy clarifications

## License and Copyright

MathMart Arena © 2024 Agames. All rights reserved.

This application and associated documentation are proprietary to Agames. Unauthorized reproduction, modification, or distribution is prohibited without explicit written permission from Agames.

## Contact Information

For technical support, feature requests, or business inquiries:
- Email: support@agames.com
- Website: https://agames.com
- GitHub Issues: Create issues in the repository for bug reports and enhancement requests

---

Version 2.0.0 | Last Updated: 2024
