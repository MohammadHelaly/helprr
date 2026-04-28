# Helprr

A mobile app designed to support blind and deaf people, developed using React Native.

## Project Status

This project is incomplete and paused. It was built as a learning and accessibility concept, and it is not currently being maintained as a production mobile application.

There is no deployment, app store release, or hosted production environment yet. Development was done with Expo Go and Expo development builds. Some device-dependent flows may be incomplete or require a native development build rather than Expo Go, especially flows that depend on camera access, microphone access, speech recognition, or native Android behavior.

The repository remains available primarily as a mobile UI showcase and historical reference for the app navigation, accessibility experience concepts, local conversation flows, settings screens, and realtime object-detection experiment.

## Tech Stack

- React Native 0.72 and React 18 for the mobile application UI.
- Expo SDK 49 and Expo CLI for local development, Expo Go testing, and development-build workflows.
- TypeScript with Expo's base TypeScript configuration.
- React Navigation bottom tabs and stack navigators for Home, Listen, See, Settings, and nested settings/conversation flows.
- Redux Toolkit and React Redux for app state management.
- Redux Persist and React Native Async Storage for persisting local conversation history.
- Expo Camera for camera and microphone permission handling and camera access.
- TensorFlow.js, `@tensorflow/tfjs-react-native`, and COCO-SSD for camera-based object detection.
- `@react-native-voice/voice` for speech-to-text recognition.
- Expo Speech for text-to-speech playback.
- Expo Linking, Expo Store Review, React Native Share, and Alert APIs for settings and utility actions.
- Expo Linear Gradient, custom theme constants, and reusable React Native components for styling.
- Native Android Gradle project files for local Android development builds.

## Project Structure

```text
|-- android/                         # Native Android project used for Expo dev builds
|   |-- app/
|   |   |-- src/main/                # Android manifest, Kotlin/Java entry points, resources
|   |   |-- build.gradle             # Android app Gradle configuration
|   |   `-- proguard-rules.pro
|   |-- gradle/                      # Gradle wrapper files
|   |-- build.gradle
|   |-- gradle.properties
|   `-- settings.gradle
|-- assets/
|   |-- data/licenseData.ts          # Third-party license data for acknowledgements
|   |-- adaptive-icon.png
|   |-- favicon.png
|   |-- icon.png
|   |-- logo.jpg
|   `-- splash.png
|-- components/
|   |-- AboutScreen/                 # About page sections
|   |-- ConversationScreen/          # Conversation input, voice recording, language toggle, bubbles
|   |-- HomeScreen/                  # Home hero section
|   |-- ListenScreen/                # Conversation list and call-to-action components
|   |-- SeeScreen/                   # Object detection camera and label overlay
|   `-- UI/                          # Shared buttons, warnings, settings rows, editable text
|-- constants/                       # Shared colors, sizes, and theme values
|-- hooks/                           # Typed Redux hooks
|-- navigation/                      # Bottom tab, Listen stack, and Settings stack navigators
|-- screens/                         # Route-level React Native screens
|-- store/
|   |-- slices/                      # Conversation and object-detection Redux slices
|   `-- store.ts                     # Redux store, persistence, and middleware setup
|-- App.tsx                          # App entry component, Redux provider, navigation shell
|-- app.json                         # Expo app configuration and native plugin settings
|-- babel.config.js                  # Expo Babel preset
|-- package.json
|-- tsconfig.json
|-- README.md
`-- LICENSE
```

## Prerequisites

- Node.js 18 or newer.
- npm. The repository includes `package-lock.json`, so npm is the expected package manager.
- Expo CLI through `npx expo`.
- Expo Go on a physical device for supported development flows.
- Android Studio and the Android SDK for Android development builds with `npm run android`.
- Xcode on macOS for iOS development builds with `npm run ios`.
- A physical device is recommended because the main app flows use the camera, microphone, speech recognition, and text-to-speech.
- On Android, speech-to-text depends on a compatible speech recognition engine, such as Google's speech recognition or TTS services.

## Environment Variables

No required environment variables are currently defined in this repository.

The Expo app configuration lives in `app.json`. The app currently does not include a backend API, database connection, remote deployment target, or checked-in `.env` template.

If backend services, analytics, remote model hosting, or app-store release settings are added later, document the required environment variables here before reviving the project.

## Runbook

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npm start
```

This runs `expo start`. From the Expo dev tools, you can open the app with Expo Go for compatible flows or with a development build for native-module-dependent flows.

Run the Android development build:

```bash
npm run android
```

This runs `expo run:android` and uses the checked-in Android project under `android/`.

Run the iOS development build:

```bash
npm run ios
```

This runs `expo run:ios`. The current repository does not include an `ios/` directory, so iOS work may require Expo to generate native iOS project files locally and requires macOS with Xcode installed.

Start the web target:

```bash
npm run web
```

The app is primarily a mobile experience, so the web target may not cover all camera, speech, and native-device behavior.

Run TypeScript checks:

```bash
npm run ts:check
```

There is no dedicated test script currently configured.

## Deployment

There is no deployment yet.

The app has not been published to the App Store, Google Play, Expo Application Services channels, or any other production release target. Future deployment work would need production Expo/EAS configuration, app signing, release profiles, store assets, privacy disclosures for camera/microphone/speech recognition usage, and full device testing.

Because the project is incomplete and paused, it should be treated as a portfolio/demo surface rather than a supported production accessibility app.

## Development Notes

- Conversations support typed text-to-speech messages through Expo Speech.
- Voice recording uses `@react-native-voice/voice` for speech-to-text and supports the current English/Arabic conversation language toggle.
- The See flow uses Expo Camera with TensorFlow.js and COCO-SSD to detect objects from the camera stream and display the detected label.
- Several settings and release-oriented actions are placeholders or partial flows, including appearance, tutorials, store rating, and store-link behavior.
- The repository does not contain a backend server, API layer, database schema, or deployment configuration.
- Some implementation details reflect the project's early-stage learning context and may need refactoring before any future production revival.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
