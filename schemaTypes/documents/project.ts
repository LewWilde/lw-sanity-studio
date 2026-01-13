import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            title: "Featured image",
            name: "featuredImage",
            type: 'image',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
            options: {
                layout: 'tags'
            },
            validation: Rule => Rule.unique()
        }),
        defineField({
            title: "Client",
            name: "client",
            type: "string",
        }),
        defineField({
            title: "Year",
            name: "year",
            type: "string",
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'gallery',
        }),
    ]
})