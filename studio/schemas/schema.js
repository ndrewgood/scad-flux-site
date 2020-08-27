// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import event from './documents/event'
import siteSettings from './documents/siteSettings'
import aboutSettings from './documents/aboutSettings'
import heroCTA from './documents/heroCTA'
import community from './documents/community'
import gallery from './documents/gallery'

// Object types
import simplePortableText from './objects/simplePortableText'
import contentPortableText from './objects/contentPortableText'
import figure from './objects/figure'
import cta from './objects/cta'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'Flux Site',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    simplePortableText,
    contentPortableText,
    figure,
    cta,
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    aboutSettings,
    community,
    heroCTA,
    gallery,
    event
  ])
})
