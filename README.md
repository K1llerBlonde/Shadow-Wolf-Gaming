# Shadow Wolf Gaming Website

Community hub for Shadow Wolf Gaming (Call of Duty – Modern Warfare & Black Ops).

## What’s Included

- **Home** – Hero, about, competitive highlight, membership levels, events preview, Discord widget
- **Roster** – Filterable member cards (Alliance / Alpha / SwG Team / Elite Team)
- **Events** – Upcoming events (update manually or later via Discord)
- **Clips & Screenshots** – Gallery (placeholders ready for real media)
- **Rules** – Code of Conduct
- **About** – Story & values
- **Join** – Membership levels + clear join steps

## How to Deploy (Free)

### Option A – Netlify (Easiest for beginners)

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up (free).
2. Drag and drop the entire `shadow-wolf-gaming` folder onto the Netlify dashboard.
3. Your site will be live on a random netlify.app URL within seconds.
4. Then connect your custom domain (see below).

### Option B – Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign up with GitHub (or email).
2. Click “Add New Project” → upload the folder or connect a GitHub repo.
3. Deploy. Free tier is excellent.

### Option C – GitHub Pages

1. Create a new GitHub repository.
2. Upload all files.
3. Go to Settings → Pages → Deploy from main branch.

## Connect ShadowWolfGaming.com (Namecheap)

1. After deploying, Netlify/Vercel will give you DNS records (usually an A record or CNAME).
2. Log into Namecheap → Domain List → Manage → Advanced DNS.
3. Add the records they provide (commonly):
   - CNAME for `www` pointing to your host
   - A record or ALIAS for the root (`@`) 
4. Wait 5–30 minutes for DNS to propagate.
5. In Netlify/Vercel, add the custom domain `shadowwolfgaming.com` and `www.shadowwolfgaming.com`.

Detailed screenshots and exact clicks will be provided once you choose a host.

## Updating Content

- **Roster**: Edit `roster.html` – change the placeholder names inside the `.member-card` divs.
- **Events**: Edit the event cards in `events.html` and the preview on `index.html`.
- **Gallery**: Replace the placeholder divs in `gallery.html` with real `<img>` tags or embeds.
- **Store link**: When ready, replace the “Coming Soon” links with your real merch URL.

## Next Steps (Stage 2)

When you’re ready we can add:
- A Discord bot for welcome messages and role management
- Automatic roster sync from Discord roles
- Better gallery / clip submission system

## Colors Used

- Background: near black `#0a0a0a`
- Cards: `#141414`
- Primary red: `#e10600`
- Bright red accent: `#ff1a1a`
- Text: white / off-white / gray
