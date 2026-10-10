# Kagando EMR frontend demonstration

A responsive, frontend-only prototype built with HTML, CSS and vanilla JavaScript. No backend, database, external API or framework is used.

## Open the prototype

Open `index.html` in a browser, or open `login.html` to try the demonstration sign-in. Any non-empty username and password opens the dashboard; this is not authentication.

Use the profile menu to preview dashboards for reception, nursing, clinicians, pharmacy, laboratory, management and administration. Module pages are linked from the sidebar. Forms, searches, tabs, notifications, modals, report printing and CSV export are local interface demonstrations.

## Project structure

- `index.html`, `login.html` — dashboard and demonstration sign-in
- `patients.html`, `reception.html`, `nursing.html`, `consultations.html` — patient care and intake modules
- `pharmacy.html`, `laboratory.html`, `appointments.html` — service modules
- `reports.html`, `administration.html`, `settings.html` — management modules
- `css/style.css`, `css/responsive.css` — shared design system and responsive styles
- `js/app.js` — sample data, page rendering and frontend interactions
- `images/logo.png` — supplied Kagando logo

All displayed patient, staff, appointment and clinical information is fictional sample content. Do not enter real patient information; this prototype is not connected to clinical services and is not for clinical or operational use.
