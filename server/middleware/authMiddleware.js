const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    try {
        
        const authHeader = req.headers['authorization'];
        
        
        if (!authHeader) {
            return res.status(401).json({ 
                message: 'Access denied. No token provided.' 
            });
        }

        
        const tokenParts = authHeader.split(' ');
        if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
            return res.status(401).json({ 
                message: 'Invalid token format. Use Bearer token.' 
            });
        }

        const token = tokenParts[1];

        
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ 
                        message: 'Token expired' 
                    });
                }
                return res.status(403).json({ 
                    message: 'Invalid token' 
                });
            }

            
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({ 
            message: 'Internal server error in auth middleware' 
        });
    }
};

module.exports = authenticateToken;