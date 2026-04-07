# Roadside Observer

Roadside Observer is an Expo + React Native mobile app for **manual vehicle travel logging and collecting**.

It is designed for people who enjoy documenting road trips, regional plate designs, museum decals, park stickers, venue stickers, and other pieces of roadside culture. Each entry combines a photo you choose to capture with your own notes about meaning, history, and context.

## What it does

- Capture a photo from the device camera
- Save a travel-log entry locally with SQLite
- Record vehicle basics such as location, vehicle type, and color
- Log **plate / state / region** notes
- Log **sticker / badge / decal** notes
- Store the **meaning** and **history** of plates and stickers
- Organize sticker sightings by **subject** such as parks, history, comedy, music, education, outdoors, food, arts, and more
- Browse a **Collection Gallery** with dynamic subject filters
- Track local counts for repeated plates, stickers, and sticker subjects
- Export individual entries as PDF reports

## Positioning

This project is intentionally a **manual travel journal and collecting app**.

It does **not** automate license plate recognition, sticker profiling, law-enforcement lookups, or surveillance workflows. All information is user-entered and stored locally on-device.

## Tech stack

- Expo SDK 53
- React Native 0.79
- TypeScript
- expo-camera
- expo-sqlite
- expo-print
- expo-sharing

## Project structure

```text
.
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── src
    └── services
        ├── database.ts
        └── reportService.ts
```

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Start Expo

```bash
npx expo start
```

### 3. Run on a device or simulator

Use the Expo QR flow or run one of:

```bash
npm run ios
npm run android
npm run web
```

## Current screens

### Log entry
- live camera preview
- entry form for vehicle details
- plate catalog suggestions
- sticker catalog suggestions
- manual meaning/history fields
- dynamic sticker subject tagging
- quick-save capture flow

### Collection gallery
- browse saved entries
- filter by sticker subject
- see recurring themes across a trip or collection
- export any entry as a PDF report

## Example use cases

- documenting state plate designs on a family road trip
- tracking national park or museum stickers by region
- building a catalog of comedy club, music venue, or historic site decals
- keeping notes on recurring motifs you notice while traveling
- creating a personal archive of roadside culture

## Roadmap ideas

- trip-level grouping such as “Arizona 2026” or “Route 66 Weekend”
- tags beyond subjects
- search across saved entries
- map view for sightings
- image thumbnails in the gallery
- CSV / JSON export
- iCloud or cloud sync

## Notes for contributors

This repository currently contains a compact starter implementation. The app logic lives mostly in `App.tsx`, with persistence and report generation split into service files. A natural next step would be refactoring the UI into reusable components and adding navigation.

## License

Add the license of your choice here.
