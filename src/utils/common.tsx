/**
 * Function which accepts a string and returns capitalized string(foo->Foo, bar->Bar,...).
 * @param {string} string - String which is capitalized.
 */
export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}