module.exports=(sequelize,DataTypes)=>{
    const blog=sequelize.define("blog",{
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          category:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return blog;
};