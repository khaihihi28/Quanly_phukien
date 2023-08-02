const SignIn = (email, password) => (
    fetch('http://172.20.10.3/api/login.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
)
export default SignIn;