export interface UserItem {
    image: string | "";
    full_name: string | "";
    describe : string | "";
    tags: string[] | [];
    appeared_at: Date | null;
}