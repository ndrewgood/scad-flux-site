export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Events', order: '_createdAt desc', types: ['event']},
      layout: {width: 'small'}
    },
    {name: 'notes',
    layout: {width: 'medium'}
    }
  ]
}
