const getSearch = (key) => (
    fetch(`http://172.20.10.3/api/search.php?key=${key}`, {
    }).then(res => res.json())
)
export default getSearch