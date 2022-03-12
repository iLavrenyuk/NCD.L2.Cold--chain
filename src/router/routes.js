export const routes = {
  Home: '/',
  Shipment: '/shipment',
  Receipt: '/receipt',
};

export const hashRoutes = {
  About: '#about',
  HowItWorks: '#how-it-works',
  Features: '#features',
  Location: '#location',
};

export const anchorRoutes = Object.fromEntries(Object.entries(hashRoutes).map(([key, item]) => [key, item.slice(1)]));
