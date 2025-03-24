import type { NavigationItem } from '../NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { BlogUrl, DocsUrl } from '../../../shared/common';

export const appNavigationItems: NavigationItem[] = [
  { name: 'AI Scheduler (Demo App)', to: routes.DemoAppRoute.to },
  { name: 'Test App', to: routes.TestAppRoute.to },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
];
