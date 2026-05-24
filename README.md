# Helprr

A mobile app designed to support blind and deaf people, developed using React Native and Expo.

## Project Status

This project is being rebuilt on a fresh Expo SDK 56 branch. The current branch is a modernization pass, not a production release.

There is no deployment, app store release, or hosted production environment yet. Development uses Expo development builds because speech recognition depends on native modules. Some device-dependent flows may be incomplete until tested on physical Android and iOS devices.

Camera object detection is intentionally paused in this branch. The See route remains in the app shell, but the object-detection implementation has not been modernized yet.

## Tech Stack

- Expo SDK 56, React Native 0.85, and React 19 for the mobile application UI.
- Expo Router with file-based routing under `src/app`.
- TypeScript with Expo's base TypeScript configuration and `@/*` import aliases.
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

## Deployment

There is no deployment yet.

The app has not been published to the App Store, Google Play, Expo Application Services channels, or any other production release target. Future deployment work needs production Expo/EAS configuration, app signing, release profiles, store assets, privacy disclosures for microphone and speech recognition usage, and full device testing.

## Development Notes

- Conversations are stored locally with Expo SQLite and Drizzle ORM.
- Typed text-to-speech messages use Expo Speech.
- Voice recording uses Expo Speech Recognition and supports the current English/Arabic language toggle.
- The See flow is currently a placeholder; camera object detection is out of scope for this branch.
- Native speech recognition requires a development build rather than plain Expo Go.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
