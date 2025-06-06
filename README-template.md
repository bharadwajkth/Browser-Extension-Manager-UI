# Extensions Manager UI — Bug Fix Showcase

This project demonstrates my ability to fix front-end layout bugs and enhance UI/UX for client-facing web applications. Below are the before (broken) and after (polished) states of the same project.

# Overview

- Tech Stack: HTML, CSS, JavaScript.
- JSON Source: Dynamically loaded extension list from data.json.
- Purpose: Display browser extension cards with filters and theme toggle.

# Issues in the broken layout

In the broken version of the site, the following problems existed:

## Layout & Structure Problems
- Extension cards were stacked vertically — no grid layout.
- No responsive design — looked broken on smaller or larger screens.
- Header and filters were misaligned and stacked instead of side-by-side.

## Styling Issues
- Body background was bright pink — poor color contrast.
- Font was changed to Comic Sans — unprofessional appearance.
- Buttons had dashed borders and clashing colors (yellow/red/green).
- Overly large paddings and element spacing made layout look unbalanced.

## Functionality Problems
- The light/dark theme toggle was labeled awkwardly and looked broken.
- Filter buttons were labeled inconsistently: “Actives”, “Inactive Ones”.
- Extension cards had unstyled or oversized buttons and switches.
- No consistent UI flow between cards and layout.


# Bug Fixes and Enhancements:

I fixed all the above issues and added enhancements to produce a professional and modern UI.

## Layout and Responsiveness
-Introduced a CSS grid layout with:
  1 column on mobile
  2 columns on tablets
  3 columns on desktops (as per client preview image)
-Used media queries for responsive behavior.

## Professional Styling
- Replaced Comic Sans with "Noto Sans" font.
- Background: Switched to #0d1117 (dark mode) and #ffffff (light mode).
- Used consistent modern styling with rounded corners and subtle shadows.
- Standardized color palette with green buttons for active states, red for delete, and neutral toggles.

## Features Added / Fixed

-Theme Toggle Button to switch between light and dark mode.
-Filter Buttons ("All", "Active", "Inactive") now behave as expected.
  Cards now include:
  Logo
  Name
  Description
  Remove button
  Toggle switch (for activating/deactivating extensions)
