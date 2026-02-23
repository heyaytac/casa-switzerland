# CASA Switzerland - AI Real Estate Platform

## Overview
AI-powered real estate platform for Switzerland (German). Customers search properties like on Immobilienscout24. Agents just register — AI handles uploads, calls, and customer requests via a single phone number.

## Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend** (later): Supabase
- **Language**: German (Switzerland)

## Pages

### Customer-Facing
1. **Homepage** (`/`) — Hero search, featured listings, AI agent value prop
2. **Immobilien suchen** (`/immobilien`) — Search/filter listings (Kanton, Preis, Zimmer, Fläche, Typ)
3. **Immobilie Detail** (`/immobilien/[id]`) — Full listing with gallery, map, contact form
4. **Über uns** (`/ueber-uns`) — About the platform

### Agent-Facing
5. **Für Makler** (`/fuer-makler`) — Landing page explaining AI features
6. **Makler Registrierung** (`/fuer-makler/registrieren`) — Registration form
7. **Makler Dashboard** (`/dashboard`) — Overview: listings, leads, AI call stats
8. **AI Telefonagent** (`/ki-telefonagent`) — Info about the single-number AI phone agent

## Key Features
- Swiss canton-based search (Zürich, Bern, Luzern, etc.)
- CHF currency, Swiss formatting
- AI phone agent: 1 number for all agents
- Responsive, modern design
