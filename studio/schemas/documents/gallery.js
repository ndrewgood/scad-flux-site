import {format} from 'date-fns'

export default {
  name: 'gallery',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
        name: 'text',
        title: 'Text',
        type: 'string',
        description: 'to be displayed with image'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ],
}
