# MagiNotes
A lightweight, browser-based image annotation tool.

**Current Status:** Phase 1 Prototype (Core Interaction Logic)

## Features (Currently Implemented)
- **Click-to-Annotate:** Users can click anywhere on an image to create a marker.
- **Contextual Input:** A prompt collects the note data immediately upon clicking.
- **Hover Reveal:** Notes remain invisible (red markers) until hovered, preserving the image integrity.
- **Responsive Positioning:** Coordinates are calculated relative to the image container, not the viewport.

## Built with
- **HTML5 & CSS** (DOM manipulation and styling)
- **Vanilla JavaScript** (Event listeners and coordinate math)
- **No External Libraries** (Built from scratch to master DOM fundamentals)

## Roadmap
- [x] Phase 1: Core Annotation Logic
- [ ] Phase 2: Data Persistence (LocalStorage)
- [ ] Phase 3: Library & Folder System
- [ ] Phase 4: UI Polish