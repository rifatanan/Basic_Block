import axios from "axios";

const baseURL = "https://basic-blog.teamrabbil.com/api/";

export async function postCategories(){

    let result = await axios.get(baseURL+"post-categories")

    if(result.status === 200){
        return result.data;
    }
    else{
        return [];
    }
}

export async function postLatest(){

    let result = await axios.get(baseURL+"post-newest")

    if(result.status === 200){
        return result.data;
    }
    else{
        return [];
    }
}

export async function postByCategory(id){

    let result = await axios.get(baseURL+"post-list/"+id)

    if(result.status === 200){
        return result.data;
    }
    else{
        return [];
    }
}

export async function postDetails(id){

    let result = await axios.get(baseURL+"post-details/"+id)
    

    if(result.status === 200){
        return result.data;
    }
    else{
        return [];
    }
}