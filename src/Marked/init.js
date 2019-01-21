const marked = require('marked');
const options = marked.setOptions({
  lexer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  baseUrl: 'string',
  headerIds: false,
  sanitizer: true,
  smartLists: false,
  silent: false,
  xhtml: false
});


export default marked;
