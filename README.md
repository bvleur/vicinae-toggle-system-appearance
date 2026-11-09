# Toggle System Appearance (Vicinae extension)

A [Vicinae](https://github.com/vicinaehq/vicinae) command that switches macOS between dark and light mode. It is a `no-view` command: it closes the launcher and shows a HUD with the new mode.

macOS asks once for Automation permission (Vicinae → System Events). If it was denied, the HUD says where to allow it (Privacy & Security > Automation).

## Install

Download `toggle-system-appearance.tar.gz` from the [latest release](../../releases/latest) and unpack it in `~/.local/share/vicinae/extensions/toggle-system-appearance/`, then restart Vicinae (it only scans extensions at startup).

My [dotfiles](https://github.com/bvleur/dotfiles) install it with chezmoi (`.chezmoiexternal`) from a pinned release.

## Develop

```bash
npm ci
npm run dev     # vici develop
npm run build   # vici build, output in ~/.local/share/vicinae/extensions/toggle-system-appearance
```

## Release

<!-- release:start -->
Current version: not released yet
<!-- release:end -->

```bash
scripts/release.sh patch   # or minor / major: bumps package.json and this README, tags and pushes
scripts/release.sh --check # every tag has a GitHub release and this README names the latest version
```

Pushing the tag runs the `Release` workflow, which builds the extension and creates the GitHub release with generated release notes and `toggle-system-appearance.tar.gz` attached. The first release is `scripts/release.sh major` (v1.0.0). Release notes are the [GitHub releases](../../releases).
