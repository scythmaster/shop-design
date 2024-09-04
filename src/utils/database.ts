// utils/Database.ts
import { MongoClient,ServerApiVersion } from 'mongodb';

export class Database {
    private static instance: Database;
    static client: MongoClient;
    private constructor() {}
    public static async connect(){
        if (!Database.instance) {
            console.log('Connecting to MongoDB...');
            this.client = new MongoClient("mongodb+srv://diptarajfb:Ihavethebestgirlfriend@huihuidb.vfr9u.mongodb.net/?retryWrites=true&w=majority&appName=HuiHuiDB", {
                serverApi: {
                  version: ServerApiVersion.v1,
                  strict: true,
                  deprecationErrors: true,
                },
              });
            //   if (!this.client.on){
                try {
                    await this.client.connect();
                    await this.client.db("admin").command({ ping: 1 });
                    Database.instance = this;
                  // await Database.instance.connect();
                  console.log('Connected to MongoDB');
                  }catch(e){
                    console.log(e);
                  } finally {
                    await this.client.close();
                  }
            //   }
        }
    }
}
