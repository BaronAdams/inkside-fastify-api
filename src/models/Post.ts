import { Optional } from 'sequelize';
import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, UpdatedAt, CreatedAt, Validate } from 'sequelize-typescript';

export interface IPostAttributes{
    id: string;
    title?: string;
    isDraft?: boolean;
    content?: string;
    categories?: string;
    authorId: string;
    coverPic?: string;
    views?: number;
    likes?: string;
    shares?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IPostCreationAttributes extends Optional<IPostAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

@Table
class Post extends Model<IPostAttributes, IPostCreationAttributes> implements IPostAttributes {
    @PrimaryKey
    @Column(DataType.STRING)
    public id!: string;

    @Column(DataType.STRING)
    @Validate({
        postIsAnDraft(value: boolean) {
            if (!this.isDraft && !this.title) {
                throw new Error('Title is required when post is not a draft.');
            }
        },
    })
    public title!: string;

    @Column(DataType.TEXT)
    public content!: string;

    @Column(DataType.BOOLEAN)
    public isDraft?: boolean;

    categories?: string;
    authorId: string;
    coverPic?: string;
    views?: number;
    likes?: string;
    shares?: string;
    @CreatedAt
    @Column(DataType.DATE)
    public readonly createdAt!: Date;


    @UpdatedAt
    @Column(DataType.DATE)
    public readonly updatedAt!: Date;
}

export default Post;
