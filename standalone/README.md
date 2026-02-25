# Flopper - Console Modding Portfolio

A beautiful, interactive portfolio website for console modders and hardware enthusiasts. Built with vanilla HTML, CSS, and JavaScript with a retro PS2 aesthetic and integrated music player that streams MP3s from GitHub.

## Features

- **Pure Vanilla Stack**: No build process needed - just HTML, CSS, and JavaScript
- **Retro PS2 Theme**: Authentic console aesthetic with animations and scanlines
- **GitHub-Powered Music Player**: Stream MP3 files directly from your GitHub repository
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **No Dependencies**: Zero npm packages required
- **Easy Deployment**: Deploy anywhere (GitHub Pages, Netlify, Vercel, etc.)

## Quick Start

### 1. Clone or Fork this Repository

```bash
git clone https://github.com/YOUR_USERNAME/flopper.git
cd flopper
```

### 2. Set Up Your Music

Create a `music` folder in your repository:

```bash
mkdir music
```

Add your MP3 files to the `music` folder and commit:

```bash
cp /path/to/your/songs/*.mp3 music/
git add music/
git commit -m "Add music files"
git push
```

### 3. Configure Your Repository

Edit `config.js` and update with your GitHub details:

```javascript
const CONFIG = {
    GITHUB_REPO: 'YOUR_USERNAME/flopper',
    GITHUB_BRANCH: 'main',
    MUSIC_FOLDER: 'music'
};
```

### 4. Customize Your Content

Edit `index.html` to add your own:
- Portfolio title and bio
- Specialties/skills
- Links and social media
- Discord status (or remove it)

### 5. Deploy to GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** section
3. Select **Deploy from a branch**
4. Choose `main` branch and `/root` folder
5. Your site will be live at `https://YOUR_USERNAME.github.io/flopper`

Alternatively, deploy to:
- **Netlify**: Connect your repo and auto-deploy on push
- **Vercel**: Similar to Netlify
- **Any static host**: Just upload the files

## File Structure

```
flopper/
├── index.html        # Main HTML file
├── styles.css        # All CSS styling
├── app.js           # JavaScript functionality
├── config.js        # Configuration file (edit this!)
├── music/           # Your MP3 files go here
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
└── README.md        # This file
```

## Music Player

The music player automatically:
- Fetches all `.mp3` files from your `/music` folder on GitHub
- Displays them in alphabetical order
- Allows play/pause and next track navigation
- Shows progress with seekable bar
- Displays current time and duration
- Auto-advances to the next track when finished

## Customization

### Colors
Edit the color values in `styles.css`:
- `#5552F7` - Primary accent (purple)
- `#7774FF` - Light accent
- `#969696` - Secondary text
- `#2a2a2a` - Dark accent

### Fonts
Update the `font-family` in `styles.css` to use your preferred fonts.

### Sections
All content is in `index.html`. Find sections marked with `[ ABOUT ]`, `[ SPECIALTIES ]`, `[ AUDIO ]` etc.

## Troubleshooting

**Music player shows "No MP3 files found"**
- Make sure your repository is **public**
- Check that MP3 files are in `/music` folder
- Verify file names end with `.mp3` (case-sensitive)
- Ensure `config.js` has the correct repo name

**Music won't play**
- Check browser console for CORS errors
- Ensure your GitHub repo is public
- Try a different browser

**GitHub Pages not updating**
- Clear your browser cache
- Wait a few minutes for GitHub Pages to rebuild
- Check the repository's Actions tab for build status

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## License

Free to use and modify for your portfolio.

## Tips

1. **Add more content**: Edit `index.html` to add project showcases, testimonials, etc.
2. **Use custom domain**: Configure a custom domain in GitHub Pages settings
3. **Update music**: Just add/remove MP3s from `/music` folder and push - player updates automatically
4. **Optimize images**: Use optimized PNG/JPG files to reduce load time
5. **Analytics**: Add Google Analytics by inserting tracking code before `</body>` tag

## Credits

Built with love for console modders and hardware enthusiasts.

---

Happy modding! 🎮
