export default {
    title: 'Home',
    name: 'homepage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Background image hero',
            name: 'backgroundHero',
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
            title: 'Title hero',
            name: 'titleHero',
            type: 'string'
        },
        {
            title: 'Subitle',
            name: 'subtitle',
            type: 'string'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'text'
        },
        {
            title: 'Button',
            name: 'button',
            type: 'object',
            fields: [
                {
                    title: 'Button title',
                    name: 'buttonTitle',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
                {
                    title: 'Button link',
                    name: 'buttonLink',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        },
    ]
}