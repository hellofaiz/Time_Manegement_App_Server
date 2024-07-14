// backend/src/controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const admin = require('firebase-admin');

const registerUser = async (req, res) => {
    const { email, name, photo, uid } = req.body; // Expect uid from the frontend

    try {
        const user = await prisma.user.upsert({
            where: { id: uid }, // Use the Firebase UID as the primary key
            update: { name, photo, email },
            create: { id: uid, email, name, photo },
        });

        console.log("user", user)
        res.json(user);
    } catch (error) {
        console.error('User registration failed:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

module.exports = { registerUser };
