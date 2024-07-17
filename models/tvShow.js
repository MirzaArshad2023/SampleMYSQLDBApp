const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class tvShow extends Model { }
// Sequelize will create this table if it doesn't exist on startup
tvShow.init(
{
    id: {
        type: DataTypes.INTEGER, allowNull: false, autoIncrement:
            true, primaryKey: true
    },
    title: {
        type: DataTypes.STRING, allowNull: false, required: true
    },
    year: {
        type: DataTypes.STRING, allowNull: false, required: true 
    },
    creator: {
        type: DataTypes.STRING, // Store as JSON string
        allowNull: false,
        get() {
          const val = this.getDataValue('creator');
          return val ? JSON.parse(val) : [];
        },
        set(val) {
          this.setDataValue('creator', JSON.stringify(val));
        }
    },
    rating: {
        type: DataTypes.STRING, allowNull: false, required: true,
        
    },
    genre: {
        type: DataTypes.STRING, // Store as JSON string
        allowNull: false,
        get() {
          const val = this.getDataValue('genre');
          return val ? JSON.parse(val) : [];
        },
        set(val) {
          this.setDataValue('genre', JSON.stringify(val));
        }
      },
    runtime_in_minutes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      episodes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
},
    {
        sequelize: sequelizeInstance, modelName: 'tvShows', // use lowercase plural format
timestamps: true, freezeTableName: true
    }
)
module.exports = tvShow;