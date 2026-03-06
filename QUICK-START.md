# MathMart Arena - Quick Start Deployment Guide

## Fastest Path to APK: GitHub Actions Method

This guide provides the quickest route to building your MathMart Arena Android APK using GitHub Actions automation.

### Step 1: Create GitHub Repository (5 minutes)

Visit github.com and log in to your account. Click the "New repository" button in the top-right corner. Name your repository "mathmart-arena-mobile" or your preferred identifier. Set visibility to "Public" to use GitHub Actions free tier. Check "Add a README file" to initialize the repository. Click "Create repository" to finalize setup.

### Step 2: Upload Project Files (10 minutes)

Download the mathmart-arena-deploy.zip file you received. Extract all contents to a folder on your computer. In your GitHub repository, click "Add file" then "Upload files." Drag and drop ALL files and folders from the extracted mathmart-arena-deploy folder. Ensure the .github folder with workflows subfolder uploads correctly. Commit the files with message "Initial project setup."

### Step 3: Trigger First Build (2 minutes)

Navigate to the "Actions" tab in your GitHub repository. You should see the "Build Android APK" workflow listed. Click on the workflow name to view details. Click "Run workflow" dropdown button on the right side. Select the "main" branch from the dropdown. Click the green "Run workflow" button to initiate build.

### Step 4: Monitor Build Progress (15-20 minutes)

The workflow execution appears in the Actions tab with a yellow status indicator showing in-progress state. Click the workflow run to view detailed progress through each build step. The entire build process typically completes in fifteen to twenty minutes for first-time builds. Subsequent builds execute faster due to caching mechanisms. Green checkmarks indicate successful step completion. Red X marks indicate failures requiring troubleshooting.

### Step 5: Download Your APK (1 minute)

Once build completes successfully with all green checkmarks, scroll to the bottom of the workflow run page. Locate the "Artifacts" section containing your compiled APK. Click "mathmart-arena-apk" to download a ZIP file containing your APK. Extract the ZIP file to access mathmart-arena-debug.apk. This APK is ready for installation and testing on Android devices.

## Installing APK on Your Mobile Device

### Method 1: Direct USB Transfer

Connect your Android device to your computer using USB cable. Ensure USB file transfer mode is enabled on your device. Copy the mathmart-arena-debug.apk file to your device's Downloads folder. On your device, navigate to Settings → Security → Install unknown apps. Enable installation permission for your file manager application. Open your file manager, navigate to Downloads, and tap the APK file. Follow installation prompts to complete the process.

### Method 2: Cloud Upload and Download

Upload mathmart-arena-debug.apk to Google Drive, Dropbox, or similar cloud storage. On your mobile device, open the cloud storage app and navigate to the uploaded APK. Tap the file to begin download. Once download completes, tap the notification or open Downloads folder. Enable installation from unknown sources if prompted. Tap the APK file and follow installation prompts.

## Automatic Future Builds

Your GitHub Actions workflow automatically triggers new builds whenever you push changes to the main branch. To update your application, edit index.html or other project files directly in GitHub's web interface or clone the repository locally using Git. Commit and push your changes to the main branch. GitHub Actions automatically initiates a new build within seconds. Monitor build progress in the Actions tab. Download the updated APK from the latest successful workflow run.

## Testing Your Application

After installation completes successfully, launch MathMart Arena from your app drawer. Create a test user account to verify authentication functionality. Attempt basic challenge mode to ensure question generation works correctly. Test hint system by purchasing and using hints during challenges. Verify leaderboard loads and displays properly. Switch between light, dark, and night themes to ensure proper rendering. Check that profile editing and logout functions operate as expected.

## Common Issues and Quick Fixes

### Build Fails During Icon Generation

If your workflow fails at the icon generation step, the issue typically stems from ImageMagick availability in the GitHub Actions runner. Edit the .github/workflows/build-apk.yml file and add "sudo apt-get install imagemagick" before the icon generation commands. Alternatively, upload pre-generated PNG icon files to avoid runtime conversion requirements.

### APK Won't Install on Device

Installation failures usually occur because the APK lacks proper signing for release distribution. The automated workflow produces debug APKs suitable for testing but not Play Store distribution. For release distribution, generate a keystore file locally and configure the workflow to sign APKs using GitHub Secrets. Another common cause involves Android security settings blocking installation from unknown sources, which you can enable in device security settings.

### Application Crashes on Startup

Startup crashes typically indicate JavaScript errors in your index.html file. Connect your device via USB with USB debugging enabled. Open Chrome browser on your computer and navigate to chrome://inspect. Select your device and inspect the WebView running MathMart Arena. Examine the console output for error messages that identify the problematic code section. Common issues include Firebase configuration errors, missing script dependencies, or syntax errors in JavaScript code.

## Next Steps

Once basic deployment succeeds and your application functions correctly, consider these enhancements. Create proper keystore files for signing release APKs suitable for Play Store submission. Configure Firebase connection with your actual project credentials rather than demo configuration. Customize branding elements including app name, icon, and color scheme to match your brand identity. Implement analytics tracking to monitor user engagement and identify popular features. Prepare Play Store listing materials including screenshots, feature graphics, and promotional text.

## Support Resources

If you encounter issues not covered in this quick-start guide, refer to the comprehensive README.md file included in your deployment package. Visit the Cordova documentation at cordova.apache.org for platform-specific troubleshooting. Consult GitHub Actions documentation at docs.github.com/actions for workflow configuration assistance. Create issues in your GitHub repository to track problems and solutions for future reference.

## Success Checklist

Verify you have completed all critical steps before considering deployment successful. GitHub repository created and all project files uploaded correctly. GitHub Actions workflow executed successfully with green completion status. APK file downloaded and available on your computer. APK installed successfully on Android test device. Application launches without crashes or immediate errors. Core functionality including challenges, hints, leaderboards, and profile management operates as expected. Theme switching works properly across all three color schemes.

Congratulations on successfully deploying MathMart Arena as an Android application! You now have a foundation for iterative development, testing, and eventual public distribution through Google Play Store or direct channels.

---

**Agames Development Team**
MathMart Arena v2.0
