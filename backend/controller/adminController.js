import Admin from '../model/adminModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const registerAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new admin
        const admin = new Admin({
            email,
            password: hashedPassword,
        });

        await admin.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });

        // Set token in cookie
        res.cookie("jwt", token,{
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000,
            sameSite:"strict",
        })

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


export const logoutAdmin = (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    res.json({ message: 'Logged out successfully' });
};


export const protectAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, invalid token' });
    }
};
