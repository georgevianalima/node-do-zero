import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    #videos = new Map()

    // Set, Map

    async list(search) {

        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike "%${search}%"`
        } else {
            videos = await sql `select * from videos`
        }
        
        
    }

    async create(video) {

        const videoId = randomUUID()

        await sql` into videos (id, title, RTCSessionDescription, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`
        
    }

    update(id, video) {
        
    }

    delete(id, video) {
        
    }
}