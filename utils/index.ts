"use client"
export async function fetchNews(){
    const data = await fetch('https://news-api.lublot.dev/api/posts')

    return await data.json()

}