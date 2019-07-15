const Episodes = () => import('./Episodes').then(m => m.default || m);

export default [
  {
    path: '/episodes',
    name: 'episodes',
    component: Episodes,
  },
];
