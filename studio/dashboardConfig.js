export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc49b899ad37b4664257b44',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nz3oupyi',
                  apiId: '5dfc9831-1813-4b32-8c70-8462b19de347'
                },
                {
                  buildHookId: '5fc49b89f63c2e55f59e5e77',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bid7eomc',
                  apiId: '1751ea9f-f48f-4010-8962-0a88c2dac7e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fatkursb/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bid7eomc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
