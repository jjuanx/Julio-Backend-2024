// This is a new file for solution!
import { Model } from 'sequelize'

const loadModel = (sequelize, DataTypes) => {
  class Performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // TO-DO: define association here
      Performance.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' })
    }
  }

  Performance.init({
    group: {
      allowNull: false,
      type: DataTypes.STRING
    },
    appointment: {
      allowNull: false,
      type: DataTypes.DATE
    },
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'Performance'
  })
  return Performance
}

export default loadModel
