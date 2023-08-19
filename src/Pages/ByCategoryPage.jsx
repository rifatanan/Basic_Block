import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { postByCategory } from "../APIRequest/APIRequest";
import Loader from "../Component/Loader";
import BlogList from "../Component/BlogList";
import { useEffect, useState } from "react";

const ByCategoryPage = () => {
    
    let {categoryID} = useParams();
    let [list,setList] = useState(null);
    //alert(categoryID);

    useEffect(() => {
        ( async() => {
            let res = await postByCategory(categoryID);
            console.log(res);
            setList(res);
        })()
    },[categoryID])

    console.log(list);

    return (
        <div>
            <Layout>
                { list === null? <Loader />:<BlogList list={list}/> }
            </Layout>
        </div>
    );
};

export default ByCategoryPage;