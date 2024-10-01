import fastify from 'fastify';
import sequelize from './config/database';
import postRoutes from './routes/post.route';
import errorHandler from './middlewares/errorHandler';
import { JsonSchemaToTsProvider } from '@fastify/type-provider-json-schema-to-ts'

const app = fastify().withTypeProvider<JsonSchemaToTsProvider>()

app.register(postRoutes);
app.setErrorHandler(errorHandler);

export default app;
