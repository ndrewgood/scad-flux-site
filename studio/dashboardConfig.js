export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'Because these sites are static builds, they need to be re-deployed to see the changes when documents are published. If Studio failed to build, go to the repo and "clear cache and deploy"',
              sites: [
                {
                  buildHookId: '5f273544ff928df5dbcb910b',
                  title: 'Sanity Studio',
                  name: 'scad-flux-site-studio',
                  apiId: 'e222ba3f-7370-4971-95b1-6d363062172d'
                },
                {
                  buildHookId: '5f273544dc0ccbf48332c2b9',
                  title: 'Live Site',
                  name: 'scad-flux-site',
                  apiId: 'fde42965-cb07-47a8-b9ba-a31ba956b4c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ndrewgood/ndrewgood-sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: '',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'notes',
    layout: {width: 'medium'}
    }
  ]
}
