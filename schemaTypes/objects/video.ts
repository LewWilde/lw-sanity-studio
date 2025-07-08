import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'object',
    fields: [
        defineField({
            name: 'src',
            title: 'Source',
            type: 'file',
            options: {
                accept: 'video/*'
            }
        }),
        defineField({
            name: 'autoplay',
            title: 'Autoplay',
            type: 'boolean',
        }),
        defineField({
            name: 'loop',
            title: 'Loop',
            type: 'boolean',
        }),
        defineField({
            name: 'poster',
            title: 'Poster',
            type: 'image',
        }),
    ]
})