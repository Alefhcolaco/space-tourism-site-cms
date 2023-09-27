export default {
    title: 'Crew',
    name: 'crew',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Span number',
            name: 'spanNumber',
            type: 'number'
        },
        {
            title: 'Title hero',
            name: 'titleHero',
            type: 'string'
        },
        {
            title: 'Crew cards',
            name: 'crewCards',
            type: 'array',
            of: [
                {
                    title: 'Cards',
                    name: 'cards',
                    type: 'object',
                    fields: [
                        {
                            title: 'Crew member',
                            name: 'crewMember',
                            type: 'image',
                            options: {
                                hotspot: true
                            },
                            fields: [
                                {
                                    title: 'Alt',
                                    name: 'alt',
                                    type: 'string',
                                }
                            ]
                        },
                        {
                            title: 'Member name',
                            name: 'memberName',
                            type: 'string'
                        },
                        {
                            title: 'Office',
                            name: 'office',
                            type: 'string'
                        },
                        {
                            title: 'Text',
                            name: 'text',
                            type: 'text'
                        },
                    ]
                }
            ]
        }
    ],
}