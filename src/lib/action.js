"use server"

//import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
//import { signIn, signOut } from "./auth";
//import bcrypt from "bcryptjs";


export const addPost = async (formData) => {


    // const title = formData.get('title');
    // const desc = formData.get('desc');
    // const slug = formData.get('slug');
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb;
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        });
        await newPost.save();
        console.log('saved to DB')
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" }

    }


}