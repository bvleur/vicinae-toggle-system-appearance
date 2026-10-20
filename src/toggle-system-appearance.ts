import { closeMainWindow, showHUD } from "@vicinae/api";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

// Flips the flag and reads it back, so the HUD reports the state macOS ended up in.
const SCRIPT = `
tell application "System Events"
  tell appearance preferences
    set dark mode to not dark mode
    return dark mode
  end tell
end tell
`;

export default async function Command() {
  await closeMainWindow();

  try {
    const { stdout } = await run("osascript", ["-e", SCRIPT]);
    await showHUD(stdout.trim() === "true" ? "Dark mode" : "Light mode");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    // -1743: the app hasn't been granted permission to control System Events.
    await showHUD(
      message.includes("-1743")
        ? "Allow Vicinae to control System Events in Privacy & Security > Automation"
        : "Failed to toggle system appearance",
    );
  }
}
