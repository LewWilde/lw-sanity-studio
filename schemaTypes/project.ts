import { defineField, defineType } from 'sanity'
import blockContent from './blockContent'


export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug'
        }),
        defineField({
            title: "Featured image",
            name: "featuredimage",
            type: 'image',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ]
})