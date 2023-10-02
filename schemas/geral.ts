export default {
    title: 'Geral',
    name: 'geral',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'navigation',
            type: 'array',
            title: 'Navegação',
            of: [
                {
                    name: 'navigationItem',
                    type: 'object',g
                    title: 'Item de navegação',
                    fields: [
                        {
                            title: 'Number',
                            name: 'number',
                            type: 'string',
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Título',
                            validation: (Rule: any) => Rule.required(),
                        },
                        {
                            name: 'link',
                            type: 'string',
                            title: 'Link',
                            validation: (Rule: any) => Rule.required(),
                        },
                    ],
                },
            ],
        },
    ],
}