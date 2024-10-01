import app from './app';
import sequelize from './config/database';

const start = async () => {
    try {
        await app.listen({ port:3000 });
        console.log('Server is running on http://localhost:3000');
        
        // Synchroniser la base de données (optionnel)
        await sequelize.sync();
        
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
