export default (url) => {
    const matches = url.match(/^https:\/\/randomuser\.me\/api\/$/);
    const [match, ressource, id] = matches;
    return [match,ressource, id];
}