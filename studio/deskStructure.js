import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['event', 'community', 'heroCTA', 'siteSettings', 'aboutSettings', 'gallery'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Backend Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Hero CTA')
        .child(
          S.editor()
            .id('heroCTA')
            .schemaType('heroCTA')
            .documentId('heroCTA')
            .title('Hero CTA')
        )
        .icon(MdSettings),
      S.listItem()
        .title('About Settings')
        .child(
          S.editor()
            .id('aboutSettings')
            .schemaType('aboutSettings')
            .documentId('aboutSettings')
            .title('About Settings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Community')
        .schemaType('community')
        .child(S.documentTypeList('community').title('Community')),
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event').title('Events')),
      S.listItem()
        .title('Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery Images'))
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
    ])
