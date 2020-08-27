import {format} from 'date-fns'

export default {
  name: 'community',
  title: 'Community Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image'
    },
    {
        name: 'year',
        title: 'Year',
        type: 'string',
        description: 'not sure if we will use this data yet',
        options: {
            list: [
                {title: 'Freshmen', value: 'freshmen'},
                {title: 'Sophomore', value: 'sophomore'},
                {title: 'Junior', value: 'junior'},
                {title: 'Senior', value: 'senior'},
                {title: 'Alumni', value: 'alumni'}
            ]
        }
    },
    {
        name: 'title',
        title: 'Title',
        type: 'string'
    },
    {
      name: 'portfolio',
      title: 'Portfolio',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
