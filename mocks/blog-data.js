const blogs = [
  {
    id: 1,
    title: 'Welcome to my new blog site',
    synopsis: "My first blog - and it's about the blog site I created",
    category: 'misc',
    content: [
      {
        type: 'p',
        value: 'This is my first blog entry every ever!',
      },
      {
        type: 'p',
        value:
          "Welcome to my new blog site. It's really just a prototype at the moment so be gentle.",
      },
      {
        type: 'p',
        value: [
          'Why am I doin this? Well the main purpose is to learn Angular. ',
          "I have fairly decent expertise building SPA's using React ",
          'but I would love to expand into new JS frameworks.',
        ],
      },
      {
        type: 'p',
        value: 'Expect many more features to be added periodically',
      },
    ],
  },
  {
    id: 2,
    title: 'My first blog about Angular',
    synopsis: "Some initial thoughts about the pro's and cons of Angular",
    category: 'Angular',
    content: [
      {
        type: 'p',
        value:
          'This is my first about Angular. There will be some text. There will be some <code> computer code; </code>',
      },
    ],
  },
  {
    id: 3,
    title: 'Angular Pipes',
    category: 'Angular',
    synopsis:
      'Pipes are a really good means of abstracting and reusing application logic.',
    content: [
      {
        type: 'p',
        value: [
          "One of my initial thought's about Angular is that it's quite different to ",
          'React in how application logic is applied to rendering the UI. An example ',
          'of this are the Ng Directives. I can declaritively apply conditional logic ',
          'directly to the template, for example <code>*ngIf</code>',
        ],
      },
      {
        type: 'p',
        value: 'Another example is the <code>*ngFor</code> directives',
      },
      {
        type: 'p',
        value: [
          'These template directives negate the need for JavaScipt I would ',
          'write in React.',
        ],
      },
      {
        type: 'p',
        value: [
          'So what if I wanted to apply operations to the data being bound to the ',
          'template? Well this is where Pipes come in. They provide a means to ',
          'apply good old JavaScript (well TypeScript) to the template directly.',
        ],
      },
      {
        type: 'p',
        value: ['First you need a Pipe directive '],
      },
      {
        type: 'c',
        value: ['<p [innerHTML]="item.value | joinStrings"> </p>'],
      },
      {
        type: 'p',
        value: ['And then you need to create a pipe'],
      },

      {
        type: 'c',
        value: [
          "import { Pipe, PipeTransform } from '@angular/core'; \n",
          '\n',
          '@Pipe({ \n',
          "  name: 'joinStrings', \n",
          '}) \n',
          'export class JoinStringsPipe implements PipeTransform { \n',
          "  transform(input: any, character: string = ''): any { \n",
          '    if (!Array.isArray(input)) { \n',
          '      return input; \n',
          '    } \n',
          ' \n',
          '    return input.join(character); \n',
          '  } \n',
          '} \n',
        ],
      },
      {
        type: 'p',
        value: [
          'In the above example, if a strings is composed of an array of strings, ',
          'then these are concatonated into a single string using the join method ',
          'on the array class object.',
        ],
      },
      {
        type: 'p',
        value: 'Neat huh?',
      },
    ],
  },
];

module.exports = blogs;
