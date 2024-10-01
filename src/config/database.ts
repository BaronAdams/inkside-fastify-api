import { Sequelize } from 'sequelize-typescript';
import Post from '../models/Post';

const sequelize = new Sequelize({
    database: 'blog',
    dialect: 'mysql', // ou 'postgres', selon votre choix
    username: 'root',
    password: 'password',
    models: [Post], // Ajoutez vos modèles ici
});

export default sequelize;
