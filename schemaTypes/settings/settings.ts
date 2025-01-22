import { defineType } from 'sanity';


export default defineType({
    name: 'settings-single',
    title: 'Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text'
        }
    ]
}
)