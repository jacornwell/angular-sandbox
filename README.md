# angular-sandbox
Repo to practice angular development.


## Essential npm Commands

### 1. Project Setup
* **`npm init`** — Starts an interactive walkthrough to create a `package.json` file.
* **`npm init -y`** — Creates a `package.json` file immediately using default values.

### 2. Installing & Removing Packages
* **`npm install` (or `npm i`)** — Installs all dependencies listed in `package.json`.
* **`npm install <package>`** — Installs a package locally into `node_modules` and adds it to `dependencies`.
* **`npm install -D <package>`** — Installs a package as a development-only dependency (`devDependencies`).
* **`npm install -g <package>`** — Installs a package globally on your machine for system-wide CLI tools.
* **`npm uninstall <package>` (or `npm un <package>`)** — Removes a package from `node_modules` and `package.json`.
* **`npm ci`** — Performs a clean, strict install directly from `package-lock.json` (best for CI/CD environments).

### 3. Updating & Auditing
* **`npm outdated`** — Checks for newer versions of your installed packages.
* **`npm outdated --json`** - Formats the output as JSON.
* **`npm update`** — Updates packages to the latest versions allowed by your `package.json` semver ranges.
* **`npm install <package>@latest`** — Forces an update to the absolute latest version, ignoring semver limits.
* **`npm audit`** — Scans your dependencies for known security vulnerabilities.
* **`npm audit fix`** — Automatically installs compatible updates to resolve security issues.
* **`npm audit --omit=dev`** - Omit the dev-dependencies from the audit results.

### 4. Running Scripts & Tools
* **`npm run <script-name>`** — Executes a custom script defined in the `"scripts"` section of `package.json` (e.g., `npm run dev` or `npm run build`).
* **`npm start`** — Shortcut to run the `"start"` script.
* **`npm test`** — Shortcut to run the `"test"` script.
* **`npx <package>`** — Executes a package binary without needing to install it globally first.

### 5. Inspection & Maintenance
* **`npm list --depth=0`** — Lists top-level packages installed in your current project (add `-g` for global packages).
* **`npm view <package>`** — Displays registry metadata, versions, and details for a package.
* **`npm cache clean --force`** — Clears the local npm cache to troubleshoot stubborn installation errors.