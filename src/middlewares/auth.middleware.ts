import { FastifyReply, FastifyRequest } from 'fastify';
import jwt from 'jsonwebtoken';

class AuthMiddleware {
    static async authenticate(req: FastifyRequest, reply: FastifyReply) {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return reply.status(401).send({ message: 'Unauthorized' });
        }

        try {
            const secretKey = process.env.JWT_SECRET || 'your-secret-key'; // Remplacez par votre clé secrète
            const decoded = jwt.verify(token, secretKey);
            req.user = decoded; // Ajoutez les informations de l'utilisateur à la requête
        } catch (error) {
            return reply.status(403).send({ message: 'Invalid token' });
        }
    }
}

export default AuthMiddleware;
