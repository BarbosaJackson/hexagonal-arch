import UserRepository from "@/core/user/service/UserRepository";
import User from "../../core/user/model/User";

export default class MockUsers implements UserRepository {

    private static readonly items: User[] = [];

    async insert(user: User) {
        const u = await this.searchByEmail(user.email);
        if(u) {
            return;
        }
        MockUsers.items.push(user);
    }

    async searchByEmail(email: string): Promise<User | null> {
        const items = MockUsers.items;
        return items.find(u => u.email === email) ?? null;
    }
}