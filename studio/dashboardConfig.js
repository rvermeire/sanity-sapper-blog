export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e35d4d40d7d3b6d634a2cb9',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ask7k8ox',
                  apiId: '87747288-e5f0-4dea-92cf-b28b9c24e3c1'
                },
                {
                  buildHookId: '5e35d4d40d7d3bb3ec4a2cad',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pggg2imd',
                  apiId: '2ae8daf1-e0e0-4ab6-86f7-af7eca9a473c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rvermeire/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pggg2imd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
