import { StructureBuilder } from "sanity/structure"

export const structure = (S: StructureBuilder) => {
    return S.list()
        .title('Base')
        .items([
            ...S.documentTypeListItems().filter(listItem => !['settings-single', 'navigation', 'media.tag'].includes(listItem.getId())),
            S.listItem().title('Settings').id('settings').child(
                S.list()
                    .title('Settings')
                    .items([
                        S.listItem()
                            .title('Site Settings')
                            .child(S.document().schemaType('settings-single')),
                        S.listItem()
                            .title('Navigation')
                            .child(
                                S.documentTypeList('navigation')
                            )



                    ])
            )


        ])
}