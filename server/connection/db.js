import mongoose from "mongoose";

const Connection = async (username, password) => {
  try {
    const URL = `mongodb://${username}:${password}@e-news-shard-00-00.xl1xj.mongodb.net:27017,e-news-shard-00-01.xl1xj.mongodb.net:27017,e-news-shard-00-02.xl1xj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-14ei8h-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
