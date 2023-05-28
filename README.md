# Design Systems Assignment

Table of Contents:

- [Installing React Native](#installing-react-native)
- [Project Installation](#project-installation)
- [Running](#running)
- [Source Code Location and Structure](#source-code-location-and-structure)
- [Testing](#testing)

## Installing React Native

See: https://reactnative.dev/docs/environment-setup

## Project Installation

1. Install 3rd party packages with `yarn`
2. Install pods with `pod install` (in _/ios_ folder)

## Running

1. `yarn start`
2. Run on **iOS Simulator** with `i` (preferred)

## Source Code Location and Structure

All relevant code for React Native can be found under _/src_ folder. This folder is referenced with namespace **@ds**.

Design System Components and other components can be found under _/src/components_ folder.

All the styling for related screen or component are applied in the **.tsx** file itself.

## Testing

TypeScript compiler and checking is executed with `yarn tsc`.

Unit Tests are executed with `yarn test`.
