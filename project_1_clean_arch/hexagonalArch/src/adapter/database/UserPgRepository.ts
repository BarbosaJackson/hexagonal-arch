import UserRepository from "@/core/user/service/UserRepository";
import User from "../../core/user/model/User";
import db_connection from "./db";

export default class UserPgRepository implements UserRepository {

    async insert(user: User) {
        await db_connection.query(`
            insert into users (id, name, email, password)
            values ($1, $2, $3, $4)
        `, [
                user.id, 
                user.name, 
                user.email, 
                user.password
            ]
        )
    }

    async searchByEmail(email: string): Promise<User | null> {
        const user = await db_connection.oneOrNone(
            "select * from users where email = $1",
            [email]
        )
        if(!user) return null;
        return user;
    }
}