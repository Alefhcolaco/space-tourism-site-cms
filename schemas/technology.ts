export default {
    title: 'Technology',
    name: 'technology',
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
            title: 'Technology cards',
            name: 'technologyCards',
            type: 'array',
            of: [
                {
                    title: 'Cards',
                    name: 'cards',
                    type: 'object',
                    fields: [
                        {
                            title: 'Image',
                            name: 'image',
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
                            title: 'Card title',
                            name: 'cardTitle',
                            type: 'string'
                        },
                        {
                            title: 'Card subtitle',
                            name: 'cardSubtitle',
                            type: 'string'
                        },
                        {
                            title: 'Card text',
                            name: 'cardText',
                            type: 'text'
                        },
                        
                    ]
                }
            ]
        }
    ],
}