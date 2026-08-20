# Git Workflow Safety & Design Rules

## 1. Strict Protocol: No Automatic Git Push
1. Never run `git push` automatically upon task completion.
2. Always summarize changes and ask the user to inspect/test locally first.
3. Only execute `git push` when the user explicitly requests or approves it.

## 2. Requirement Clarification & Data Requests
1. If the user's prompt or requirements are ambiguous or incomplete, always ask clarifying questions before proceeding.
2. If additional data, fields, or credentials are required, immediately inform the user and request the information.

## 3. Clean & Minimal UI Style Guidelines
1. Keep the UI layout clean, concise, and professional.
2. Minimize the use of emojis in UI labels, badges, and buttons. Prefer SVG icons or plain text.
