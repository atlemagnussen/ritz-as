export class GoogleService {
    private helloText: string;

    constructor()
    {
        this.helloText = "hello";
    }

    getHello(): string {
        return this.helloText;
    }
}
