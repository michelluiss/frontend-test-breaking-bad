const Suggestions = () => import('./Suggestion').then(m => m.default || m)

export default [
  {
    path: '/suggestions',
    name: 'suggestions',
    component: Suggestions
  }
]
