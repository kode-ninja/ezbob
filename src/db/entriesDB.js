// a quick way to mock around with the search results DB
const titles = [
    'React JS',
    'Vue JS',
    'React JS Tutorial',
    'Vue JS Tutorial',
    'React JSX',
    'React JS Documentation',
    'React JS Interview Questions',
    'React JSON Schema Form',
    'React JWT',
    'React JSS',
    'React JS Hooks',
    'React JS Context API',
    'React JS vs Vue',
    'React JS For Beginners',
]
export const searchResultEntries = titles.map((title, idx) => ({
    id: idx + 1,
    title: title,
    url: 'https://www.google.com/',
    description: 'The description about ' + title
}));