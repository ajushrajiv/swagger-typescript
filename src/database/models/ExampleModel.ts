import { DataTypes, Model, Optional } from "sequelize";
import exampleSequelize from "../setup/database";
import { ExampleAttributes } from "../../interfaces/ExampleAttributes";

interface ExampleCreationAttributes extends Optional<ExampleAttributes, "id"> {}

class ExampleModel
  extends Model<ExampleAttributes, ExampleCreationAttributes>
  implements ExampleAttributes
{
  public id!: number;
  public firstName!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ExampleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "Examples", sequelize: exampleSequelize },
);

export default ExampleModel;
