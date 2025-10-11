# bookmark

# Bookmark Manager Web Extension

## Overview

Bookmark Manager is a simple, lightweight web extension that allows users to efficiently save, organize, and manage their bookmarks directly in the browser.

## Features

- **Add Bookmarks:** Users can save the current page’s title, URL, tags, and description using the left sidebar form.
- **Edit Bookmarks:** Modify any saved bookmark’s details.
- **Delete Bookmarks:** Remove bookmarks individually with a confirmation prompt.
- **Search:** Real-time search functionality by title or tags.
- **Responsive Layout:** Full-screen layout with a 40/60 split:
  - Left (40%): Form for adding/editing bookmarks.
  - Right (60%): Grid of bookmark cards.
- **Local Storage:** Bookmarks are saved in the browser’s localStorage.
- **Icons:** HTML entities used for edit, delete, save, and search to ensure consistent rendering.

## Usage

1. Open the extension popup from the browser toolbar.
2. Use the **left sidebar** form to add a new bookmark or edit an existing one.
3. View all bookmarks in the **right section** as cards.
4. Click **edit** or **delete** icons on the cards to manage bookmarks.
5. Use the search input on top to filter bookmarks by title or tags.

## Notes

- Currently, the extension does not support folders or cross-device synchronization.
- Designed to be compatible with both **Chrome** and **Firefox** browsers.
