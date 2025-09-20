# xbe.sh v2.0.0 Release Files

This directory contains the downloadable files for xbe.sh v2.0.0.

## Directory Structure

```
releases/latest/
├── windows/
│   ├── xbe.sh-v2.0.0-x64.exe      # Windows x64 installer
│   └── xbe.sh-v2.0.0-arm64.exe    # Windows ARM64 installer
├── macos/
│   ├── xbe.sh-v2.0.0-universal.dmg        # macOS Universal installer
│   └── xbe.sh-v2.0.0-apple-silicon.dmg    # macOS Apple Silicon installer
└── linux/
    ├── xbe.sh-v2.0.0.deb           # Linux Debian package
    └── xbe.sh-v2.0.0.rpm           # Linux RPM package
```

## File Naming Convention

- **Version**: v2.0.0
- **Windows**: `xbe.sh-v{version}-{arch}.exe`
- **macOS**: `xbe.sh-v{version}-{variant}.dmg`
- **Linux**: `xbe.sh-v{version}.{package-type}`

## How to Update

1. Replace the placeholder files with your actual compiled binaries
2. Maintain the same file names to ensure download links continue working
3. Update version numbers in both file names and the website when releasing new versions

## Download URLs

The website automatically generates download links using this structure:
- Windows x64: `/releases/latest/windows/xbe.sh-v2.0.0-x64.exe`
- Windows ARM64: `/releases/latest/windows/xbe.sh-v2.0.0-arm64.exe`
- macOS Universal: `/releases/latest/macos/xbe.sh-v2.0.0-universal.dmg`
- macOS Apple Silicon: `/releases/latest/macos/xbe.sh-v2.0.0-apple-silicon.dmg`
- Linux Debian: `/releases/latest/linux/xbe.sh-v2.0.0.deb`
- Linux RPM: `/releases/latest/linux/xbe.sh-v2.0.0.rpm`
