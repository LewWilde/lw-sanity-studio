import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'gallery',
    title: 'Gallery',
    type: 'array',
    of: [{ type: 'image' }],
    options: {
        layout: 'grid'
    }
})