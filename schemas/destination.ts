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
            type: 'number'
        },
        {
            title: 'Title hero',
            name: 'titleHero',
            type: 'string'
        },
        {
            title: 'Navigation tabs',
            name: 'navigationTabs',
            type: 'array',
            of: [
                {
                    title: 'Tab links',
                    name: 'tabLinks',
                    type: 'object',
                    fields: [
                        {
                            title: 'Tab link',
                            name: 'link',
                            type: 'string',
                        }
                    ]
                }
            ],
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