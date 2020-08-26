export default {
    name: 'cta',
    title: 'CTA',
    type: 'document',
    fields: [
        {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: 'wont show on website, just for organization purposes'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'string',
            description: 'text that will be in the button',
            validation: Rule => Rule.required().max(30)
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        }
    ]
}