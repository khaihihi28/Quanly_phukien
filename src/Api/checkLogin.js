const checkLogin = (token) => (
    fetch('http://172.20.10.3/api/check_login.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            token
        })
    }).then(res => res.json())
)
export default checkLogin;