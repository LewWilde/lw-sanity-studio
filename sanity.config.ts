import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import { structure } from './structure/stucture'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: 'fonsarce',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool(), codeInput(), media()],

  schema: {
    types: schemaTypes,
  },
})
