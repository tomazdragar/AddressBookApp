export function fetchSettings() {
    const settings = {
        title: "Settings",
        subtitle: "Settings page where you can change your browsing settings",
        excerpt: "Please select users location:",
        locale: "gb"
    }
    return ({
        type: 'FETCH_SETTINGS',
        payload: settings
    })
}

export function setLocale(locale) {
    return ({
        type: 'SET_LOCALE',
        payload: {locale}
    })
}