export default {
    title: 'Destination',
    name: 'destination',
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
            type: 'string'
        },
        {
            title: 'Title hero',
            name: 'titleHero',
            type: 'string'
        },
        {
            title: 'Planets cards',
            name: 'planetsCards',
            type: 'array',
            of: [
                {
                    title: 'Cards',
                    name: 'cards',
                    type: 'object',
                    fields: [
                        {
                            title: 'Planet',
                            name: 'planet',
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
                            title: 'Card text',
                            name: 'cardText',
                            type: 'text'
                        },
                        {
                            title: 'Average distance title',
                            name: 'averageDistanceTitle',
                            type: 'text'
                        },
                        {
                            title: 'Average distance number',
                            name: 'averageDistanceNumber',
                            type: 'text'
                        },
                        {
                            title: 'Estimated time title',
                            name: 'estimatedTimeTitle',
                            type: 'text'
                        },
                        {
                            title: 'Estimated time number',
                            name: 'estimatedTimeNumber',
                            type: 'text'
                        }
                    ]
                }
            ]
        }
    ],
}