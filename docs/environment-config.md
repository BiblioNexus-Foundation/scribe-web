# Environment Configuration

This project uses a configuration system that allows you to easily switch between different environments (local, development, staging, production). This document explains how to use and manage environment configurations.

## Available Environments

- **local** - For local development (typically pointing to localhost services)
- **development** - For development environment
- **staging** - For staging/testing environment
- **production** - For production environment

## Environment Files

The following files are used to manage environment configuration:

- `.env.example` - Template showing all required variables (committed to git)
- `.env.local` - Local development values (not committed to git)
- `.env.development` - Development environment values (committed to git)
- `.env.staging` - Staging environment values (committed to git)
- `.env.production` - Production environment values (committed to git)
- `.env` - The active environment file (not committed to git, generated by set-env script)

## Switching Environments

To switch between environments, use the `set-env` script:

```bash
# Switch to local environment
pnpm set-env local

# Switch to development environment
pnpm set-env development

# Switch to staging environment
pnpm set-env staging

# Switch to production environment
pnpm set-env production
```

This script copies the contents of the corresponding `.env.[environment]` file to the `.env` file, which is then used by the application.

## Available Environment Variables

| Variable      | Description              | Required |
| ------------- | ------------------------ | -------- |
| `API_URL`     | The URL of the API       | Yes      |
| `ENVIRONMENT` | Current environment name | Yes      |

| `

## Using Environment Variables in Code

Environment variables are accessed through the `config` object from `@/lib/config`:

```typescript
import { config } from '@/lib/config';

// Access API URL
const apiUrl = config.api.url;

// Check environment
if (config.environment.isDevelopment) {
  // Do something in development only
}

// Access monitoring configuration
const appInsightsKey = config.monitoring.appInsightsKey;
```

## Adding New Environment Variables

1. Add the variable to the `.env.example` file with a placeholder value
2. Add the variable to each environment file (`.env.local`, `.env.development`, etc.)
3. Update the `envSchema` in `src/lib/config.ts` to include the new variable
4. Update the `processEnv` object in `src/lib/config.ts` to include the new variable
5. Update the `config` object in `src/lib/config.ts` to expose the new variable
6. Update the `ImportMetaEnv` interface in `src/vite-env.d.ts` to include the new variable

## Best Practices

1. **Never** commit sensitive information (like API keys) to version control
2. Use environment-specific values for variables that change between environments
3. Use descriptive variable names with the `VITE_` prefix
4. Document all environment variables in the `.env.example` file
5. Keep the `.env` file in `.gitignore` to prevent accidental commits
