# Golden Hour Arrival Tracker

A modern, real-time VIP arrival tracking dashboard for luxury hospitality front desks. Features live countdowns, status alerts, check-in management, and a completed guest log.

## Features

- **Live Countdown Timers** — Real-time minutes and seconds until arrival
- **Smart Status Alerts** — Overdue (red), Critical (arriving now, blinking), Warning (30-min window), Upcoming (normal)
- **Check-in Management** — Quick check-in and edit buttons on each arrival card
- **Completed Log** — Timestamped record of checked-in guests
- **Modern UI** — Smooth animations, dark theme, responsive design
- **Add VIP Arrivals** — Form to add new guests to the tracker

## Deployment

This project is deployed on **Vercel** and can be accessed online.

### Deploy Your Own

Connect your GitHub repository to Vercel:

1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select your GitHub repository
4. Click "Deploy"

Vercel will automatically detect and deploy the static site. No build step required.

## Local Development

Serve locally using Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/index.html` in your browser.

## Files

- `index.html` — Main application with embedded CSS and JavaScript
- `vercel.json` — Vercel deployment configuration
- `.vercelignore` — Files to exclude from deployment

## Built With

- HTML5
- CSS3 (with CSS variables and modern layout)
- Vanilla JavaScript
- [Inter Font](https://fonts.google.com/specimen/Inter) from Google Fonts
