module.exports = ({ env }) => {
  
  console.log("AWS_ACCESS_KEY_ID", env("AWS_ACCESS_KEY_ID"))
  console.log("AWS_ACCESS_SECRET", env("AWS_ACCESS_SECRET"))
  console.log("AWS_S3_BUCKET_NAME", env("AWS_S3_BUCKET_NAME"))
  
  return {
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '30y',
      },
    }
  },

  email: {
    config: {
      provider: 'amazon-ses',
      settings: {
        defaultFrom: '"Skaut Trebic" <neodpovidat@skauttrebic.cz>',
        defaultReplyTo: 'neodpovidat@skauttrebic.cz'
      },
      providerOptions: {
        key: env('AWS_ACCESS_KEY_ID'),
        secret: env('AWS_ACCESS_SECRET'),
        amazon: 'https://email.us-east-1.amazonaws.com',
      },
    },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'eu-central-1',
        params: {
          Bucket: env('AWS_S3_BUCKET_NAME'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  'create-admin-customization': {
    enabled: true,
    resolve: './src/plugins/create-admin-customization'
  },

  ckeditor: {
    enabled: true,
    config:{
      plugin:{
        // disable data-theme tag setting //
        // setAttribute:false,

        // disable strapi theme, will use default ckeditor theme //
        // strapiTheme:false,

        // styles applied to editor container (global scope) //
        // styles:`
        // .ck.ck-editor__main .ck-focused{
        //   max-height: 700px;
        // }
        // :root{
        //   --ck-color-focus-border:red;
        //   --ck-color-text:red;
        // }
        // `
      },
      editor:{ // editor default config

        // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
        // if you need markdown support and output set: removePlugins: [''],
        // default is
        // removePlugins: ['Markdown'],

        // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
        toolbar: {
          items: [
            'paragraph',
            'heading1',
            'heading2',
            '|',
            'bold',
            'italic',
            'fontColor',
            'fontBackgroundColor',
            'fontFamily',
            'underline',
            'fontSize',
            '|',
            'undo',
            'redo',
            '|',
            'StrapiMediaLib',
            'bulletedList',
            'todoList',
            'numberedList',
            '|',
            'alignment',
            'outdent',
            'indent',
            'horizontalLine',
            '|',
            'insertTable',
            'mediaEmbed',
            'link',
            '|',
            'subscript',
            'superscript',
            'strikethrough',
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
        fontSize: {
          options: [
            9,
            11,
            13,
            'default',
            17,
            19,
            21,
            27,
            35,
          ],
          supportAllValues: false
        },
        fontFamily: {
          options: [
            'default',
            'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif',
            'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
          ],
          supportAllValues: true
        },
        fontColor: {
          columns: 5,
          documentColors: 10,
        },
        fontBackgroundColor: {
          columns: 5,
          documentColors: 10,
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'cs',
        // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
        image: {
          resizeUnit: '%',
          resizeOptions: [{
            name: 'resizeImage:original',
            value: null,
            icon: 'original'
          },
          {
            name: 'resizeImage:25',
            value: '25',
            icon: 'small'
          },
          {
            name: 'resizeImage:50',
            value: '50',
            icon: 'medium'
          },
          {
            name: 'resizeImage:75',
            value: '75',
            icon: 'large'
          }],
          toolbar: [
            'toggleImageCaption',
            'imageTextAlternative',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            'linkImage',
            'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableCellProperties',
            'tableProperties',
            'toggleTableCaption'
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
          ]
        },
        // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
        // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
        htmlSupport: {
          allow: [
            {
              name: 'img',
              attributes: {
                sizes:true,
                loading:true,
              }
            },
          ]
        },
      }
    }
  },

  'email-designer': {
    enabled: true,

    // ⬇︎ Add the config property
    config: {
      editor: {
        tools: {
          heading: {
            properties: {
              text: {
                value: 'Tady navrhněte email',
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: 'Anton',
                value: "'Anton', sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Anton',
              },
              {
                label: 'Lato',
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: 'https://fonts.googleapis.com/css?family=Lato',
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{= USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ],
        },
        appearance: {
          theme: 'dark',
          panels: {
            tools: {
              dock: 'left',
            },
          },
        },
      },
    },
  },

  comments: {
    enabled: true,
    config: {
      enabledCollections: ['api::post.post'],
      entryLabel: {
        '*': ['Title', 'title', 'Name', 'name', 'Subject', 'subject'],
        'api::post.post': ['title'],
      },
      gql: {
        'auth': true
      },
    },
  },

  'config-sync': {
    enabled: true,
    config: {
      syncDir: 'config/sync/',
      minify: false,
      importOnBootstrap: false,
      customTypes: [],
      excludedTypes: [],
      excludedConfig: [],
    },
  },

}};
