import {useEffect, useRef, useState} from "react";

export interface Post {
    id: number;
    title: string;
}

export default function TestFetch() {

    const [posts, setPosts] = useState<Post[]>([]);
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {

        const fetchPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            try {
                const response = await fetch(`${BASE_URL}/posts`, {signal: abortControllerRef.current?.signal});
                const posts = (await response.json()) as Post[];
                setPosts(posts);
            } catch (e) {
                if(e.name === 'AbortError') {
                    console.log('Aborted..');
                    return;
                }
                console.log("Exception in fetch:", e)
            } finally {
                console.log("Final block executed..")
            }

        };

        fetchPosts();

    }, []);

    return (
        <>
            This is fetch test..
            {posts.map(p => {
                return <div>Post id: {p.id}, Title: {p.title}</div>
            })}
        </>
    );
}