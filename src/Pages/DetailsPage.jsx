import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Loader from "../Component/Loader";
import BlogDetails from '../Component/BlogDetails';
import { useEffect, useState } from "react";
import { postDetails } from "../APIRequest/APIRequest";

const DetailsPage = () => {

    let {postID} = useParams();
    let [list,setList] = useState(null);
    //alert(postID);

    useEffect(() => {
        (async() => {
            let res = await postDetails(postID);
            console.log(res);
            setList(res);
        })()
    },[postID])

    console.log(list);

    return (
        <div>
            <Layout >
                { list === null? <Loader /> : <BlogDetails list={list} />}
            </Layout>
        </div>
    );
};

export default DetailsPage;