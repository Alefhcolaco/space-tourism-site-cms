import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["geral", "homepage", "destination", "crew","technology"])


export default defineConfig({
  name: 'default',
  title: 'space-tourism-site-cms',

  projectId: 'o6g7h80h',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Geral")
              .id("geral")
              .child(
                S.document()
                  .schemaType("geral")
                  .documentId("geral")
              ),
            S.listItem()
              .title("Home")
              .id("homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepage")
              ),
            S.listItem()
              .title("Destination")
              .id("destination")
              .child(
                S.document()
                  .schemaType("destination")
                  .documentId("destination")
              ),
            S.listItem()
              .title("Crew")
              .id("crew")

              .child(
                S.document()
                  .schemaType("crew")
                  .documentId("crew")
              ),
            S.listItem()
              .title("Technology")
              .id("technology")
              .child(
                S.document()
                  .schemaType("technology")
                  .documentId("technology")
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
