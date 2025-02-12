import express from 'express';
import { registerAdmin, loginAdmin, logoutAdmin, protectAdmin } from '../controller/adminController.js';

const router = express.Router();

router.post('/register', registerAdmin);  // Register new admin
router.post('/login', loginAdmin);  // Login admin
router.post('/logout', logoutAdmin);  // Logout admin
router.get('/protected-route', protectAdmin, (req, res) => {
    res.json({ message: 'Access granted to protected route', admin: req.admin });
});

export default router;
