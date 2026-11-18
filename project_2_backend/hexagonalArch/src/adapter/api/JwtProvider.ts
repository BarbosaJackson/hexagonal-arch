import jwt from 'jsonwebtoken'

export default class JwtProvider {

    constructor(
        private secret: string
    ) {

    }

    generate(payload: string | object): string {
        return jwt.sign(payload, this.secret, {
            expiresIn: "7d"
        });
    }

    getPayload(token: string): string | object {
        return jwt.verify(token, this.secret);
    }
}