import { TagDTO } from "./tag.domain";

export interface UserDTO {
    image: string | "";
    full_name: string | "";
    description : string | "";
    tags: TagDTO[] | [];
}