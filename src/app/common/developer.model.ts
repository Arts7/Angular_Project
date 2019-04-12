import {Skill} from './skill.model'
export class developer {
    public lastName: string;
    public firstName: string;
    public age: number;
    public sexe: string;
    public bio: string;
    public skills: Array<Skill>;

    constructor (lastName: string, firstName:string, age: number, sexe: string, bio:string,skills:Array<Skill>){
        this.lastName = lastName,
        this.firstName = firstName,
        this.age = age,
        this.sexe = sexe,
        this.bio = bio,
        this.skills = skills
    }
    
    
}