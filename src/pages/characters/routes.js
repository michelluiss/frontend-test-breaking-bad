const Characters = () => import('./Characters').then(m => m.default || m);

export default [
  {
    path: '/characters',
    name: 'characters',
    component: Characters,
  },
];
