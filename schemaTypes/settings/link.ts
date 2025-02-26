import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
        }),
        {
            name: 'internal',
            type: 'reference',
            to: [{ type: 'page' }, { type: 'project' }, { type: 'post' }],
            hidden: ({ parent, value }) => !value && !!parent?.external
        },
        {
            name: 'external',
            type: 'url',
            title: 'External',
            hidden: ({ parent, value }) => {
                return !value && !!parent?.internal
            }
        },

    ],
})