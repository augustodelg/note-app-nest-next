export const APP_ROUTES = {

    listArchived: '/notes?archived=true',
    listUnarchived: '/notes?archived=false',
    create: '/notes?archived=false&create=true',
    edit: (archived: boolean,noteId: string) => `/notes?archived=${archived}&noteId=${noteId}`,
    delete: (archived: boolean, noteId: string) => `/notes?archived=${archived}&remove=true&noteId=${noteId}`,

}
