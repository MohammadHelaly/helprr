# Helprr

A mobile app designed to support blind and deaf people, developed using React Native and Expo.

## Project Status

This project is being rebuilt on a fresh Expo SDK 56 branch. The current branch is a modernization pass, not a production release.

There is no deployment, app store release, or hosted production environment yet. Development uses Expo development builds because speech recognition depends on native modules. Some device-dependent flows may be incomplete until tested on physical Android and iOS devices.

Camera object detection is intentionally paused in this branch. The See route remains in the app shell, but the object-detection implementation has not been modernized yet.

## Tech Stack

- Expo SDK 56, React Native 0.85, and React 19 for the mobile application UI.
- Expo Router with file-based routing under `src/app`.
- TypeScript with Expo's base TypeScript configuration.
- NativeWind and Tailwind CSS for styling.
- Expo SQLite and Drizzle ORM for local chat persistence.
- Expo Speech Recognition for speech-to-text.
- Expo Speech for text-to-speech playback.
- Expo development builds for native-module-dependent flows.

## Project Structure

```text
|-- assets/                         # Expo app icons and image assets
|-- src/
|   |-- app/                        # Expo Router route tree
|   |   |-- (tabs)/                 # Home, Listen, See, Settings tabs
|   |   |   |-- listen/             # Conversation list and conversation detail routes
|   |   |   |-- settings/           # Settings stack routes
|   |   |   `-- see.tsx             # Camera placeholder route
|   |   `-- _layout.tsx             # Root app layout and database migration bootstrap
|   |-- components/                 # Shared kebab-case UI and feature components
|   |-- constants/                  # App constants that are not route or component state
|   |-- hooks/                      # React hooks for chat and speech features
|   |-- lib/                        # Database, repositories, and non-React utilities
|   `-- global.css                  # Tailwind/NativeWind global CSS
|-- app.json                        # Expo app configuration and native plugin settings
|-- drizzle.config.ts               # Drizzle migration configuration
|-- metro.config.js                 # Expo Metro config with NativeWind
|-- tailwind.config.js              # Tailwind config
|-- package.json
|-- tsconfig.json
`-- LICENSE
```

## Prerequisites

- Node.js 18 or newer.
- npm. The repository includes `package-lock.json`, so npm is the expected package manager.
- Expo CLI through `npx expo`.
- Android Studio and the Android SDK for Android development builds.
- Xcode on macOS for iOS development builds.
- A physical device is recommended because speech recognition and speech playback should be tested on-device.

## Environment Variables

No required environment variables are currently defined in this repository.

The Expo app configuration lives in `app.json`. The app currently does not include a backend API, remote deployment target, or checked-in `.env` template.

## Runbook

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

Start with a development build:

```bash
npx expo start --dev-client
```

Run the Android target:

```bash
npm run android
```

Run the iOS target:

```bash
npm run ios
```

Start the web target:

