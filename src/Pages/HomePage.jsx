import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import BlogList from "../Component/BlogList";
import Loader from "../Component/Loader";
import { postLatest } from "../APIRequest/APIRequest";

const HomePage = () => {

    let [list,setList] = useState(null);

    useEffect(()=>{
        (async()=>{
            let res = await postLatest();
            console.log(res);
            setList(res);
        })()
    },[])

    //console.log(list)
    //console.log("this is homepage");
    
    return (
        <div>
            <Layout >
                {list === null?<Loader />:<BlogList list={list} />}
            </Layout>
        </div>
    );
};

export default HomePage;