import {startTransition, useState, useTransition} from "react";
import {Button} from "@mui/material";
import AboutTab from "./AboutTab.tsx";
import PostsTab from "./PostsTab.tsx";
import ContactTab from "./ContactTab.tsx";

type Tab = 'about' | 'post' | 'contact';

export default function UseTransition() {

    const [tab, setTab] = useState<Tab>('about');
    const [isPending, startTransition] = useTransition();

    const selectTab = (tab: Tab) => {
        startTransition( () => {
            setTab(tab);
        } );

    }

    return (
        <div>
            <div>
                <Button variant="contained" onClick ={ () => selectTab('about') }>About</Button>
                <Button variant="contained" onClick ={ () => selectTab('post') }>Posts</Button>
                <Button variant="contained" onClick ={ () => selectTab('contact') }>Contact</Button>
            </div>

            {tab === 'about' && <AboutTab/>}
            {tab === 'post' && <PostsTab/>}
            {tab === 'contact' && <ContactTab/>}

        </div>
    );
}