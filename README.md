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

Push a tag (`git tag v1.0.0 && git push origin v1.0.0`). The `Release` workflow builds the extension and attaches `toggle-system-appearance.tar.gz` to a GitHub release.
