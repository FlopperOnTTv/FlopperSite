# GitHub Setup for Music Player

This guide walks you through setting up the music player to fetch MP3s from GitHub.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/new) and create a new public repository
2. Name it something like `flopper-music` or `my-portfolio-music`
3. Initialize with a README (optional)
4. Copy the repository URL (format: `https://github.com/YOUR_USERNAME/YOUR_REPO.git`)

## Step 2: Create the Music Folder

Clone your new repository locally:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

Create a `music` folder:

```bash
mkdir music
```

## Step 3: Add Your MP3 Files

Add your MP3 files to the `music` folder:

```bash
# Copy your MP3 files into the music folder
cp /path/to/your/songs/*.mp3 music/
```

Commit and push to GitHub:

```bash
git add .
git commit -m "Add music files"
git push -u origin main
```

## Step 4: Update Your Portfolio

In your portfolio's `src/App.tsx`, update the MusicPlayer component with your repository information:

```typescript
<MusicPlayer githubRepo="YOUR_USERNAME/YOUR_REPO" githubBranch="main" />
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO` with your repository name

## Step 5: Deploy to GitHub Pages (Optional)

To host your entire portfolio on GitHub Pages:

1. In your portfolio repository settings, go to **Pages**
2. Select **Build and deployment** source as "GitHub Actions"
3. Create a `.github/workflows/deploy.yml` file in your portfolio repo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Commit and push. Your site will deploy automatically!

## How the Music Player Works

- The player fetches all `.mp3` files from the `/music` folder in your GitHub repository
- Files are sorted alphabetically
- You can play/pause and skip to the next track
- A progress bar shows the current playback position
- The player supports keyboard and mouse controls

## Adding More Songs

Simply add more MP3 files to the `music` folder in your GitHub repository and push:

```bash
cp new-song.mp3 music/
git add music/new-song.mp3
git commit -m "Add new song"
git push
```

The player will automatically pick them up on next page load.

## Troubleshooting

**"No MP3 files found"** - Make sure:
- Your repository is public
- MP3 files are in a `/music` folder
- File names end with `.mp3` (case-sensitive)

**Player shows error** - Check:
- The GitHub repo name is correct
- MP3 files are actually in the `/music` folder
- Your repository is public (GitHub API requires this)
