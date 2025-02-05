import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'featuredProjects',
    title: 'Featured Projects',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
        defineField({
            title: 'Projects',
            name: 'documents',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'project'
                }
            }]
        })
    ],
})