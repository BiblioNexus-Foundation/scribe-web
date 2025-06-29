import { createRootRoute, createRoute } from '@tanstack/react-router';

import { App } from '@/app';
import { AboutPage } from '@/layouts/about';
import { AppInsightsTestPage } from '@/layouts/app-insights-test';
import { HomePage } from '@/layouts/home';
import { TailwindTestPage } from '@/layouts/tailwind-test';

export const rootRoute = createRootRoute({
  component: App,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

export const tailwindTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tailwind-test',
  component: TailwindTestPage,
});
export const appInsightsTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/app-insights-test',
  component: AppInsightsTestPage,
});