```bash
npm run web
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run lint:

```bash
npm run lint
```

Generate Drizzle migrations:

```bash
npm run db:generate
```

Regenerate open-source dependency notices:

```bash
npm run legal:generate
```

Check that generated open-source dependency notices are up to date:

```bash
npm run legal:check
```

## Deployment

There is no deployment yet.

The app has not been published to the App Store, Google Play, Expo Application Services channels, or any other production release target. Future deployment work needs production Expo/EAS configuration, app signing, release profiles, store assets, privacy disclosures for microphone and speech recognition usage, and full device testing.

## Legal Release Readiness

This section is an engineering checklist, not legal advice. Before publishing Helprr to any app store, the final policies, store disclosures, disclaimers, and release text should be reviewed by a qualified lawyer for every country where the app will be distributed.

### Required ownership and contact details

- Decide the legal publisher identity: individual name, company name, address country, support email, privacy email, and legal email.
- Replace all placeholder legal contact values in `src/data/legal/legal-document-data.ts`.
- Create a public support/contact destination for store listings, such as a support page or monitored support email.
- Decide whether the app is published by an individual or legal entity and make sure that matches Apple Developer, Google Play Console, website, privacy policy, and terms.

### Public legal website

- Publish a public Privacy Policy URL. Apple App Store Connect and Google Play require privacy disclosures to be available outside the app.
- Publish public Terms of Use, or use and link Apple's standard EULA for iOS if that is the chosen approach.
- Publish support/contact information.
- If accounts, cloud sync, or server-side storage are added later, publish data deletion instructions and any required account deletion flow.
- Keep the website policies and in-app Legal pages synchronized. The store metadata, website, and app must describe the same data practices.

### In-app legal pages

- Keep `Settings -> Legal -> Privacy Policy` available in the app.
- Keep `Settings -> Legal -> Terms of Use` available in the app.
- Keep `Settings -> Legal -> Safety Notice` available in the app because Helprr is an accessibility-support app and should clearly state its limitations.
- Keep `Settings -> Legal -> License` available for Helprr's MIT license.
- Keep `Settings -> Legal -> Acknowledgements` available for third-party open-source notices.
- Remove internal-only checklists, such as store disclosure notes, from production user-facing navigation unless intentionally shipping them.

### Open-source licensing and attribution

- Keep `LICENSE` and the `license` field in `package.json` accurate for Helprr's own source code.
- Run `npm run legal:generate` whenever dependencies change.
- Commit `src/data/legal/generated/open-source-notice-data.ts` after dependency changes.
- Run `npm run legal:check` in CI after `npm ci` so pull requests fail when generated notices are stale.
- Review generated notices for `UNKNOWN`, GPL-family, AGPL, LGPL, SSPL, or custom licenses before release.
- Confirm third-party assets, icons, fonts, generated images, and app store screenshots have documented usage rights. Source-code dependency notices do not cover every visual or content asset.
- If patches are shipped through `patch-package`, review whether any patch changes affect third-party license obligations or notice text.

### Privacy and data mapping

- Create a data inventory for every feature: typed text, speech recognition, microphone input, speech output, local conversation history, language settings, camera access, crash logs, analytics, device identifiers, and diagnostics.
- Confirm whether speech recognition audio or transcripts leave the device on iOS and Android during real physical-device testing.
- Confirm whether text-to-speech processing is fully on-device or uses any OS/provider network service.
- Confirm that conversations stored with Expo SQLite remain local, and document where deletion happens.
- Add an in-app way to delete stored conversations before release if conversation history is shipped.
- If analytics, crash reporting, AI APIs, authentication, cloud sync, ads, payments, or object detection are added, update the privacy policy, store disclosures, and consent flows before release.
- Document whether any data is encrypted in transit, encrypted at rest, shared with third parties, linked to the user, used for tracking, or retained by a provider.

### App permissions and consent

- Verify iOS and Android permission prompts for microphone, speech recognition, and camera on physical devices.
- Make permission purpose strings specific, accurate, and consistent with real behavior in `app.json`.
- Do not request camera, microphone, or speech recognition permissions before the user reaches a feature that needs them.
- If any sensitive data is collected or shared beyond what users reasonably expect, add prominent in-app disclosure and consent before collection.
- Confirm the app remains usable or clearly explains limitations when permissions are denied.

### Accessibility, safety, and product claims

- Review all app store descriptions, screenshots, onboarding, and in-app copy for claims about helping blind, deaf, or disabled users.
- Avoid implying that Helprr is a medical device, emergency service, safety system, navigation aid, or professional substitute unless the app is legally reviewed and certified for that use.
- Keep the Safety Notice visible and plain-language: speech recognition, speech output, camera features, and future object detection can be inaccurate, delayed, or unavailable.
- Test with accessibility settings enabled, including screen readers, larger text, reduced motion, and platform contrast settings.
- If the app targets children or families, complete a separate child privacy and store policy review before release.

### Apple App Store checklist

- Add a valid Privacy Policy URL in App Store Connect.
- Complete App Privacy details for all data types collected by Helprr and any third-party SDKs.
- Ensure App Privacy answers match the public Privacy Policy and the app's actual behavior.
- Decide whether to use Apple's standard EULA or custom terms, then configure links accordingly.
- Verify app metadata, screenshots, subtitle, description, keywords, and support URL do not overstate accessibility, safety, medical, or emergency capabilities.
- Confirm Expo SDK 56's iOS/Xcode requirements and current Apple submission requirements before building for release.

### Google Play checklist

- Add a valid Privacy Policy URL in Google Play Console.
- Complete the Data safety form for Helprr and all third-party SDKs.
- Ensure Data safety answers match the public Privacy Policy and the app's actual behavior.
- Complete content rating, target audience, permissions, and app access declarations.
- If sensitive data collection or sharing is added, implement Google Play compliant prominent disclosure and consent.
- Confirm Expo SDK 56's Android target SDK support and current Google Play submission requirements before building for release.

### Release governance

- Add `npm run legal:check`, `npm run typecheck`, and `npm run lint` to CI.
- Require legal checklist review before each store submission, not only before the first release.
- Re-run legal review whenever adding a new SDK, permission, backend service, AI provider, analytics tool, crash reporter, payment flow, or data export path.
- Keep dated copies of submitted Privacy Policy, Terms of Use, App Privacy answers, Google Play Data safety answers, and release notes for audit history.

Reference policies and docs:

- Expo SDK 56 reference: https://docs.expo.dev/versions/v56.0.0/
- Apple App Privacy Details: https://developer.apple.com/app-store/app-privacy-details/
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Google Play User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play Data safety form guidance: https://support.google.com/googleplay/android-developer/answer/10787469

## Development Notes

- Voice recording uses Expo Speech Recognition and supports the current English/Arabic language toggle. The alnguage for conversations is separate from the UI language (which is not yet implemented).
- The See flow is currently a placeholder; camera object detection is out of scope for this branch.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
