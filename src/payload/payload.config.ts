import path from 'path';
import { buildConfig } from 'payload/config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';

export default buildConfig({
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    }
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
    webpack(config) {
      
      config.module = {
        rules: [
          { test: /\.js$/, include: /node_modules/, loader: 'license-loader' },
              {
                test: /\.md$/,
                use: [
                  
                  {
                    loader: "markdown-loader",
                    options: {
                      // Pass options to marked
                      // See https://marked.js.org/using_advanced#options
                    },
                  },
                ],
              },
           
        ]
      };
      return config;
    }
  },
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
  globals: [
    {
      slug: 'header',
      fields: [
        {
          name: 'nav',
          type: 'array',
          fields: [
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
            },
          ],
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});
