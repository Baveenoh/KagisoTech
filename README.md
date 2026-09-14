# KagišoTech Website Redesign

This version redesigns the site toward a professional South African IT/business-technology consultancy feel, taking structural inspiration from the type of service presentation used by established IT/automation firms while retaining KagišoTech's own branding, elephant identity and current capabilities.

## Included
- Image-based hero slider using the existing KagišoTech-generated visuals
- Larger header logo
- Service-led homepage
- Computer/software, IT support, antivirus, web/digital, business digital and K2/Nintex service areas
- Business-focused solutions page
- Packages/pricing philosophy without inventing unsupported prices
- Portfolio credibility rules
- Technology & security page
- Consultation form + confirmation page
- Johannesburg/Gauteng map section
- Branded elephant assistant UI
- Responsive navigation and mobile layout

## Production security reminders
The consultation form and chatbot are front-end demonstrations until connected to a secure backend. Before production:
- use HTTPS/TLS
- validate input server-side
- add anti-spam/rate limiting
- keep secrets/API keys server-side
- configure security headers
- maintain backups and test restoration
- protect administrator accounts with MFA
- review privacy/terms and data retention
- harden WHMCS before connecting it to live customer services

## Contact configuration
- Website contact form submits to `info@kagisotech.co.za` through FormSubmit.
- The first live submission may require the recipient to confirm the FormSubmit activation email.
- WhatsApp contact uses `+27 73 472 2046` via the floating WhatsApp action and the chatbot quick action.
