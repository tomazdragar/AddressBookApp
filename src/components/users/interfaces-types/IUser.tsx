export interface IUser {
    name: {
        title: string
        first: string
        last: string
    }
    email: string
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    location: {
        street: string
        city: string
        state: string
        postcode: string
    }
    phone: string
    cell: string
    nat: string
}