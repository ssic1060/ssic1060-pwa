SSIC1060 PWA starter package

Files:
- index.html: installable app shell that opens the existing Apps Script portal in an iframe
- manifest.json: app name, display mode and icons
- service-worker.js: caches only the shell, not the school portal or private student data
- icons/: app icons

Important:
1. This package must be hosted on an HTTPS static website (for example, GitHub Pages).
2. Internet is required for the portal. This does not make Google Apps Script work offline.
3. Test the hosted page on Android Chrome. If Google sign-in or Apps Script blocks embedding in the hosted shell, use the portal URL directly in Chrome and consider an alternate deployment; do not change the current working portal without testing.
4. Keep admin credentials private and change any default/hard-coded password in the existing Apps Script code before broader use.
