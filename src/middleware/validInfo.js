const validateInfo = async (req, res, next) => {
    const { fullName, email, userName, password } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === '/v1/users/register') {
        if (![fullName, email, userName, password].every(Boolean)) {
            return res.status(401).json('Missing Credentials!');
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid email');
        } else if (password.length < 7) {
            return res.status(401).json('password must be greater than 7')
        }
    } else if (req.path === '/v1/users/login') {
        if (![email, password].every(Boolean)) {
            return res.status(401).json('Missing Credentials');
        } else if (!validEmail(email)) {
            return res.status(401).json('Invalid email')
        } else if (password.length < 7) {
            return res.status(401).json('password must be greater than 7')
        }
    }

    next();
}
export default validateInfo;