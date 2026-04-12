# GitHub Issues Tracker

A polished, responsive issue-tracking interface designed using HTML, Tailwind CSS, and JavaScript. This project showcases an elegant dashboard for viewing, filtering, and inspecting GitHub-style issues with a clean and modern user experience.

## Overview

This repository implements a lightweight issue tracker UI that communicates with a REST API. It supports issue loading, status filtering, search, and detailed views in a modal popup.

## Technologies Used

- HTML
- Tailwind CSS
- DaisyUI
- JavaScript
- Google Fonts

## Features

1. **Dynamic Issue Loading**
   - Automatically fetches issue data from a remote API and displays it in responsive cards.

2. **Status Filtering**
   - Filter issues by `All`, `Open`, and `Closed` states using a tabbed interface.

3. **Search Functionality**
   - Search issues by keyword with results filtered based on the currently active tab.

4. **Detailed Issue Modal**
   - View issue description, author, labels, priority, and status in a dedicated modal.

5. **Responsive Design**
   - Mobile-friendly layout built with Tailwind CSS and optimized for modern screens.

## Project Structure

- `index.html` - Login page and entry point for the application.
- `login.js` - Client-side login validation and redirect logic.
- `main.html` - Main issue tracker dashboard.
- `index.js` - Core issue fetching, filtering, search, and rendering logic.
- `tailwind.init.css` - Custom Tailwind and font styling.
- `assets/` - Static images used in the UI.

## How to Use

1. Open `index.html` in a browser.
2. Use the demo credentials:
   - Username: `admin`
   - Password: `admin123`
3. Browse issues, apply status filters, and open issue details.

## Notes

- Uses the browser `fetch()` API to retrieve issue data.
- Employs JavaScript methods like `filter()` and `forEach()` to manipulate and render issue lists.
- Includes Google Fonts for a clean typography experience.

---

## Improvements

Future enhancements can include issue creation, user authentication, pagination, and backend integration for persistent issue management.
