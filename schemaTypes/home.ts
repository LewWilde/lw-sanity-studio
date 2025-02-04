import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'home-single',
    title: 'Home',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'title',
                type: 'string',
                initialValue: 'Home Page Settings',
                hidden: true
            }
        ),
        defineField({
            name: 'hero_text',
            title: 'Hero Text',
            type: 'blockContent',
        }),
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'featuredProjects',
        }),

    ]
}
)