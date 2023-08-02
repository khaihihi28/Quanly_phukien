const Register = (name, email, password) => (
    fetch('http://172.20.10.3/api/register.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    }).then(res => (res.text()))
)
export default Register